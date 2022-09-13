import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import BoardCommentListUI from "./BoardCommentList.presenter";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./BoardCommentList.queries";

export default function BoardCommentList() {
  const router = useRouter();

  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [commentPassword, setCommentPassword] = useState("");
  const [commentId, setCommentId] = useState("");

  const [isEditId, setIsEditId] = useState("");

  const { data, fetchMore } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: router.query.boardId,
    },
  });

  const onToggleModal = () => {
    setIsModalVisible((prev: boolean) => !prev);
  };
  const onChangeCommentPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setCommentPassword(event.target.value);
  };

  const onClickDeleteIcon = (event: any) => {
    setCommentId(event.currentTarget.id);
    onToggleModal();
  };
  const onClickEditIcon = (event: any) => {
    setIsEditId(event.currentTarget.id);
  };

  const onClickDeleteComment = async () => {
    if (!commentPassword) return;
    try {
      await deleteBoardComment({
        variables: {
          password: commentPassword,
          boardCommentId: commentId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      Modal.success({
        content: "댓글이 삭제되었습니다.",
        onOk() {
          onToggleModal();
          setCommentPassword("");
        },
      });
    } catch (error: any) {
      Modal.error({
        title: "댓글 삭제에 실패했습니다.",
        content: error.message,
      });
    }
  };

  const loadFunc = () => {
    if (!data) return;

    fetchMore({
      variables: { page: Math.ceil(data?.fetchBoardComments.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchBoardComments)
          return {
            fetchBoardComments: [...prev.fetchBoardComments],
          };
        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult?.fetchBoardComments,
          ],
        };
      },
    });
  };

  return (
    <BoardCommentListUI
      data={data}
      onToggleModal={onToggleModal}
      isModalVisible={isModalVisible}
      onClickDeleteComment={onClickDeleteComment}
      onChangeCommentPassword={onChangeCommentPassword}
      onClickDeleteIcon={onClickDeleteIcon}
      onClickEditIcon={onClickEditIcon}
      isEditId={isEditId}
      loadFunc={loadFunc}
      setIsEditId={setIsEditId}
    />
  );
}
