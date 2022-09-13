import { ChangeEvent } from "react";

export interface IUseditemQuestionUIProps {
  isActive: boolean;
  contents: string;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickSubmitComment: () => void;
}
