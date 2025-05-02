import React from "react";
import EditorWrapper from "../common/EditorWrapper";
import OutputBox from "../common/OutputBox";
import usePythonRunner from "./usePythonRunner";
import Visualizer from "../common/Visualizer";
import EditorToolbar from "../common/EditorToolbar";
import EditorActions from "../common/EditorActions";
import "../common/styles.css";

const PythonExecutor = ({ pyodide }) => {
  const { runPython } = usePythonRunner(pyodide);

  return (
    <div className='container'>
      <div className='left-pane'>
        <EditorToolbar />
        <EditorWrapper />
        <EditorActions onRun={runPython} />
        <OutputBox />
      </div>
      <div className='right-pane'>
        <div className='headings'>
          Array Visualizations</div>
        <Visualizer />
      </div>
    </div>
  );
};

export default PythonExecutor;
