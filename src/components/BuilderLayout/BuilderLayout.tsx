import React from 'react';
import { useBuilderStore } from '../../stores/builderStore';
import ExportButton from '../ExportButton/ExportButton';
import TemplateList from '../TemplateList/TemplateList';
import styles from './BuilderLayout.module.css';

const BuilderLayout: React.FC = () => {
  const { selectedTemplate } = useBuilderStore();

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Flodesk Page Builder</h1>
        <ExportButton />
      </header>
      
      <main className={styles.main}>
        {!selectedTemplate ? (
          <div className={styles.templateSelection}>
            <TemplateList />
          </div>
        ) : (
          <div className={styles.builderContent}>
            <h1>Page Review & Settings areas</h1>
          </div>
        )}
      </main>
    </div>
  );
};

export default BuilderLayout; 