import React from 'react';
import { useBuilderStore } from '../../stores/builderStore';
import styles from './ElementSettings.module.css';

const ElementSettings: React.FC = () => {
  const { elements, selectedElementId, updateElementSettings, selectElement } = useBuilderStore();

  const selectedElement = elements.find(el => el.id === selectedElementId);

  if (!selectedElement) {
    return (
      <div className={styles.container}>
        <h3 className={styles.title}>Element Settings</h3>
        <p>No element selected</p>
      </div>
    );
  }

  const handleSettingChange = (key: string, value: any) => {
    updateElementSettings(selectedElementId!, { [key]: value });
  };

  const renderTextSettings = () => (
    <>
      <div className={styles.section}>
        <label className={styles.label}>Text</label>
        <textarea
          value={selectedElement.settings.text || ''}
          onChange={(e) => handleSettingChange('text', e.target.value)}
          className={styles.textInput}
          rows={3}
        />
      </div>

      <div className={styles.section}>
        <label className={styles.label}>Font Size (px)</label>
        <input
          type="range"
          min="12"
          max="72"
          value={selectedElement.settings.fontSize || 16}
          onChange={(e) => handleSettingChange('fontSize', parseInt(e.target.value))}
          className={styles.rangeInput}
        />
        <div className={styles.rangeValue}>{selectedElement.settings.fontSize || 16}px</div>
      </div>

      <div className={styles.section}>
        <label className={styles.label}>Text Color</label>
        <div className={styles.colorInput}>
          <input
            type="color"
            value={selectedElement.settings.color || '#000000'}
            onChange={(e) => handleSettingChange('color', e.target.value)}
            className={styles.colorPicker}
          />
          <input
            type="text"
            value={selectedElement.settings.color || '#000000'}
            onChange={(e) => handleSettingChange('color', e.target.value)}
            className={styles.colorText}
          />
        </div>
      </div>

      <div className={styles.section}>
        <label className={styles.label}>Text Align</label>
        <select
          value={selectedElement.settings.textAlign || 'left'}
          onChange={(e) => handleSettingChange('textAlign', e.target.value)}
          className={styles.select}
        >
          <option value="left">Left</option>
          <option value="center">Center</option>
          <option value="right">Right</option>
        </select>
      </div>
    </>
  );

  const renderImageSettings = () => (
    <>
      <div className={styles.section}>
        <label className={styles.label}>Image URL</label>
        <input
          type="text"
          value={selectedElement.settings.src || ''}
          onChange={(e) => handleSettingChange('src', e.target.value)}
          className={styles.textInput}
          placeholder="https://example.com/image.jpg"
        />
      </div>

      <div className={styles.section}>
        <label className={styles.label}>Alt Text</label>
        <input
          type="text"
          value={selectedElement.settings.alt || ''}
          onChange={(e) => handleSettingChange('alt', e.target.value)}
          className={styles.textInput}
          placeholder="Image description"
        />
      </div>

      <div className={styles.section}>
        <label className={styles.label}>Width (px)</label>
        <input
          type="range"
          min="100"
          max="800"
          value={selectedElement.settings.width || 400}
          onChange={(e) => handleSettingChange('width', parseInt(e.target.value))}
          className={styles.rangeInput}
        />
        <div className={styles.rangeValue}>{selectedElement.settings.width || 400}px</div>
      </div>

      <div className={styles.section}>
        <label className={styles.label}>Height (px)</label>
        <input
          type="range"
          min="50"
          max="600"
          value={selectedElement.settings.height || 200}
          onChange={(e) => handleSettingChange('height', parseInt(e.target.value))}
          className={styles.rangeInput}
        />
        <div className={styles.rangeValue}>{selectedElement.settings.height || 200}px</div>
      </div>
    </>
  );

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.title}>
          {selectedElement.type.charAt(0).toUpperCase() + selectedElement.type.slice(1)} Settings
        </h3>
        <button
          onClick={() => selectElement(null)}
          className={styles.closeButton}
        >
          ×
        </button>
      </div>

      {selectedElement.type === 'image' ? renderImageSettings() : renderTextSettings()}
    </div>
  );
};

export default ElementSettings;
