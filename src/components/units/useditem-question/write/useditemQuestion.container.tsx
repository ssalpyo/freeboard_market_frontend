import { ChangeEvent, useState } from "react";
import UseditemQuestionUI from "./useditemQuestion.presenter";
import { NextRouter, useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import {
  CREATE_USEDITEM_QUESTION,
  FETCH_USEDITEM_QUESTIONS,
} from "./useditemQuestion.queries";

export default function UseditemQuestion() {
  const router: NextRouter = useRouter();

  const [createUseditemQuestion] = useMutation(CREATE_USEDITEM_QUESTION);

  const [contents, setContents] = useState("");
  const [isActive, setIsActive] = useState(false);

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
    setIsActive(Boolean(event.target.value));
  };

  const onClickSubmitComment = async () => {
    try {
      await createUseditemQuestion({
        variables: {
          createUseditemQuestionInput: {
            contents,
          },
          useditemId: router.query.useditemId,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS,
            variables: { useditemId: router.query.useditemId },
          },
        ],
      });
      Modal.success({
        content: "문의가 등록되었습니다.",
        onOk() {
          setContents("");
          setIsActive(false);
        },
      });
    } catch (error: any) {
      Modal.error({
        title: "문의 등록에 실패했습니다.",
        content: error.message,
      });
    }
  };

  return (
    <UseditemQuestionUI
      isActive={isActive}
      contents={contents}
      onChangeContents={onChangeContents}
      onClickSubmitComment={onClickSubmitComment}
    />
  );
}
