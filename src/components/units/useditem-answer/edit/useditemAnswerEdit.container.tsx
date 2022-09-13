import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useState } from "react";
import UseditemAnswerEditUI from "./useditemAnswerEdit.presenter";
import { UPDATE_USEDITEM_QUESTION_ANSWER } from "./useditemAnswerEdit.queries";
import {
  IupdateUseditemQuestionAnswerInput,
  IuseditemAnswerEditProps,
} from "./useditemAnswerEdit.types";

export default function useditemAnswerEdit(props: IuseditemAnswerEditProps) {
  const [contents, setContents] = useState("");

  const [updateUseditemQuestionAnswer] = useMutation(
    UPDATE_USEDITEM_QUESTION_ANSWER
  );

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  };

  const onClickEditCancel = () => {
    props.setIsEditId("");
  };

  const onClickEditSubmit = async () => {
    if (!contents) {
      Modal.warning({
        content: "수정한 내용이 없습니다.",
      });
      return;
    }
    try {
      const updateUseditemQuestionAnswerInput: IupdateUseditemQuestionAnswerInput =
        {};

      if (contents) updateUseditemQuestionAnswerInput.contents = contents;
      await updateUseditemQuestionAnswer({
        variables: {
          updateUseditemQuestionAnswerInput,
          useditemQuestionAnswerId: props.el._id,
        },
      });
      Modal.success({
        content: "답글이 수정되었습니다.",
        onOk() {
          props.setIsEditId("");
        },
      });
    } catch (error: any) {
      Modal.error({
        title: "답글 수정에 실패했습니다.",
        content: error.message,
      });
    }
  };

  return (
    <UseditemAnswerEditUI
      el={props.el}
      onClickEditCancel={onClickEditCancel}
      onChangeContents={onChangeContents}
      onClickEditSubmit={onClickEditSubmit}
    />
  );
}
