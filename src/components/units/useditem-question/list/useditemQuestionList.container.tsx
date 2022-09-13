import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import UseditemQuestionListUI from "./useditemQuestionList.presenter";
import {
  DELETE_USEDITEM_QUESTION,
  FETCH_USEDITEM_QUESTIONS,
  FETCH_USER_LOGGED_IN,
} from "./useditemQuestionList.queries";

export default function UseditemQuestionList() {
  const router = useRouter();

  const [isEditId, setIsEditId] = useState("");
  const [isAnswerId, setIsAnswerId] = useState("");

  const [deleteUseditemQuestion] = useMutation(DELETE_USEDITEM_QUESTION);

  const { data, fetchMore } = useQuery(FETCH_USEDITEM_QUESTIONS, {
    variables: {
      useditemId: router.query.useditemId,
    },
  });

  const { data: userData } =
    useQuery<Pick<any, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  const onClickEditIcon = (event: any) => {
    setIsEditId(event.currentTarget.id);
  };

  const onClickAnswer = (event: any) => {
    setIsAnswerId(isAnswerId ? "" : event.currentTarget.id);
  };

  const onClickDeleteQuestion = async (event: any) => {
    try {
      await deleteUseditemQuestion({
        variables: {
          useditemQuestionId: event.currentTarget.id,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS,
            variables: { useditemId: router.query.useditemId },
          },
        ],
      });
      Modal.success({
        content: "문의가 삭제되었습니다.",
      });
    } catch (error: any) {
      Modal.error({
        title: "문의 삭제에 실패했습니다.",
        content: error.message,
      });
    }
  };

  const loadFunc = () => {
    if (!data) return;

    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditemQuestions.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditemQuestions)
          return {
            fetchUseditemQuestions: [...prev.fetchUseditemQuestions],
          };
        return {
          fetchUseditemQuestions: [
            ...prev.fetchUseditemQuestions,
            ...fetchMoreResult?.fetchUseditemQuestions,
          ],
        };
      },
    });
  };

  return (
    <UseditemQuestionListUI
      data={data}
      userData={userData}
      onClickDeleteQuestion={onClickDeleteQuestion}
      onClickEditIcon={onClickEditIcon}
      isEditId={isEditId}
      loadFunc={loadFunc}
      setIsEditId={setIsEditId}
      onClickAnswer={onClickAnswer}
      isAnswerId={isAnswerId}
      setIsAnswerId={setIsAnswerId}
    />
  );
}
