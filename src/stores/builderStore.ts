import { create } from 'zustand';
import { ITemplate, IBuilderState, IPageSettings } from '../interfaces';
import templates from '../fixtures/templates.json';
import settings from '../fixtures/settings.json';

const defaultTemplates = templates as ITemplate[];

const defaultPageSettings = settings as IPageSettings;

export const useBuilderStore = create<IBuilderState>((set) => ({
  selectedTemplate: null,
  elements: [],
  selectedElementId: null,
  templates: defaultTemplates,
  pageSettings: defaultPageSettings,
  
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

  setPageSettings: (settings) =>
    set((state) => ({
      pageSettings: { ...state.pageSettings, ...settings },
    })),
})); 