import React from "react";
import EditorWrapper from "../common/EditorWrapper";
import OutputBox from "../common/OutputBox";
import useJsRunner from "./useJsRunner";
import Visualizer from "../common/Visualizer";
import "../common/styles.css";
import { useEditorContext } from "../../contexts/EditorContext";
import { languages } from "monaco-editor";

const CodeExecutor = () => {
  const { runJs } = useJsRunner();
  const { language, switchLanguage, theme, switchTheme } = useEditorContext();
  return (
    <div className='container'>
      <div className='left-pane'>
        <div className={`headings code-editor-heading ${theme}`}>
          JavaScript Code Editor.
          <div className='code-editor-dropdowns'>
            <select
              className={`dropdowns ${theme}`}
              value={language}
              onChange={(e) => {
                switchLanguage(e.target.value);
              }}
            >
              <option value='' disabled>
                Language
              </option>
              <option value='python'>Python</option>
              <option value='javascript'>JavaScript</option>
            </select>

            <select
              className={`dropdowns ${theme}`}
              value={theme}
              onChange={(e) => {
                switchTheme(e.target.value);
              }}
            >
              <option value='' disabled>
                Theme
              </option>
              <option value='light'>light</option>
              <option value='dark'>dark</option>
            </select>
          </div>
        </div>
        <EditorWrapper />
        <button className='button' onClick={runJs}>
          Run
        </button>
        <OutputBox />
      </div>

      <div className='right-pane'>
        <div className={`headings ${theme}`}>Array Visualizations</div>
        <Visualizer />
      </div>
    </div>
  );
};

export default CodeExecutor;
