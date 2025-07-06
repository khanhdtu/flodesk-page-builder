import { IElementSettings } from "./IElementSettings";
import { ITemplate } from "./ITemplate";
import { IPageSettings } from "./IPageSettings";

export interface IBuilderState {
    selectedTemplate: string | null;
    elements: IElementSettings[];
    selectedElementId: string | null;
    templates: ITemplate[];
    pageSettings: IPageSettings;
    setTemplate: (template: string) => void;
    setElements: (elements: IElementSettings[]) => void;
    selectElement: (id: string | null) => void;
    setPageSettings: (settings: Partial<IPageSettings>) => void;
}