import { useBuilderStore } from '@stores/builderStore';

export const useElementSelection = () => {
  const { selectedElementId, selectElement, elements } = useBuilderStore();
  
  const selectedElement = elements.find(el => el.id === selectedElementId);
  
  const handleElementClick = (elementId: string) => {
    selectElement(elementId);
  };
  
  const clearSelection = () => {
    selectElement(null);
  };
  
  return {
    selectedElementId,
    selectedElement,
    handleElementClick,
    clearSelection,
    isElementSelected: (id: string) => selectedElementId === id
  };
}; 