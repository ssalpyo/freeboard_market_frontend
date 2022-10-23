import * as S from "./UseditemList.styles";
import { v4 as uuidv4 } from "uuid";
import { IUseditemListUIProps } from "./UseditemList.types";
import InfiniteScroll from "react-infinite-scroller";
import UseditemCard from "../../../commons/useditem-card/useditemCard.container";

export default function UseditemListUI(props: IUseditemListUIProps) {
  return (
    <S.Wrapper>
      <S.SearchBox>
        <S.SearchInput placeholder="제품을 검색해주세요." />
        <S.SearchImg src="/images/search.svg" alt="searchImg" />
      </S.SearchBox>
      <S.ScrollBox>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.loadFunc}
          hasMore={true}
          useWindow={false}
        >
          <S.ListWrapper>
            {props.data?.fetchUseditems.map((el: any) => (
              <UseditemCard
                key={uuidv4()}
                data={el}
                pickList={props.pickList}
              />
            ))}
          </S.ListWrapper>
        </InfiniteScroll>
      </S.ScrollBox>
      <S.Footer>
        <S.Button onClick={props.onClickMoveToUseditemNew}>
          상품 등록하기
        </S.Button>
      </S.Footer>
    </S.Wrapper>
  );
}
