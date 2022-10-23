import { CF } from "../../../commons/styles/commonComponentStyle";
import * as S from "./useditemCard.styles";

export default function UseditemCardUI(props: any) {
  return (
    <>
      <S.CardInner>
        <S.PickBox id={props.data._id} onClick={props.onTogglePick}>
          {props.isActive ? (
            <S.PickImg src="/images/active-pick.png" />
          ) : (
            <S.PickImg src="/images/pick.png" />
          )}
          <S.PickCount>{props.data.pickedCount}</S.PickCount>
        </S.PickBox>
        <S.CardItem onClick={props.onClickMoveToDetail(props.data)}>
          <S.ImgBox>
            {props.data.images[0] ? (
              <S.Img
                src={`https://storage.googleapis.com/${props.data.images[0]}`}
                alt="썸네일 이미지"
              />
            ) : (
              <S.Img src="/images/no-image.jpeg" alt="썸네일 이미지" />
            )}
          </S.ImgBox>
          <S.ContentBox>
            <CF.ColumnDiv>
              <S.TextTitle>{props.data.name}</S.TextTitle>
              <S.TextBox>
                <S.SubTextBox>{props.data.remarks}</S.SubTextBox>
              </S.TextBox>
              <S.PriceBox>
                <S.Price>{props.data.price.toLocaleString()}원</S.Price>
              </S.PriceBox>
            </CF.ColumnDiv>
          </S.ContentBox>
        </S.CardItem>
      </S.CardInner>
    </>
  );
}
