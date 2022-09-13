import * as S from "./BoardList.styles";
import { getDate } from "../../../../commons/libraries/utils";
import { IBoardListUIProps } from "./BoardList.types";
import Paginations01 from "../../../commons/paginations/01/Paginations01.container";
import { v4 as uuidv4 } from "uuid";

export default function BoardListUI(props: IBoardListUIProps) {
  return (
    <S.Wrapper>
      <S.WrapperLeftBox>
        <S.SearchWrapper>
          <S.Search
            placeholder="제목을 검색해주세요."
            onChange={props.onChangeSearch}
          />
        </S.SearchWrapper>
        <S.TableTop />
        <S.Row>
          <S.ColumnHeaderBasic>ID</S.ColumnHeaderBasic>
          <S.ColumnHeaderBasic>작성자</S.ColumnHeaderBasic>
          <S.ColumnHeaderTitle>제목</S.ColumnHeaderTitle>
          <S.ColumnHeaderBasic>날짜</S.ColumnHeaderBasic>
        </S.Row>
        {props.data?.fetchBoards.map((el: any) => (
          <S.Row key={el._id}>
            <S.ColumnBasic>
              {String(el._id).slice(-4).toUpperCase()}
            </S.ColumnBasic>
            <S.ColumnBasic>{el.writer}</S.ColumnBasic>
            <S.ColumnTitle id={el._id} onClick={props.onClickMoveToBoardDetail}>
              {el.title
                .replaceAll(props.keyword, `#$%${props.keyword}#$%`)
                .split("#$%")
                .map((el: any) => (
                  <S.Word key={uuidv4()} isMatched={props.keyword === el}>
                    {el}
                  </S.Word>
                ))}
            </S.ColumnTitle>
            <S.ColumnBasic>{getDate(el.createdAt)}</S.ColumnBasic>
          </S.Row>
        ))}
        <S.TableBottom />
        <S.Footer>
          <Paginations01
            refetch={props.refetch}
            count={props.count}
            activedPage={props.activedPage}
            setActivedPage={props.setActivedPage}
            startPage={props.startPage}
            setStartPage={props.setStartPage}
          />
          <S.Button onClick={props.onClickMoveToBoardNew}>
            게시물 등록하기
          </S.Button>
        </S.Footer>
      </S.WrapperLeftBox>
    </S.Wrapper>
  );
}
