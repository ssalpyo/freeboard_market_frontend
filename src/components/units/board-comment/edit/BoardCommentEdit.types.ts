import { ChangeEvent } from "react";

export interface IBoardCommentEditProps {
  el: any;
  setIsEditId: any;
}

export interface IBoardCommentEditUIProps {
  el: any;
  onChangeRating: (value: number) => void;
  onClickEditCancel: () => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickEditSubmit: () => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface IupdateBoardCommentInput {
  contents?: string;
  rating?: number;
}
