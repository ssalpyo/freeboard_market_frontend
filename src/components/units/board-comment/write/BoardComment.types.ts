import { ChangeEvent } from "react";

export interface IBoardCommentUIProps {
  data?: {
    fetchBoardComments: {
      _id: string;
      writer: string;
      contents: string;
      rating: number;
      createdAt: string;
      updatedAt: string;
      map: any;
    };
  };
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickSubmitComment: () => void;
  onChangeRating: (value: number) => void;
  isActive: boolean;
  writer: string;
  password: string;
  contents: string;
  rating: number;
}
