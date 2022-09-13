import * as S from "./useditemAnswerList.styles";
import { getDate } from "../../../../commons/libraries/utils";
import { IUseditemAnswerListUIProps } from "./useditemAnswerList.types";
import UseditemAnswerEdit from "../edit/useditemAnswerEdit.container";

export default function UseditemAnswerListUI(
  props: IUseditemAnswerListUIProps
) {
  return (
    <S.Body>
      {props.data?.fetchUseditemQuestionAnswers.map((el: any) => (
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
                        <S.CommentEditIcon
                          id={el._id}
                          onClick={props.onClickEditIcon}
                        />
                        <S.CommentDeleteIcon
                          id={el._id}
                          onClick={props.onClickDeleteAnswer}
                        />
                      </S.CommentEditDelBox>
                    ) : (
                      <S.CommentEditDelBox></S.CommentEditDelBox>
                    )}
                  </S.CommentInfoHeader>
                  <S.CommentContents>{el.contents}</S.CommentContents>
                </S.FlexBox>
              </S.CommentInfoWrapper>
              <S.CommentInfoFooter>
                <S.CommentCreatedAt>{getDate(el.createdAt)}</S.CommentCreatedAt>
              </S.CommentInfoFooter>
            </S.CommentWrapper>
          )}
          {props.isEditId === el._id && (
            <UseditemAnswerEdit el={el} setIsEditId={props.setIsEditId} />
          )}
        </S.Wrapper>
      ))}
    </S.Body>
  );
}
