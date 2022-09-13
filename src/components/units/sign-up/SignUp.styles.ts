import styled from "@emotion/styled";

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  padding-bottom: 100px;
`;

export const Logo = styled.h1`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 40px;
  color: #fff;
  margin-bottom: 40px;
  text-align: center;
`;

export const Label = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #fff;
  padding-top: 15px;
`;

export const InputBox = styled.input`
  border: 1px solid #ffffff;
  border-radius: 16px;
  padding: 0px 16px;
  width: 384px;
  height: 64px;
  margin-top: 10px;
  margin-bottom: 4px;
  background: none;
  outline-color: #000;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #fff;
  opacity: 0.6;
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

export const SignUpButton = styled.button`
  width: 386px;
  height: 64px;
  margin: 40px 0px;
  background: #ffd600;
  border: none;
  border-radius: 16px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #000;
  cursor: pointer;

  :disabled {
    background: #4f4f4f;
    color: #bdbdbd;
    cursor: default;
  }
`;
