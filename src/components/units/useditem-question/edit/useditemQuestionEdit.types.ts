import { ChangeEvent } from "react";

export interface IUseditemQuestionEditProps {
  el: any;
  setIsEditId: any;
}

export interface IupdateUseditemQuestionInput {
  contents?: string;
}

export interface IUseditemQuestionEditUIProps {
  el: any;
  onClickEditCancel: () => void;
  onClickEditSubmit: () => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}
