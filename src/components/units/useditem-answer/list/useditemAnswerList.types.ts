export interface IUseditemAnswerListUIProps {
  data?: any;
  userData?: any;
  onClickDeleteAnswer: (event: any) => void;
  onClickEditIcon: (event: any) => void;
  isEditId: string;
  setIsEditId: any;
}

export interface IUseditemAnswerListProps {
  useditemQuestionId: string;
}
