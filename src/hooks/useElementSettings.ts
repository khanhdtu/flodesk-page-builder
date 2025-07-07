import { useBuilderStore } from '../stores/builderStore';

export const useElementSettings = () => {
  const { elements, selectedElementId, updateElementSettings } = useBuilderStore();
  
  const selectedElement = elements.find(el => el.id === selectedElementId);
  
  const handleSettingChange = (key: string, value: any) => {
    if (selectedElementId) {
      updateElementSettings(selectedElementId, { [key]: value });
    }
  };
  
  const handleTextChange = (value: string) => {
    handleSettingChange('text', value);
  };
  
  const handleFontSizeChange = (value: number) => {
    handleSettingChange('fontSize', value);
  };
  
  const handleColorChange = (value: string) => {
    handleSettingChange('color', value);
  };
  
  const handleTextAlignChange = (value: string) => {
    handleSettingChange('textAlign', value);
  };
  
  const handleImageSrcChange = (value: string) => {
    handleSettingChange('src', value);
  };
  
  const handleImageAltChange = (value: string) => {
    handleSettingChange('alt', value);
  };
  
  const handleImageWidthChange = (value: number) => {
    handleSettingChange('width', value);
  };
  
  const handleImageHeightChange = (value: number) => {
    handleSettingChange('height', value);
  };
  
  return {
    selectedElement,
    handleSettingChange,
    handleTextChange,
    handleFontSizeChange,
    handleColorChange,
    handleTextAlignChange,
    handleImageSrcChange,
    handleImageAltChange,
    handleImageWidthChange,
    handleImageHeightChange
  };
}; 