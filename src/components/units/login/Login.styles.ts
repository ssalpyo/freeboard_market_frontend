import { CheckCircleOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  padding-bottom: 100px;
`;

export const Logo = styled.h1`
  font-size: 50px;
  font-weight: bold;
  font-family: "live";
  font-style: italic;
  color: #fff;
  margin-bottom: 35px;
`;

export const Error = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #ff0000;
  padding-left: 16px;
`;

export const CheckBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 20px;
  padding-left: 5px;
`;

export const CheckBoxIcon = styled(CheckCircleOutlined)`
  color: #fff;
  font-size: 20px;
  cursor: pointer;

  :hover {
    color: #ffd600;
  }
`;

export const LoginStatus = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #fff;
  padding-left: 12px;
`;

export const Footer = styled.div`
  border-top: 1px solid #fff;
  padding-top: 29px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Label = styled.span`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #fff;
  padding: 0px 20px;
  cursor: pointer;

  :hover {
    color: #ffd600;
  }
`;
