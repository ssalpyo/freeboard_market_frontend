import { ChangeEvent } from "react";

export interface IuseditemAnswerEditProps {
  el: any;
  setIsEditId: any;
}

export interface IupdateUseditemQuestionAnswerInput {
  contents?: string;
}

export interface IuseditemAnswerEditUIProps {
  el: any;
  onClickEditCancel: () => void;
  onClickEditSubmit: () => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}
