import * as S from "./useditemQuestionList.styles";
import { getDate } from "../../../../commons/libraries/utils";
import { IUseditemQuestionListUIProps } from "./useditemQuestionList.types";
import InfiniteScroll from "react-infinite-scroller";
import UseditemQuestionEdit from "../edit/useditemQuestionEdit.container";
import UseditemAnswer from "../../useditem-answer/write/useditemAnswer.container";
import UseditemAnswerList from "../../useditem-answer/list/useditemAnswerList.container";

export default function UseditemQuestionListUI(
  props: IUseditemQuestionListUIProps
) {
  return (
    <S.Body>
      <InfiniteScroll
        pageStart={0}
        loadMore={props.loadFunc}
        hasMore={true}
        useWindow={false}
      >
        {props.data?.fetchUseditemQuestions.map((el: any) => (
          <S.Wrapper key={el._id}>
            {props.isEditId !== el._id && (
              <S.CommentWrapper>
                <S.CommentInfoWrapper>
                  <S.ProfileImg src="/images/profile.svg" />
                  <S.FlexBox>
                    <S.CommentInfoHeader>
                      <S.CommentWriter>{el.user.name}</S.CommentWriter>
                      {props.userData?.fetchUserLoggedIn._id === el.user._id ? (
                        <S.CommentEditDelBox>
                          <S.QuestionAnswerIcon
                            id={el._id}
                            onClick={props.onClickAnswer}
                          />
                          <S.CommentEditIcon
                            id={el._id}
                            onClick={props.onClickEditIcon}
                          />
                          <S.CommentDeleteIcon
                            id={el._id}
                            onClick={props.onClickDeleteQuestion}
                          />
                        </S.CommentEditDelBox>
                      ) : (
                        <S.CommentEditDelBox>
                          <S.QuestionAnswerIcon
                            id={el._id}
                            onClick={props.onClickAnswer}
                          />
                        </S.CommentEditDelBox>
                      )}
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
              <UseditemQuestionEdit el={el} setIsEditId={props.setIsEditId} />
            )}
            {props.isAnswerId === el._id && (
              <UseditemAnswer
                useditemQuestionId={el._id}
                setIsAnswerId={props.setIsAnswerId}
              />
            )}
            <UseditemAnswerList useditemQuestionId={el._id} />
          </S.Wrapper>
        ))}
      </InfiniteScroll>
    </S.Body>
  );
}
