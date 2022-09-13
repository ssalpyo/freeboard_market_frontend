import { PlusOutlined } from "@ant-design/icons";
import { Input, Tag, Tooltip } from "antd";
import { IAntdTagUIProps } from "./Tag.types";

export default function AntdTagUI(props: IAntdTagUIProps) {
  return (
    <>
      {props.tags &&
        props.tags.map((tag: string, index: number) => {
          if (props.editInputIndex === index) {
            return (
              <Input
                ref={props.editInputRef}
                key={tag}
                size="small"
                className="tag-input"
                value={props.editInputValue}
                onChange={props.handleEditInputChange}
                onBlur={props.handleEditInputConfirm}
                onPressEnter={props.handleEditInputConfirm}
              />
            );
          }

          const isLongTag: boolean = tag.length > 20;

          const tagElem = (
            <Tag
              className="edit-tag"
              key={tag}
              // closable={index !== 0}
              closable={true}
              onClose={() => props.handleClose(tag)}
            >
              <span
                onDoubleClick={(e) => {
                  // if (index !== 0) {
                  props.setEditInputIndex(index);
                  props.setEditInputValue(tag);
                  e.preventDefault();
                  // }
                }}
              >
                {isLongTag ? `${tag.slice(0, 20)}...` : tag}
              </span>
            </Tag>
          );
          return isLongTag ? (
            <Tooltip title={tag} key={tag}>
              {tagElem}
            </Tooltip>
          ) : (
            tagElem
          );
        })}
      {props.inputVisible && (
        <Input
          ref={props.inputRef}
          type="text"
          size="small"
          className="tag-input"
          value={props.inputValue}
          onChange={props.handleInputChange}
          onBlur={props.handleInputConfirm}
          onPressEnter={props.handleInputConfirm}
        />
      )}
      {!props.inputVisible && (
        <Tag className="site-tag-plus" onClick={props.showInput}>
          <PlusOutlined /> 태그
        </Tag>
      )}
    </>
  );
}
