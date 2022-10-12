import styled from "@emotion/styled";
import theme from "../../../commons/styles/theme";

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 1200px;
  background: #fff;
  box-shadow: 0px 5px 7px rgba(0, 0, 0, 0.07);
  border-radius: 5px;
  padding: 60px 40px;

  @media ${theme.device.mobile} {
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

export const InputBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 30px;
`;

export const Label = styled.div`
  width: 130px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 100%;
  color: #000;
`;

export const SignInput = styled.input`
  width: 100%;
  max-width: 780px;
  height: 60px;
  background: #f6f6f6;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0px 30px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  color: #a9a9a9;
`;

export const Error = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #ff0000;
  padding-left: 10px;
`;

export const ButtonBox = styled.div`
  display: flex;
  padding-top: 50px;
  justify-content: center;
`;

export const SignUpButton = styled.button`
  width: 100%;
  max-width: 300px;
  height: 70px;
  background: #000;
  border: none;
  border-radius: 5px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: -0.05em;
  color: #fff;
  margin-right: 21px;
  cursor: pointer;

  :disabled {
    color: #000;
    background-color: #f6f6f6;
    cursor: default;
  }
`;

export const CancelButton = styled.button`
  width: 100%;
  max-width: 300px;
  height: 70px;
  background: #000;
  border: none;
  border-radius: 5px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: -0.05em;
  color: #fff;
  cursor: pointer;
`;

export const Footer = styled.div`
  padding-top: 36px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Desk = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  color: #888;
`;

export const Login = styled.div`
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
