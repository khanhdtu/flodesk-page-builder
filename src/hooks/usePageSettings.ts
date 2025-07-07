import { useBuilderStore } from '@stores/builderStore';

export const usePageSettings = () => {
  const { pageSettings, setPageSettings } = useBuilderStore();
  
  const handleBackgroundColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPageSettings({ backgroundColor: e.target.value });
  };
  
  const handleWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPageSettings({ width: parseInt(e.target.value) });
  };
  
  const handleFontSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPageSettings({ fontSize: parseInt(e.target.value) });
  };
  
  const handleFontFamilyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPageSettings({ fontFamily: e.target.value });
  };
  
  return {
    pageSettings,
    handleBackgroundColorChange,
    handleWidthChange,
    handleFontSizeChange,
    handleFontFamilyChange
  };
}; 