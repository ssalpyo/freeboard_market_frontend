import { useQuery } from "@apollo/client";
import { NextRouter, useRouter } from "next/router";
import { useEffect, useState } from "react";
import UseditemListUI from "./UseditemList.presenter";
import { FETCH_USEDITEMS } from "./UseditemList.queries";

export default function UseditemList() {
  const router: NextRouter = useRouter();

  const { data, fetchMore } = useQuery(FETCH_USEDITEMS);
  const [visitedItems, setVisitedItems] = useState([]);

  useEffect(() => {
    setVisitedItems(JSON.parse(localStorage.getItem("visited") || "[]"));
  }, []);

  const onClickMoveToUseditemNew = () => {
    router.push("/markets/new");
  };

  const onClickMoveToUseditemDetail = (el: any) => () => {
    const visited = JSON.parse(localStorage.getItem("visited") || "[]");
    const temp = visited.filter((visitedEl: any) => visitedEl._id === el._id);

    if (!temp.length) {
      const { __typename, ...newEl } = el;
      visited.unshift(newEl);
      localStorage.setItem("visited", JSON.stringify(visited));
    }
    router.push(`/markets/${el._id}`);
  };

  const loadFunc = () => {
    if (!data) return;

    fetchMore({
      variables: { page: Math.ceil(data?.fetchUseditems.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditems)
          return {
            fetchUseditems: [...prev.fetchUseditems],
          };
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult?.fetchUseditems,
          ],
        };
      },
    });
  };

  return (
    <UseditemListUI
      data={data}
      visitedItems={visitedItems}
      loadFunc={loadFunc}
      onClickMoveToUseditemNew={onClickMoveToUseditemNew}
      onClickMoveToUseditemDetail={onClickMoveToUseditemDetail}
    />
  );
}
