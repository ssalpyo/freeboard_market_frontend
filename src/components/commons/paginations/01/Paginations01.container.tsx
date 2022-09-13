import { MouseEvent } from "react";
import Paginations01UI from "./Paginations01.presenter";
import { IPaginations01Props } from "./Paginations01.types";

export default function Paginations01(props: IPaginations01Props) {
  const lastPage = props.count ? Math.ceil(props.count / 10) : 0;

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    if (!(event.target instanceof Element)) return;
    const activedPage = Number(event.target.id);
    props.setActivedPage(activedPage);
    props.refetch({ page: activedPage });
  };

  const onClickPrevPage = () => {
    if (props.startPage <= 1) return;
    props.setStartPage((prev: number) => prev - 10);
    props.setActivedPage(props.startPage - 10);
    props.refetch({ page: props.startPage - 10 });
  };

  const onClickNextPage = () => {
    if (props.startPage + 10 > lastPage) return;
    props.setStartPage((prev: number) => prev + 10);
    props.setActivedPage(props.startPage + 10);
    props.refetch({ page: props.startPage + 10 });
  };

  return (
    <Paginations01UI
      startPage={props.startPage}
      lastPage={lastPage}
      activedPage={props.activedPage}
      onClickPage={onClickPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
    />
  );
}
