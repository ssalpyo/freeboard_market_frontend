import type { InputRef } from "antd";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import AntdTagUI from "./Tag.presenter";
import { IAntdTagProps } from "./Tag.types";

export default function AntdTag(props: IAntdTagProps) {
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [editInputIndex, setEditInputIndex] = useState(-1);
  const [editInputValue, setEditInputValue] = useState("");
  const inputRef = useRef<InputRef>(null);
  const editInputRef = useRef<InputRef>(null);

  useEffect(() => {
    if (inputVisible) {
      inputRef.current?.focus();
    }
  }, [inputVisible]);

  useEffect(() => {
    editInputRef.current?.focus();
  }, [inputValue]);

  const handleClose = (removedTag: string) => {
    const newTags = props.tags.filter((tag: string) => tag !== removedTag);
    console.log(newTags);
    props.setTags(newTags);
  };

  const showInput = () => {
    setInputVisible(true);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputConfirm = () => {
    if (props.tags && inputValue && props.tags.indexOf(inputValue) === -1) {
      props.setTags([...props.tags, inputValue]);
    }
    setInputVisible(false);
    setInputValue("");
  };

  const handleEditInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEditInputValue(e.target.value);
  };

  const handleEditInputConfirm = () => {
    const newTags = [...props.tags];
    newTags[editInputIndex] = editInputValue;
    props.setTags(newTags);
    setEditInputIndex(-1);
    setInputValue("");
  };

  return (
    <AntdTagUI
      tags={props.tags}
      inputVisible={inputVisible}
      inputValue={inputValue}
      editInputIndex={editInputIndex}
      editInputValue={editInputValue}
      inputRef={inputRef}
      editInputRef={editInputRef}
      setEditInputIndex={setEditInputIndex}
      setEditInputValue={setEditInputValue}
      handleClose={handleClose}
      showInput={showInput}
      handleInputChange={handleInputChange}
      handleInputConfirm={handleInputConfirm}
      handleEditInputChange={handleEditInputChange}
      handleEditInputConfirm={handleEditInputConfirm}
    />
  );
}
