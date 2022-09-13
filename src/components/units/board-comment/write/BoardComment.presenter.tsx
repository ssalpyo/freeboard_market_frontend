import * as S from "./BoardComment.styles";
import { IBoardCommentUIProps } from "./BoardComment.types";
import BoardCommentList from "../list/BoardCommentList.container";
import { Rate } from "antd";

export default function BoardCommentUI(props: IBoardCommentUIProps) {
  return (
    <S.Wrapper>
      <S.CommentHeader>
        <S.CommentIcon />
        <S.CommentTitle>댓글</S.CommentTitle>
      </S.CommentHeader>
      <S.CommentBody>
        <S.InputInfoWrapper>
          <S.InputInfo
            type="text"
            onChange={props.onChangeWriter}
            value={props.writer}
            placeholder="작성자"
          />
          <S.InputInfo
            type="password"
            onChange={props.onChangePassword}
            value={props.password}
            placeholder="비밀번호"
          />
          <Rate onChange={props.onChangeRating} value={props.rating} />
        </S.InputInfoWrapper>
        <S.InputCommentWrapper>
          <S.InputComment
            maxLength={100}
            onChange={props.onChangeContents}
            value={props.contents}
            placeholder="댓글을 작성해주세요."
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
      <BoardCommentList />
    </S.Wrapper>
  );
}
