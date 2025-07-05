import React from 'react';
import { useBuilderStore } from '../../stores/builderStore';
import styles from './TemplateList.module.css';

const TemplateList: React.FC = () => {
  const { templates, setTemplate } = useBuilderStore();

  const handleTemplateSelect = (templateId: string) => {
    setTemplate(templateId);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Choose a Template</h2>
      <p className={styles.subtitle}>Select a template to start building your page</p>
      
      <div className={styles.templateGrid}>
        {templates.map((template) => (
          <div
            key={template.id}
            className={styles.templateCard}
            onClick={() => handleTemplateSelect(template.id)}
          >
            <div className={styles.thumbnail}>
              <span className={styles.thumbnailIcon}>{template.thumbnail}</span>
            </div>
            <div className={styles.templateInfo}>
              <h3 className={styles.templateName}>{template.name}</h3>
              <p className={styles.templateDescription}>{template.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateList; 