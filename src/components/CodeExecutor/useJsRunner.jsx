import { useEditorContext } from "../../contexts/EditorContext";

const useJsRunner = () => {
  const { code, setOutput, setError, setVisualizations } = useEditorContext();

  // Visualize function to capture the visualizations
  const visualize = (array, type, color, heading) => {
    const deepCopy = (arr) => JSON.parse(JSON.stringify(arr));
    if (type === 1) {
      if (Array.isArray(array) && !Array.isArray(array[0])) {
        setVisualizations((prev) => [
          ...prev,
          {
            type: 1,
            color,
            heading: heading.join(","),
            data: deepCopy(array),
          },
        ]);
      } else {
        console.warn("Invalid 1D array.");
      }
    } else if (type === 2) {
      if (Array.isArray(array) && Array.isArray(array[0])) {
        setVisualizations((prev) => [
          ...prev,
          {
            type: 2,
            color,
            heading: heading.join(","),
            data: deepCopy(array),
          },
        ]);
      } else {
        console.warn("Invalid 2D array.");
      }
    } else {
      console.warn("Unsupported type for visualization.");
    }
  };

  const runJs = () => {
    try {
      const result = new Function("visualize", code)(visualize);
      setOutput(result === undefined ? "undefined" : JSON.stringify(result));
      setError("");
    } catch (err) {
      setError(`Error: ${err.message}`);
      setVisualizations([]);
    }
  };

  return {
    runJs,
  };
};

export default useJsRunner;
