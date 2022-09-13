import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useState } from "react";
import BoardCommentEditUI from "./BoardCommentEdit.presenter";
import { UPDATE_BOARD_COMMENT } from "./BoardCommentEdit.queries";
import {
  IBoardCommentEditProps,
  IupdateBoardCommentInput,
} from "./BoardCommentEdit.types";

export default function BoardCommentEdit(props: IBoardCommentEditProps) {
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [rating, setRating] = useState(0);

  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);

  const onChangeRating = (value: number) => {
    setRating(value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  };

  const onClickEditCancel = () => {
    props.setIsEditId("");
  };

  const onClickEditSubmit = async () => {
    if (!contents && !rating) {
      Modal.warning({
        content: "수정한 내용이 없습니다.",
      });
      return;
    }
    if (!password) {
      Modal.warning({
        content: "비밀번호를 입력해주세요.",
      });
      return;
    }
    try {
      const updateBoardCommentInput: IupdateBoardCommentInput = {};

      if (contents) updateBoardCommentInput.contents = contents;
      if (rating) updateBoardCommentInput.rating = rating;
      await updateBoardComment({
        variables: {
          updateBoardCommentInput,
          password,
          boardCommentId: props.el._id,
        },
      });
      Modal.success({
        content: "댓글이 수정되었습니다.",
        onOk() {
          props.setIsEditId("");
        },
      });
    } catch (error: any) {
      Modal.error({
        title: "댓글 수정에 실패했습니다.",
        content: error.message,
      });
    }
  };

  return (
    <BoardCommentEditUI
      el={props.el}
      onChangeRating={onChangeRating}
      onClickEditCancel={onClickEditCancel}
      onChangeContents={onChangeContents}
      onClickEditSubmit={onClickEditSubmit}
      onChangePassword={onChangePassword}
    />
  );
}
