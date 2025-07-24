import { useUiStateStore } from 'src/stores/uiStateStore';
import { NodeIndicatorComponentProps } from 'src/types';

export const useNodeIndicatorComponent = () => {
  const model = useUiStateStore((state) => {
    return state;
  });

  const nodeIndicatorComponent = model.nodeIndicatorComponent;

  return nodeIndicatorComponent;
};
