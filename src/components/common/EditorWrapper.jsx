import React, { useEffect, useRef } from "react";
import * as monaco from "monaco-editor/esm/vs/editor/editor.api";
import "monaco-editor/esm/vs/editor/editor.all";
import { useEditorContext } from "../../contexts/EditorContext";

const EditorWrapper = () => {
  const { code, setCode, language, theme } = useEditorContext();
  const editorRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    try {
      const editor = monaco.editor.create(containerRef.current, {
        value: code,
        language: language,
        theme: `vs-${theme}`,
        automaticLayout: true,
        fontSize: 14,
        renderWhitespace: "boundary",
        wordWrap: "off",
        lineNumbers: "on",
      });

      const model = editor.getModel();
      const disposable = model.onDidChangeContent(() => {
        setCode(editor.getValue());
      });

      editorRef.current = editor;

      const handleResize = () => editor.layout();
      window.addEventListener("resize", handleResize);
      editor.layout();

      return () => {
        disposable.dispose();
        editor.dispose();
        window.removeEventListener("resize", handleResize);
      };
    } catch (error) {
      console.error("Error initializing Monaco Editor:", error);
    }
  }, [language, theme]);

  return (
    <div
      ref={containerRef}
      style={{ height: "400px", width: "100%", border: "1px solid #ccc" }}
    />
  );
};

export default EditorWrapper;
