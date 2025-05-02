import React from "react";
import EditorWrapper from "../common/EditorWrapper";
import OutputBox from "../common/OutputBox";
import useJsRunner from "./useJsRunner";
import Visualizer from "../common/Visualizer";
import EditorToolbar from "../common/EditorToolbar";
import EditorActions from "../common/EditorActions";
import "../common/styles.css";

const CodeExecutor = () => {
  const { runJs } = useJsRunner();

  return (
    <div className='container'>
      <div className='left-pane'>
        <EditorToolbar />
        <EditorWrapper />
        <EditorActions onRun={runJs} />
        <OutputBox />
      </div>
      <div className='right-pane'>
        <div className='headings'>Array Visualizations</div>
        <Visualizer />
      </div>
    </div>
  );
};

export default CodeExecutor;
