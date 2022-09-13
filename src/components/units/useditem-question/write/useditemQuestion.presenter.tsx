import UseditemQuestionList from "../list/useditemQuestionList.container";
import * as S from "./useditemQuestion.styles";
import { IUseditemQuestionUIProps } from "./useditemQuestion.types";

export default function UseditemQuestionUI(props: IUseditemQuestionUIProps) {
  return (
    <S.Wrapper>
      <S.CommentHeader>
        <S.CommentIcon />
        <S.CommentTitle>문의하기</S.CommentTitle>
      </S.CommentHeader>
      <S.CommentBody>
        <S.InputCommentWrapper>
          <S.InputComment
            maxLength={100}
            onChange={props.onChangeContents}
            value={props.contents}
            placeholder="문의를 작성해주세요."
          />
          <S.InputCommentFooter>
            <S.CommentMaxLength>{props.contents.length}/100</S.CommentMaxLength>
            <S.CommentSubmitButton
              disabled={!props.isActive}
              onClick={props.onClickSubmitComment}
            >
              문의하기
            </S.CommentSubmitButton>
          </S.InputCommentFooter>
        </S.InputCommentWrapper>
      </S.CommentBody>
      <UseditemQuestionList />
    </S.Wrapper>
  );
}
