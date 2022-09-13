import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import { MouseEvent } from "react";

export interface IPaginations01Props {
  count?: number;
  refetch(
    variables?: Partial<OperationVariables> | undefined
  ): Promise<ApolloQueryResult<any>>;
  activedPage: number;
  setActivedPage: any;
  startPage: number;
  setStartPage: any;
}

export interface IPaginations01UIProps {
  startPage: number;
  lastPage: number;
  activedPage: number;
  onClickPage: (event: MouseEvent<HTMLSpanElement>) => void;
  onClickPrevPage: () => void;
  onClickNextPage: () => void;
}
