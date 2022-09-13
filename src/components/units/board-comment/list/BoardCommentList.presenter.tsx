import * as S from "./BoardCommentList.styles";
import { getDate } from "../../../../commons/libraries/utils";
import { Modal, Rate } from "antd";
import { IBoardCommentListUIProps } from "./BoardCommentList.types";
import InfiniteScroll from "react-infinite-scroller";
import BoardCommentEdit from "../edit/BoardCommentEdit.container";

export default function BoardCommentListUI(props: IBoardCommentListUIProps) {
  return (
    <S.Body>
      <InfiniteScroll
        pageStart={0}
        loadMore={props.loadFunc}
        hasMore={true}
        useWindow={false}
      >
        {props.data?.fetchBoardComments.map((el: any) => (
          <S.Wrapper key={el._id}>
            {props.isEditId !== el._id && (
              <S.CommentWrapper>
                <S.CommentInfoWrapper>
                  <S.ProfileImg src="/images/profile.svg" />
                  <S.FlexBox>
                    <S.CommentInfoHeader>
                      <S.WriterRatingBox>
                        <S.CommentWriter>{el.writer}</S.CommentWriter>
                        <Rate disabled defaultValue={el.rating} />
                      </S.WriterRatingBox>
                      <S.CommentEditDelBox>
                        <S.CommentEditIcon
                          id={el._id}
                          onClick={props.onClickEditIcon}
                        />
                        <S.CommentDeleteIcon
                          id={el._id}
                          onClick={props.onClickDeleteIcon}
                        />
                        {props.isModalVisible && (
                          <Modal
                            title="댓글 삭제"
                            visible={true}
                            onOk={props.onClickDeleteComment}
                            onCancel={props.onToggleModal}
                          >
                            비밀번호 :{" "}
                            <input
                              type="password"
                              onChange={props.onChangeCommentPassword}
                            />
                          </Modal>
                        )}
                      </S.CommentEditDelBox>
                    </S.CommentInfoHeader>
                    <S.CommentContents>{el.contents}</S.CommentContents>
                  </S.FlexBox>
                </S.CommentInfoWrapper>
                <S.CommentInfoFooter>
                  <S.CommentCreatedAt>
                    {getDate(el.createdAt)}
                  </S.CommentCreatedAt>
                </S.CommentInfoFooter>
              </S.CommentWrapper>
            )}
            {props.isEditId === el._id && (
              <BoardCommentEdit el={el} setIsEditId={props.setIsEditId} />
            )}
          </S.Wrapper>
        ))}
      </InfiniteScroll>
    </S.Body>
  );
}
