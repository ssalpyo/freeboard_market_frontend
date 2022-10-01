import styled from "@emotion/styled";

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 1200px;
  height: 903px;
  background: #fff;
  box-shadow: 0px 5px 7px rgba(0, 0, 0, 0.07);
  border-radius: 10px;
  padding: 70px 97px;
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
  padding-left: 40px;
  color: #000000;
`;

export const InputBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 30px;
`;

export const Label = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 100%;
  color: #000000;
`;

export const SignInput = styled.input`
  width: 786.96px;
  height: 64px;
  background: #f6f6f6;
  border: 1px solid #cccccc;
  border-radius: 5px;
  padding: 0px 37px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
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
  padding-left: 16px;
`;

export const ButtonBox = styled.div`
  display: flex;
  padding-top: 57px;
  justify-content: center;
`;

export const SignUpButton = styled.button`
  width: 330px;
  height: 70px;
  background: #ffe004;
  border: none;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: -0.05em;
  color: #000000;
  margin-right: 21px;
  cursor: pointer;

  :disabled {
    background: #f6f6f6;
    cursor: default;
  }
`;

export const CancelButton = styled.button`
  width: 330px;
  height: 70px;
  background: #000000;
  border: none;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: -0.05em;
  color: #ffffff;
  cursor: pointer;
`;

export const Footer = styled.div`
  padding-top: 39px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Desk = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 100%;
  color: #888888;
`;

export const Login = styled.div`
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
