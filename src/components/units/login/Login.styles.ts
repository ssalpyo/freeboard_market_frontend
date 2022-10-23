import styled from "@emotion/styled";
import theme from "../../../commons/styles/theme";

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 500px;
  background: #fff;
  box-shadow: 0px 5px 7px rgba(0, 0, 0, 0.07);
  border-radius: 5px;
  padding: 60px 40px;

  @media ${theme.device.tablet} {
    padding: 40px 20px;
  }
`;

export const LogoBox = styled.div`
  width: 100%;
  display: flex;
  align-items: baseline;
  padding-bottom: 20px;
  border-bottom: 1px solid #c9c9c9;
  margin-bottom: 60px;
`;

export const Logo = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 100%;
  color: #000;
`;

export const Error = styled.div`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #cc0000;
  padding: 5px 5px 20px 5px;
`;

export const SignButton = styled.button`
  height: 60px;
  background-color: #000;
  border: none;
  border-radius: 10px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 100%;
  color: #fff;
  cursor: pointer;

  :disabled {
    color: #000;
    background-color: #f6f6f6;
    cursor: default;
  }
`;

export const Footer = styled.div`
  padding-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Label = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  color: #888;
`;

export const SignUp = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  color: #000;
  border-bottom: 1px solid black;
  margin-left: 21px;
  cursor: pointer;
`;
