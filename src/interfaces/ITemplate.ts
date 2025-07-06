import { IElementSettings } from './IElementSettings';

export interface ITemplate {
    id: string;
    name: string;
    description: string;
    thumbnail: string;
    elements: IElementSettings[];
}