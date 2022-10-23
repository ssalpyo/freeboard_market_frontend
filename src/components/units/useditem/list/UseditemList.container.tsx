import { useQuery } from "@apollo/client";
import { NextRouter, useRouter } from "next/router";
import UseditemListUI from "./UseditemList.presenter";
import {
  FETCH_USEDITEMS,
  FETCH_USEDITEMS_I_PICKED,
} from "./UseditemList.queries";

export default function UseditemList() {
  const router: NextRouter = useRouter();

  const { data, fetchMore } = useQuery(FETCH_USEDITEMS);
  const { data: pickList } = useQuery(FETCH_USEDITEMS_I_PICKED, {
    variables: {
      search: "",
    },
  });

  const onClickMoveToUseditemNew = () => {
    router.push("/markets/new");
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
      pickList={pickList}
      loadFunc={loadFunc}
      onClickMoveToUseditemNew={onClickMoveToUseditemNew}
    />
  );
}
