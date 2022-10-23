import { MouseEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { TOGGLE_USEDITEM_PICK } from "./useditemCard.queries";
import { IUseditemCardProps } from "./useditemCard.types";
import UseditemCardUI from "./useditemCard.presenter";
import { visitedState } from "../../../commons/store";
import { useRecoilState } from "recoil";

export default function UseditemCard(props: IUseditemCardProps) {
  const router = useRouter();

  const [, setVisitedItems] = useRecoilState(visitedState);
  const [isActive, setIsActive] = useState<boolean>(false);

  const [toggleUseditemPick] = useMutation(TOGGLE_USEDITEM_PICK);

  useEffect(() => {
    props.pickList?.fetchUseditemsIPicked.forEach((el: any) => {
      if (el._id === props.data._id) {
        return setIsActive(true);
      }
    });
  }, [props.pickList?.fetchUseditemsIPicked]);

  const onClickMoveToDetail = (el: any) => () => {
    const visited = JSON.parse(sessionStorage.getItem("visited") || "[]");
    const { __typename, ...newEl } = el;
    visited.unshift(newEl);
    sessionStorage.setItem("visited", JSON.stringify(visited));
    setVisitedItems(visited);
    router.push(`/markets/${el._id}`);
  };

  const onTogglePick = async (e: MouseEvent<HTMLDivElement>) => {
    try {
      const result = await toggleUseditemPick({
        variables: {
          useditemId: e.currentTarget.id,
        },
      });
      setIsActive(result.data?.toggleUseditemPick);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <>
      {props.data?._id && (
        <UseditemCardUI
          data={props.data}
          isActive={isActive}
          onClickMoveToDetail={onClickMoveToDetail}
          onTogglePick={onTogglePick}
        />
      )}
    </>
  );
}
