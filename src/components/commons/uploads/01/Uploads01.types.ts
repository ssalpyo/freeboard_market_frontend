import { ChangeEvent, LegacyRef } from "react";

export interface IUploads01Props {
  key: string;
  index: number;
  onChangeFiles: (index: number, url: string) => void;
  fileUrls: string[];
}

export interface IUploads01UIProps {
  fileRef: LegacyRef<HTMLInputElement>;
  fileUrl: string;
  onClickUpload: () => void;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
}
