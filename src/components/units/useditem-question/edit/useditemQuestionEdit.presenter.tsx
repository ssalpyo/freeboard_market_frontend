import * as S from "./useditemQuestionEdit.styles";
import { IUseditemQuestionEditUIProps } from "./useditemQuestionEdit.types";

export default function UseditemQuestionEditUI(
  props: IUseditemQuestionEditUIProps
) {
  return (
    <S.CommentEditWrapper>
      <S.CommentEditHeader>
        <S.EditCancelIcon onClick={props.onClickEditCancel} />
        <S.EditSubmitIcon onClick={props.onClickEditSubmit} />
      </S.CommentEditHeader>
      <S.CommentEditFooter>
        <S.CommentEditContents
          onChange={props.onChangeContents}
          defaultValue={props.el.contents}
        />
      </S.CommentEditFooter>
    </S.CommentEditWrapper>
  );
}
