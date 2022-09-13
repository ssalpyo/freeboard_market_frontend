import { ChangeEvent, useState } from "react";
import BoardCommentUI from "./BoardComment.presenter";
import { NextRouter, useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import {
  CREATE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./BoardComment.queries";

export default function BoardComment() {
  const router: NextRouter = useRouter();

  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");

  const [isActive, setIsActive] = useState(false);

  const [rating, setRating] = useState(0);

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
    setIsActive(Boolean(event.target.value && password && contents));
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setIsActive(Boolean(writer && event.target.value && contents));
  };
  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
    setIsActive(Boolean(writer && password && event.target.value));
  };
  const onChangeRating = (value: number) => {
    setRating(value);
  };

  const onClickSubmitComment = async () => {
    try {
      await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer,
            password,
            contents,
            rating,
          },
          boardId: router.query.boardId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      Modal.success({
        content: "댓글이 등록되었습니다.",
        onOk() {
          setWriter("");
          setPassword("");
          setContents("");
          setRating(0);
          setIsActive(false);
        },
      });
    } catch (error: any) {
      Modal.error({
        title: "댓글 등록에 실패했습니다.",
        content: error.message,
      });
    }
  };

  return (
    <BoardCommentUI
      isActive={isActive}
      writer={writer}
      password={password}
      contents={contents}
      rating={rating}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      onClickSubmitComment={onClickSubmitComment}
      onChangeRating={onChangeRating}
    />
  );
}
