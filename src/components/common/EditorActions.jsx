import React from "react";
import { useEditorContext } from "../../contexts/EditorContext";

const EditorActions = ({ onRun }) => {
  const { clearCode, clearButton, code } = useEditorContext();

  const handleCopy = () => {
    navigator.clipboard
      .writeText(code)
      .then(() => alert("Code copied to clipboard!"))
      .catch((err) => alert("Failed to copy: " + err));
  };

  return (
    <div style={{ marginTop: "10px" }}>
      <button className='button' onClick={onRun}>
        Run
      </button>
      <button className='button' onClick={clearCode}>
        Clear All
      </button>
      <button className='button' onClick={clearButton}>
        Clear O/P
      </button>
      <button className='button' onClick={handleCopy}>
        Copy
      </button>
    </div>
  );
};

export default EditorActions;
