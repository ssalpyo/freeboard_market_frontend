import * as S from "./useditemAnswerEdit.styles";
import { IuseditemAnswerEditUIProps } from "./useditemAnswerEdit.types";

export default function UseditemAnswerEditUI(
  props: IuseditemAnswerEditUIProps
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
