import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useState } from "react";
import UseditemQuestionEditUI from "./useditemQuestionEdit.presenter";
import { UPDATE_USEDITEM_QUESTION } from "./useditemQuestionEdit.queries";
import {
  IupdateUseditemQuestionInput,
  IUseditemQuestionEditProps,
} from "./useditemQuestionEdit.types";

export default function UseditemQuestionEdit(
  props: IUseditemQuestionEditProps
) {
  const [contents, setContents] = useState("");

  const [updateUseditemQuestion] = useMutation(UPDATE_USEDITEM_QUESTION);

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
      const updateUseditemQuestionInput: IupdateUseditemQuestionInput = {};

      if (contents) updateUseditemQuestionInput.contents = contents;
      await updateUseditemQuestion({
        variables: {
          updateUseditemQuestionInput,
          useditemQuestionId: props.el._id,
        },
      });
      Modal.success({
        content: "문의가 수정되었습니다.",
        onOk() {
          props.setIsEditId("");
        },
      });
    } catch (error: any) {
      Modal.error({
        title: "문의 수정에 실패했습니다.",
        content: error.message,
      });
    }
  };

  return (
    <UseditemQuestionEditUI
      el={props.el}
      onClickEditCancel={onClickEditCancel}
      onChangeContents={onChangeContents}
      onClickEditSubmit={onClickEditSubmit}
    />
  );
}
