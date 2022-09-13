import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const CommentEditWrapper = styled.div`
  width: 100%;
  height: 123px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-bottom: 1px solid #bdbdbd;
`;

export const CommentEditHeader = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`;

export const FlexBox = styled.div``;

export const InputPassword = styled.input`
  width: 110px;
  height: 30px;
  border: 1px solid #bdbdbd;
  padding-left: 10px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #000;
  margin-right: 15px;

  ::placeholder {
    font-family: "Noto Sans CJK KR";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #bdbdbd;
  }
`;

export const EditSubmitIcon = styled(CheckOutlined)`
  font-size: 20px;
  color: #828282;
  margin-right: 5px;
  cursor: pointer;

  :hover {
    color: #ffd600;
  }
`;

export const EditCancelIcon = styled(CloseOutlined)`
  font-size: 20px;
  color: #828282;
  cursor: pointer;

  :hover {
    color: #ffd600;
  }
`;

export const CommentEditFooter = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  padding-top: 10px;
`;

export const CommentEditContents = styled.textarea`
  resize: none;
  width: 100%;
  height: 100%;
  border: 1px solid #bdbdbd;
  padding-left: 10px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #000;
`;
