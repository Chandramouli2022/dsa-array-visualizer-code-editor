import React, { useEffect, useState } from "react";
import PythonExecutor from "./components/PythonExecutor/PythonExecutor.jsx";
import CodeExecutor from "./components/CodeExecutor/CodeExecutor.jsx";
import { EditorProvider, useEditorContext } from "./contexts/EditorContext";

function App() {
  const { language, switchLanguage, theme, switchTheme } = useEditorContext();
  const [mode, setMode] = useState("javascript"); // 'python' or 'js'
  const [pyodide, setPyodide] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPyodide = async () => {
      const instance = await window.loadPyodide();
      setPyodide(instance);
      setLoading(false);
    };
    loadPyodide();
  }, []);

  return (
    <div className={`app ${theme}`}>
      {loading ? (
        <div className='loader-wrapper'>
          <p className='loading-text'>
            Loading the Environment
            <span className='dot'>.</span>
            <span className='dot'>.</span>
            <span className='dot'>.</span>
          </p>
        </div>
      ) : language === "python" ? (
        <PythonExecutor pyodide={pyodide} />
      ) : (
        <CodeExecutor />
      )}
    </div>
  );
}

export default App;
