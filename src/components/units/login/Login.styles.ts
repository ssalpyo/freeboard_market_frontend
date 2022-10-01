import { CheckCircleOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 742px;
  height: 802px;
  background: #fff;
  box-shadow: 0px 5px 7px rgba(0, 0, 0, 0.07);
  border-radius: 10px;
  padding: 70px;
`;

export const LogoBox = styled.div`
  width: 100%;
  display: flex;
  align-items: baseline;
  padding-bottom: 32.66px;
  border-bottom: 1px solid #c9c9c9;
  margin-bottom: 81px;
`;

export const Logo = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 100%;
  color: #000;
`;

export const LogoEng = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 100%;
  padding-left: 12.41px;
  color: #000000;
`;

export const SignInput = styled.input`
  width: 600px;
  height: 77.48px;
  background: #f6f6f6;
  border: 1px solid #cccccc;
  border-radius: 10px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 100%;
  align-items: center;
  text-transform: capitalize;
  color: #6b6b6b;
  padding: 0px 41px;
`;

export const Error = styled.div`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  text-transform: capitalize;
  color: #ef3030;
  padding-left: 16px;
  padding-top: 14px;
  padding-bottom: 35px;
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

export const SignButton = styled.button`
  width: 600px;
  height: 88px;
  background: #ffe004;
  border: none;
  border-radius: 10px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 100%;
  color: #000000;
  cursor: pointer;

  :disabled {
    background: #f6f6f6;
    cursor: default;
  }
`;

export const Footer = styled.div`
  padding-top: 39px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Label = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 100%;
  color: #888888;
`;

export const SignUp = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 100%;
  color: #000000;
  border-bottom: 1px solid black;
  margin-left: 21px;
  cursor: pointer;
`;
