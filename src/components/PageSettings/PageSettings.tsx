import React from 'react';
import { useBuilderStore } from '../../stores/builderStore';
import styles from './PageSettings.module.css';

const PageSettings: React.FC = () => {
  const { pageSettings, setPageSettings } = useBuilderStore();

  const handleBackgroundColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPageSettings({ backgroundColor: e.target.value });
  };

  const handleWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPageSettings({ width: parseInt(e.target.value) });
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Page Settings</h3>
      
      <div className={styles.section}>
        <label className={styles.label}>Background Color</label>
        <div className={styles.colorInput}>
          <input
            type="color"
            value={pageSettings.backgroundColor}
            onChange={handleBackgroundColorChange}
            className={styles.colorPicker}
          />
          <input
            type="text"
            value={pageSettings.backgroundColor}
            onChange={handleBackgroundColorChange}
            className={styles.colorText}
            placeholder="#ffffff"
          />
        </div>
      </div>

      <div className={styles.section}>
        <label className={styles.label}>Page Width (px)</label>
        <input
          type="range"
          min="300"
          max="1200"
          value={pageSettings.width}
          onChange={handleWidthChange}
          className={styles.rangeInput}
        />
        <div className={styles.rangeValue}>{pageSettings.width}px</div>
      </div>

      <div className={styles.info}>
        <p>Click on any element in the preview to edit its settings.</p>
      </div>
    </div>
  );
};

export default PageSettings; 