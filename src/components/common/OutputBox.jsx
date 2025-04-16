import React from "react";
import { useEditorContext } from "../../contexts/EditorContext";

const OutputBox = () => {
  const { output, error, theme} = useEditorContext();
  return (
    <div className='output-box'>
      <strong>Output:</strong>
      <pre className={`output-box-pre ${theme}`}>{error ? `Error: ${error}` : output}</pre>
    </div>
  );
};

export default OutputBox;
