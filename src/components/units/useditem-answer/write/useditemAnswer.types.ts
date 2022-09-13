import { ChangeEvent } from "react";

export interface IUseditemAnswerUIProps {
  isActive: boolean;
  contents: string;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickSubmitComment: () => void;
}

export interface IUseditemAnswerProps {
  useditemQuestionId: string;
  setIsAnswerId: any;
}
