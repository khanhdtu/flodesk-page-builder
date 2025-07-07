import React from 'react';
import { useBuilderStore } from '@stores/builderStore';
import { useElementSelection } from '@hooks/useElementSelection';
import styles from './PagePreview.module.css';

const PagePreview: React.FC = () => {
  const { pageSettings, elements } = useBuilderStore();
  const { handleElementClick, isElementSelected } = useElementSelection();

  const renderElement = (element: any) => {
    const { id, type, settings } = element;
    const isSelected = isElementSelected(id);

    const elementStyle = {
      cursor: 'pointer',
      border: isSelected ? '2px solid #007bff' : '2px solid transparent',
      borderRadius: '4px',
      padding: '8px',
      margin: '4px 0',
      transition: 'all 0.2s ease'
    };

    switch (type) {
      case 'heading':
        return (
          <h1
            key={id}
            style={{
              ...elementStyle,
              fontSize: `${settings.fontSize}px`,
              color: settings.color,
              textAlign: settings.textAlign as any
            }}
            onClick={() => handleElementClick(id)}
          >
            {settings.text}
          </h1>
        );

      case 'paragraph':
        return (
          <p
            key={id}
            style={{
              ...elementStyle,
              fontSize: `${settings.fontSize}px`,
              color: settings.color,
              textAlign: settings.textAlign as any,
              whiteSpace: 'pre-line'
            }}
            onClick={() => handleElementClick(id)}
          >
            {settings.text}
          </p>
        );

      case 'image':
        return (
          <div
            key={id}
            style={elementStyle}
            onClick={() => handleElementClick(id)}
          >
            <img
              src={settings.src}
              alt={settings.alt}
              style={{
                width: `${settings.width}px`,
                height: `${settings.height}px`,
                maxWidth: '100%',
                display: 'block'
              }}
            />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.pageWrapper}
        style={{
          backgroundColor: pageSettings.backgroundColor,
          maxWidth: `${pageSettings.width}px`,
          width: '100%'
        }}
      >
        <div className={styles.pageContent}>
          {elements.map(renderElement)}
        </div>
      </div>
    </div>
  );
};

export default PagePreview; 