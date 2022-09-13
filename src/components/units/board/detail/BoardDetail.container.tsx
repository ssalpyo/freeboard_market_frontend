import { useMutation, useQuery } from "@apollo/client";
import { NextRouter, useRouter } from "next/router";
import { useState } from "react";
import { Modal } from "antd";
import BoardDetailUI from "./BoardDetail.presenter";
import {
  FETCH_BOARD,
  DELETE_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from "./BoardDetail.queries";

export default function BoardDetail() {
  const router: NextRouter = useRouter();
  const [deleteBoard] = useMutation(DELETE_BOARD);

  const [likeBoard] = useMutation(LIKE_BOARD);
  const [dislikeBoard] = useMutation(DISLIKE_BOARD);

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.boardId,
    },
  });

  const [likeCount, setLikeCount] = useState(data?.fetchBoard.likeCount);
  const [dislikeCount, setDislikeCount] = useState(
    data?.fetchBoard.dislikeCount
  );

  const onClickLike = async () => {
    try {
      const likeData = await likeBoard({
        variables: {
          boardId: router.query.boardId,
        },
      });
      setLikeCount(likeData.data.likeBoard);
    } catch (error: any) {
      alert(error.message);
    }
  };

  const onClickDislike = async () => {
    try {
      const dislikeData = await dislikeBoard({
        variables: {
          boardId: router.query.boardId,
        },
      });
      setDislikeCount(dislikeData.data.dislikeBoard);
    } catch (error: any) {
      alert(error.message);
    }
  };

  const onClickBoardDelete = () => {
    try {
      deleteBoard({
        variables: { boardId: router.query.boardId },
      });
      Modal.success({
        content: "게시글이 삭제되었습니다.",
        onOk() {
          router.push("/boards/");
        },
      });
    } catch (error: any) {
      Modal.error({
        title: "게시글 삭제에 실패했습니다.",
        content: error.message,
      });
    }
  };

  const onClickBoardEdit = () => {
    router.push(`/boards/${router.query.boardId}/edit`);
  };

  return (
    <BoardDetailUI
      data={data}
      likeCount={likeCount}
      dislikeCount={dislikeCount}
      onClickLike={onClickLike}
      onClickDislike={onClickDislike}
      onClickBoardEdit={onClickBoardEdit}
      onClickBoardDelete={onClickBoardDelete}
    />
  );
}
