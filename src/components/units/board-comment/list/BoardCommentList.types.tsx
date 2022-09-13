import { ChangeEvent } from "react";

export interface IBoardCommentListUIProps {
  data?: any;
  onToggleModal: () => void;
  isModalVisible: boolean;
  onClickDeleteComment: () => void;
  onChangeCommentPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickDeleteIcon: (event: any) => void;
  onClickEditIcon: (event: any) => void;
  isEditId: string;
  loadFunc: () => void;
  setIsEditId: any;
}
