import { useMemo } from 'react';
import { ModelItem, NodeIndicatorComponentProps } from 'src/types';
import { useModelStore } from 'src/stores/modelStore';
import { getItemByIdOrThrow } from 'src/utils';
import { useUiStateStore } from 'src/stores/uiStateStore';

export const useNodeIndicatorComponent = (id: string): ((props: NodeIndicatorComponentProps) => JSX.Element) => {
  const model = useUiStateStore((state) => {
    return state;
  });

  const nodeIndicatorComponent = model.nodeIndicatorComponent;

  return nodeIndicatorComponent;
};
