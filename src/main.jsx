// main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { EditorProvider } from './contexts/EditorContext.jsx';

// ✅ Define MonacoEnvironment before any Monaco code runs
self.MonacoEnvironment = {
  getWorker: function (_moduleId, label) {
    switch (label) {
      case 'typescript':
      case 'javascript':
        return new Worker(
          new URL('monaco-editor/esm/vs/language/typescript/ts.worker.js', import.meta.url),
          { type: 'module' }
        );
        case 'python':
        return new Worker(
          new URL('monaco-editor/esm/vs/editor/editor.worker.js', import.meta.url),
          { type: 'module' }
        );
      default:
        return new Worker(
          new URL('monaco-editor/esm/vs/editor/editor.worker.js', import.meta.url),
          { type: 'module' }
        );
    }
  }
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EditorProvider>
      <App />
    </EditorProvider>
  </StrictMode>
);
