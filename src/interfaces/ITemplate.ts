import { IElementSettings } from './IElementSettings';

export interface ITemplateSettings {
    backgroundColor: string;
    fontFamily: string;
    fontSize: number;
}

export interface ITemplate {
    id: string;
    name: string;
    description: string;
    thumbnail: string;
    elements: IElementSettings[];
    templateSettings: ITemplateSettings;
}