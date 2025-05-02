import React from "react";
import { useEditorContext } from "../../contexts/EditorContext";

const EditorToolbar = () => {
  const { language, switchLanguage, theme, switchTheme } = useEditorContext();

  return (
    <div className={`headings code-editor-heading ${theme}`}>
      Code Editor
      <div className='code-editor-dropdowns'>
        <select
          className={`dropdowns ${theme}`}
          value={language}
          onChange={(e) => switchLanguage(e.target.value)}
        >
          <option value='' disabled>Language</option>
          <option value='python'>Python</option>
          <option value='javascript'>JavaScript</option>
        </select>

        <select
          className={`dropdowns ${theme}`}
          value={theme}
          onChange={(e) => switchTheme(e.target.value)}
        >
          <option value='' disabled>Theme</option>
          <option value='light'>light</option>
          <option value='dark'>dark</option>
        </select>
      </div>
    </div>
  );
};

export default EditorToolbar;
