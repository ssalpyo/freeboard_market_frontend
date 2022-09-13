import { Rate } from "antd";
import * as S from "./BoardCommentEdit.styles";
import { IBoardCommentEditUIProps } from "./BoardCommentEdit.types";

export default function BoardCommentEditUI(props: IBoardCommentEditUIProps) {
  return (
    <S.CommentEditWrapper>
      <S.CommentEditHeader>
        <S.FlexBox>
          <S.InputPassword
            type="password"
            placeholder="비밀번호"
            onChange={props.onChangePassword}
          />
          <Rate
            onChange={props.onChangeRating}
            defaultValue={props.el.rating}
          />
        </S.FlexBox>
        <S.FlexBox>
          <S.EditSubmitIcon onClick={props.onClickEditSubmit} />
          <S.EditCancelIcon onClick={props.onClickEditCancel} />
        </S.FlexBox>
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
