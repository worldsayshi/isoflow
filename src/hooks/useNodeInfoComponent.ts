import { useMemo } from 'react';
import { ModelItem, NodeInfoComponentProps } from 'src/types';
import { useModelStore } from 'src/stores/modelStore';
import { getItemByIdOrThrow } from 'src/utils';
import { useUiStateStore } from 'src/stores/uiStateStore';

export const useNodeInfoComponent = (id: string): ((props: NodeInfoComponentProps) => JSX.Element) => {
  const model = useUiStateStore((state) => {
    return state;
  });

  const nodeInfoComponent = model.nodeInfoComponent;

  return nodeInfoComponent;
};
