import React, { createContext, useContext, useState } from "react";
import { DEFAULT_CODE } from "../constants/codeConfigs";
import { EDITOR_THEMES } from "../constants/themes";

const EditorContext = createContext();

export const EditorProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark"); // 'light' or 'dark'
  const [language, setLanguage] = useState("javascript"); // 'javascript' or 'python'
  const [code, setCode] = useState(DEFAULT_CODE.javascript);
  const [output, setOutput] = useState("Ready to run your code!");
  const [error, setError] = useState("");
  const [visualizations, setVisualizations] = useState([]);
  const [editorRef, setEditorRef] = useState(null);

  const switchTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  const switchLanguage = (lang) => {
    setLanguage(lang);
    setCode(DEFAULT_CODE[lang]);
    setVisualizations([]);
    setOutput("Ready to run your code!");
    setError("");
  };

  const clearButton = () => {
    // setCode("");
    setOutput("Ready to run your code!");
    setError("");
    setVisualizations([]);
  };
  const clearCode = () => {
    const shouldClear = window.confirm("Are you sure you want to clear all code and outputs?");
    if (editorRef && shouldClear) {
      editorRef.setValue("");
      setCode("");
      clearButton();
    }
  };

  return (
    <EditorContext.Provider
      value={{
        theme,
        language,
        code,
        output,
        error,
        visualizations,
        setVisualizations,
        setOutput,
        setError,
        setCode,
        switchTheme,
        switchLanguage,
        clearButton,
        setEditorRef,
        clearCode,
        monacoTheme: EDITOR_THEMES[theme],
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};

export const useEditorContext = () => useContext(EditorContext);
