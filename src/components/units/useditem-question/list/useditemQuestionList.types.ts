export interface IUseditemQuestionListUIProps {
  data?: any;
  userData?: any;
  onClickDeleteQuestion: (event: any) => void;
  onClickEditIcon: (event: any) => void;
  isEditId: string;
  loadFunc: () => void;
  setIsEditId: any;
  onClickAnswer: (event: any) => void;
  isAnswerId: string;
  setIsAnswerId: any;
}
