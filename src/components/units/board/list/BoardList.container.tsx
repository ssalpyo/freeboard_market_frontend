import { useQuery } from "@apollo/client";
import { NextRouter, useRouter } from "next/router";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";
import BoardListUI from "./BoardList.presenter";
import _ from "lodash";
import { ChangeEvent, useState } from "react";

export default function BoardList() {
  const router: NextRouter = useRouter();

  const [startPage, setStartPage] = useState(1);
  const [activedPage, setActivedPage] = useState(1);
  const [keyword, setKeyword] = useState("");

  const { data, refetch } = useQuery(FETCH_BOARDS);
  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT, {
    variables: {
      search: keyword,
    },
  });

  const onClickMoveToBoardNew = () => {
    router.push("/boards/new");
  };

  const onClickMoveToBoardDetail = (event: any) => {
    router.push(`/boards/${event.currentTarget.id}`);
  };

  const getDebounce = _.debounce((data) => {
    refetch({ search: data, page: 1 });
    setKeyword(data);
    setStartPage(1);
    setActivedPage(1);
  }, 200);
  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };

  return (
    <BoardListUI
      data={data}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
      refetch={refetch}
      count={dataBoardsCount?.fetchBoardsCount}
      onChangeSearch={onChangeSearch}
      keyword={keyword}
      activedPage={activedPage}
      setActivedPage={setActivedPage}
      startPage={startPage}
      setStartPage={setStartPage}
    />
  );
}
