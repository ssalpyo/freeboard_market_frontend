import { ChangeEvent } from "react";

export interface IAntdTagProps {
  tags: string[];
  setTags: any;
}

export interface IAntdTagUIProps {
  tags: string[];
  inputVisible: boolean;
  inputValue: string;
  editInputIndex: number;
  editInputValue: string;
  inputRef: any;
  editInputRef: any;
  setEditInputIndex: any;
  setEditInputValue: any;
  handleClose: (removedTag: string) => void;
  showInput: () => void;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleInputConfirm: () => void;
  handleEditInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleEditInputConfirm: () => void;
}
