import React from 'react';
import { useBuilderStore } from '@stores/builderStore';
import styles from './ExportButton.module.css';

const ExportButton: React.FC = () => {
  const { pageSettings, elements, selectedTemplate } = useBuilderStore();

  const generateHTML = () => {
    const elementHTML = elements.map(element => {
      const { type, settings } = element;
      
      switch (type) {
        case 'heading':
          return `<h1 style="font-size: ${settings.fontSize}px; color: ${settings.color}; text-align: ${settings.textAlign}; margin: 1rem 0;">${settings.text}</h1>`;
        
        case 'paragraph':
          return `<p style="font-size: ${settings.fontSize}px; color: ${settings.color}; text-align: ${settings.textAlign}; margin: 1rem 0; white-space: pre-line;">${settings.text}</p>`;
        
        case 'image':
          return `<img src="${settings.src}" alt="${settings.alt}" style="width: ${settings.width}px; height: ${settings.height}px; max-width: 100%; display: block; margin: 1rem 0;" />`;
        
        default:
          return '';
      }
    }).join('\n');

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Generated Page</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background-color: ${pageSettings.backgroundColor};
        }
        .container {
            max-width: ${pageSettings.width}px;
            margin: 0 auto;
            padding: 2rem;
            background-color: white;
            min-height: 100vh;
        }
    </style>
</head>
<body>
    <div class="container">
        ${elementHTML}
    </div>
</body>
</html>`;
  };

  const handleExport = () => {
    if (!selectedTemplate) {
      alert('Please select a template first');
      return;
    }

    const html = generateHTML();
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'generated-page.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <button
      onClick={handleExport}
      className={styles.exportButton}
      disabled={!selectedTemplate}
    >
      Export Page
    </button>
  );
};

export default ExportButton; 