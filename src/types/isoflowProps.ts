import type { EditorModeEnum, MainMenuOptions } from './common';
import type { Model, ModelItem, ViewItem } from './model';
import type { RendererProps } from './rendererProps';

export type InitialData = Model & {
  fitToView?: boolean;
  view?: string;
};

export type NodeInfoComponentProps = {
  item: ModelItem;
}

export interface IsoflowProps {
  initialData?: InitialData;
  mainMenuOptions?: MainMenuOptions;
  nodeInfoComponent?: (props: NodeInfoComponentProps) => JSX.Element;
  onModelUpdated?: (Model: Model) => void;
  width?: number | string;
  height?: number | string;
  enableDebugTools?: boolean;
  editorMode?: keyof typeof EditorModeEnum;
  renderer?: RendererProps;
}
