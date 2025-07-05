import { IElementSettings } from "./IElementSettings";
import { ITemplate } from "./ITemplate";

export interface IBuilderState {
    selectedTemplate: string | null;
    elements: IElementSettings[];
    selectedElementId: string | null;
    templates: ITemplate[];
    setTemplate: (template: string) => void;
    setElements: (elements: IElementSettings[]) => void;
    selectElement: (id: string | null) => void;
}