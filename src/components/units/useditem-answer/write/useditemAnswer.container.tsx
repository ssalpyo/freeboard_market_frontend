import { ChangeEvent, useState } from "react";
import UseditemAnswerUI from "./useditemAnswer.presenter";
import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import {
  CREATE_USEDITEM_QUESTION_ANSWER,
  FETCH_USEDITEM_QUESTION_ANSWERS,
} from "./useditemAnswer.queries";
import { IUseditemAnswerProps } from "./useditemAnswer.types";

export default function UseditemAnswer(props: IUseditemAnswerProps) {
  const [createUseditemQuestionAnswer] = useMutation(
    CREATE_USEDITEM_QUESTION_ANSWER
  );
  const [contents, setContents] = useState("");
  const [isActive, setIsActive] = useState(false);

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
    setIsActive(Boolean(event.target.value));
  };

  const onClickSubmitComment = async () => {
    try {
      await createUseditemQuestionAnswer({
        variables: {
          createUseditemQuestionAnswerInput: {
            contents,
          },
          useditemQuestionId: props.useditemQuestionId,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTION_ANSWERS,
            variables: { useditemQuestionId: props.useditemQuestionId },
          },
        ],
      });
      Modal.success({
        content: "답글이 등록되었습니다.",
        onOk() {
          setContents("");
          props.setIsAnswerId("");
          setIsActive(false);
        },
      });
    } catch (error: any) {
      Modal.error({
        title: "답글 등록에 실패했습니다.",
        content: error.message,
      });
    }
  };

  return (
    <UseditemAnswerUI
      isActive={isActive}
      contents={contents}
      onChangeContents={onChangeContents}
      onClickSubmitComment={onClickSubmitComment}
    />
  );
}
