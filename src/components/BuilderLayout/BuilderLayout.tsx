import React from 'react';
import { useBuilderStore } from '../../stores/builderStore';
import ExportButton from '../ExportButton/ExportButton';
import TemplateList from '../TemplateList/TemplateList';
import PagePreview from '../PagePreview/PagePreview';
import PageSettings from '../PageSettings/PageSettings';
import ElementSettings from '../ElementSettings/ElementSettings';
import styles from './BuilderLayout.module.css';

const BuilderLayout: React.FC = () => {
  const { selectedTemplate, selectedElementId, resetBuilder } = useBuilderStore();

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title} onClick={resetBuilder}>Flodesk Page Builder</h1>
        <ExportButton />
      </header>
      
      <main className={styles.main}>
        {!selectedTemplate ? (
          <div className={styles.templateSelection}>
            <TemplateList />
          </div>
        ) : (
          <div className={styles.builderContent}>
            <div className={styles.pageContent}>
              <PagePreview />
            </div>
            <aside className={styles.settingsPanel}>
              {selectedElementId ? <ElementSettings /> : (
                <PageSettings />
              )}
            </aside>
          </div>
        )}
      </main>
    </div>
  );
};

export default BuilderLayout; 