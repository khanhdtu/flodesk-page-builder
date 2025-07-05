import { create } from 'zustand';
import templates from '../fixtures/templates.json';
import { ITemplate, IBuilderState } from '../interfaces';

const defaultTemplates = templates as ITemplate[];

export const useBuilderStore = create<IBuilderState>((set) => ({
  selectedTemplate: null,
  elements: [],
  selectedElementId: null,
  templates: defaultTemplates,
  
  setTemplate: (templateId) => {
    const template = defaultTemplates.find(t => t.id === templateId);
    if (template) {
      set({ 
        selectedTemplate: templateId,
        elements: template.elements ,
        selectedElementId: null
      });
    }
  },

  setElements: (elements) => set({ elements }),
  
  selectElement: (id) => set({ selectedElementId: id }),
})); 