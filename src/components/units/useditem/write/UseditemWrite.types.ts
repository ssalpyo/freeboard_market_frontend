export interface IUseditemWriteProps {
  isEdit: boolean;
  useditemData?: any;
}

export interface IData {
  name: string;
  remarks: string;
  contents: string;
  price: number;
  lat?: number;
  lng?: number;
  address?: string;
  addressDetail?: string;
}

export interface IUseditemWriteUIProps {
  onClickSubmit: (data: IData) => void;
  onClickEdit: (data: IData) => void;
  register: any;
  handleSubmit: any;
  formState: any;
  onChangeFiles: (index: number, url: string) => void;
  fileUrls: string[];
  onChangeContents: (value: string) => void;
  isEdit: boolean;
  useditemData: any;
  onChangeLocation: (la: number, ma: number, address: string) => void;
}

export interface IupdateUseditemInput {
  name?: string;
  price?: number;
  remarks?: string;
  contents?: string;
  images?: string[];
  useditemAddress?: {
    lat?: number;
    lng?: number;
    address?: string;
    addressDetail?: string;
  };
}
