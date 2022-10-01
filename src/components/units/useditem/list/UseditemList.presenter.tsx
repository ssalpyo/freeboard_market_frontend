import * as S from "./UseditemList.styles";
import { v4 as uuidv4 } from "uuid";
import { IUseditemListUIProps } from "./UseditemList.types";
import InfiniteScroll from "react-infinite-scroller";

export default function UseditemListUI(props: IUseditemListUIProps) {
  return (
    <S.Wrapper>
        <S.SearchWrapper>
          <S.Search placeholder="제품을 검색해주세요." />
        </S.SearchWrapper>
        <S.ScrollBox>
          <InfiniteScroll
            pageStart={0}
            loadMore={props.loadFunc}
            hasMore={true}
            useWindow={false}
          >
            {props.data?.fetchUseditems.map((el: any, index: number) => (
              <S.Row key={uuidv4()}>
                {props.data?.fetchUseditems[index].images.length ? (
                  <S.ListImage
                    src={
                      el.images[0]
                        ? `https://storage.googleapis.com/${el.images[0]}`
                        : "/images/image-none.jpeg"
                    }
                  />
                ) : (
                  <S.ImageBox />
                )}
                <S.ListBody>
                  <S.FlexBox>
                    <S.Name onClick={props.onClickMoveToUseditemDetail(el)}>
                      {el.name}
                    </S.Name>
                    <S.Remarks>{el.remarks}</S.Remarks>
                    <S.SellerWrapper>
                      <S.ProfileImg src="/images/profile-24px.png" />
                      <S.Seller>{el.seller.name}</S.Seller>
                      <S.PickedIcon />
                      <S.PickedCount>{el.pickedCount}</S.PickedCount>
                    </S.SellerWrapper>
                  </S.FlexBox>
                  <S.Price>{el.price.toLocaleString()}원</S.Price>
                </S.ListBody>
              </S.Row>
            ))}
          </InfiniteScroll>
        </S.ScrollBox>
        <S.Footer>
          <S.Button onClick={props.onClickMoveToUseditemNew}>
            상품 등록하기
          </S.Button>
        </S.Footer>
      <S.visitedItems>
        <h1>오늘 본 상품</h1>
        {props.visitedItems.length ? (
          <div>
            {props.visitedItems.map((el: any, index: number) => (
              <S.Row key={uuidv4()}>
                {props.data?.fetchUseditems[index].images.length ? (
                  <S.VisitedListImage
                    src={
                      el.images[0]
                        ? `https://storage.googleapis.com/${el.images[0]}`
                        : "/images/image-none.jpeg"
                    }
                  />
                ) : (
                  <S.ImageBox />
                )}
                <S.ListBody>
                  <S.FlexBox>
                    <S.Name onClick={props.onClickMoveToUseditemDetail(el)}>
                      {el.name}
                    </S.Name>
                    <S.Remarks>{el.remarks}</S.Remarks>
                    <S.SellerWrapper>
                      <S.ProfileImg src="/images/profile-24px.png" />
                      <S.Seller>{el.seller.name}</S.Seller>
                      <S.PickedIcon />
                      <S.PickedCount>{el.pickedCount}</S.PickedCount>
                    </S.SellerWrapper>
                  </S.FlexBox>
                  <S.Price>{el.price.toLocaleString()}원</S.Price>
                </S.ListBody>
              </S.Row>
            ))}
          </div>
        ) : (
          <></>
        )}
      </S.visitedItems>
    </S.Wrapper>
  );
}
