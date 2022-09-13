import { CommentOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  padding-left: 50px;
`;

export const CommentHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #bdbdbd;
`;

export const CommentIcon = styled(CommentOutlined)`
  font-size: 40px;
  color: #828282;
`;

export const CommentTitle = styled.div`
  padding-left: 14px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  color: #000;
`;

export const CommentBody = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
`;

export const InputInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const InputInfo = styled.input`
  width: 110px;
  height: 40px;
  background: #fff;
  border: 1px solid #bdbdbd;
  padding-left: 10px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #000;
  outline-color: #000;
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

export const InputCommentWrapper = styled.div`
  width: 100%;
  height: 121px;
  display: flex;
  flex-direction: column;
  border: 1px solid #bdbdbd;
`;

export const InputComment = styled.textarea`
  width: 100%;
  height: 100%;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #f2f2f2;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #000;
  outline-color: #000;
  resize: none;

  ::placeholder {
    font-family: "Noto Sans CJK KR";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #bdbdbd;
  }
`;

export const InputCommentFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
`;

export const CommentMaxLength = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #bdbdbd;
`;

export const CommentSubmitButton = styled.button`
  width: 91px;
  height: 42px;
  background-color: #000;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #fff;
  cursor: pointer;
  border: none;

  :disabled {
    background-color: #f2f2f2;
    cursor: default;
  }
`;
