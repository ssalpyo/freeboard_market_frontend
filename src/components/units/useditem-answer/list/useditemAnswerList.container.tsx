import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useState } from "react";
import UseditemAnswerListUI from "./useditemAnswerList.presenter";
import {
  DELETE_USEDITEM_QUESTION_ANSWER,
  FETCH_USEDITEM_QUESTION_ANSWERS,
  FETCH_USER_LOGGED_IN,
} from "./useditemAnswerList.queries";
import { IUseditemAnswerListProps } from "./useditemAnswerList.types";

export default function UseditemAnswerList(props: IUseditemAnswerListProps) {
  const [isEditId, setIsEditId] = useState("");

  const [deleteUseditemQuestionAnswer] = useMutation(
    DELETE_USEDITEM_QUESTION_ANSWER
  );

  const { data } = useQuery(FETCH_USEDITEM_QUESTION_ANSWERS, {
    variables: {
      useditemQuestionId: props.useditemQuestionId,
    },
  });

  const { data: userData } =
    useQuery<Pick<any, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  const onClickEditIcon = (event: any) => {
    setIsEditId(event.currentTarget.id);
  };

  const onClickDeleteAnswer = async (event: any) => {
    try {
      await deleteUseditemQuestionAnswer({
        variables: {
          useditemQuestionAnswerId: event.currentTarget.id,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTION_ANSWERS,
            variables: { useditemQuestionId: props.useditemQuestionId },
          },
        ],
      });
      Modal.success({
        content: "답글이 삭제되었습니다.",
      });
    } catch (error: any) {
      Modal.error({
        title: "답글 삭제에 실패했습니다.",
        content: error.message,
      });
    }
  };

  return (
    <UseditemAnswerListUI
      data={data}
      userData={userData}
      onClickDeleteAnswer={onClickDeleteAnswer}
      onClickEditIcon={onClickEditIcon}
      isEditId={isEditId}
      setIsEditId={setIsEditId}
    />
  );
}
