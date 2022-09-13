import * as S from "./useditemAnswer.styles";
import { IUseditemAnswerUIProps } from "./useditemAnswer.types";

export default function UseditemAnswerUI(props: IUseditemAnswerUIProps) {
  return (
    <S.Wrapper>
      <S.CommentBody>
        <S.InputCommentWrapper>
          <S.InputComment
            maxLength={100}
            onChange={props.onChangeContents}
            value={props.contents}
            placeholder="답글을 작성해주세요."
          />
          <S.InputCommentFooter>
            <S.CommentMaxLength>{props.contents.length}/100</S.CommentMaxLength>
            <S.CommentSubmitButton
              disabled={!props.isActive}
              onClick={props.onClickSubmitComment}
            >
              등록하기
            </S.CommentSubmitButton>
          </S.InputCommentFooter>
        </S.InputCommentWrapper>
      </S.CommentBody>
      {/* <UseditemQuestionList /> */}
    </S.Wrapper>
  );
}
