import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import { ChangeEvent } from "react";

export interface IBoardListUIProps {
  data?: {
    fetchBoards: {
      _id: string;
      writer: string;
      title: string;
      contents: string;
      createdAt: string;
      map: any;
    };
  };
  onClickMoveToBoardNew: () => void;
  onClickMoveToBoardDetail: (event: any) => void;
  refetch(
    variables?: Partial<OperationVariables> | undefined
  ): Promise<ApolloQueryResult<any>>;
  count?: number;
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  keyword: string;
  activedPage: number;
  setActivedPage: any;
  startPage: number;
  setStartPage: any;
}

export interface Iprops {
  isMatched: boolean;
}
