import { ChangeEvent } from "react";

export interface IBoardWriteProps {
  isEdit: boolean;
  boardData?: any;
}

export interface IupdateBoardInput {
  title?: string;
  contents?: string;
  youtubeUrl?: string;
  images?: string[];
  boardAddress?: {
    zipcode?: string;
    address?: string;
    addressDetail?: string;
  };
}

export interface IData {
  writer: string;
  password: string;
  title: string;
  contents: string;
  youtubeUrl: string;
}

export interface IBoardWriteUIProps {
  onChangeContents: (value: string) => void;
  onClickSubmit: (data: IData) => void;
  onClickEdit: (data: IData) => void;
  isEdit: boolean;
  boardData?: any;
  addressModalVisible: boolean;
  onToggleAddressModal: () => void;
  onCompleteAddress: (data: any) => void;
  zipcode: string;
  address: string;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeFiles: (index: number, url: string) => void;
  fileUrls: string[];
  register: any;
  handleSubmit: any;
  formState: any;
}
