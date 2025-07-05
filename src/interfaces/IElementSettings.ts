export type ElementType = 'image' | 'heading' | 'paragraph';

export interface IElementSettings {
  id: string;
  type: ElementType;
  settings: Record<string, any>;
}