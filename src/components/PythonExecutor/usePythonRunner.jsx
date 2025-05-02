import { useEditorContext } from "../../contexts/EditorContext";

const usePythonRunner = (pyodide) => {
  const { code, setOutput, setError, setVisualizations } = useEditorContext();

  const runPython = async () => {
    if (!pyodide) return;

    try {
      let collected = [];
      let stdout = "";

      pyodide.globals.set("visualize", (array, type, color, heading) => {
        const jsArray = array.toJs();
        const deepCopy = JSON.parse(JSON.stringify(jsArray));
        if (type === 1) {
          collected.push({
            type: 1,
            heading: heading.join(","),
            color: color,
            data: deepCopy,
          });
        } else if (
          type === 2 &&
          Array.isArray(deepCopy) &&
          deepCopy.every(Array.isArray)
        ) {
          collected.push({
            type: 2,
            heading: heading.join(","),
            color: color,
            data: deepCopy,
          });
        } else {
          console.warn("Unsupported or invalid visualize data", deepCopy);
        }
      });

      pyodide.setStdout({ batched: (s) => (stdout += s) });

      await pyodide.runPythonAsync(code);

      setOutput(stdout);
      setVisualizations(collected);
      setError("");
    } catch (err) {
      setError(err.toString());
      setVisualizations([]);
    }
  };

  return { runPython };
};

export default usePythonRunner;
