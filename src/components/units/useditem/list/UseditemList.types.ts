export interface IUseditemListUIProps {
  data: any;
  visitedItems: any;
  loadFunc: () => void;
  onClickMoveToUseditemNew: () => void;
  onClickMoveToUseditemDetail: (el: any) => () => void;
}
