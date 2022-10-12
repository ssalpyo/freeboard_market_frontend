import styled from "@emotion/styled";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import theme from "../../../../commons/styles/theme";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export const Wrapper = styled.form`
  width: 100%;
  max-width: 1600px;
  display: flex;
  flex-direction: row;
  background-color: #fff;
  border: none;
  box-shadow: 0px 0px 10px gray;
  padding: 50px;

  @media ${theme.device.tablet} {
    flex-direction: column;
    padding: 30px;
  }
`;

export const WrapperLeftBox = styled.div`
  width: 70%;
  padding-right: 50px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #999;

  @media ${theme.device.tablet} {
    width: 100%;
    border: none;
    padding-right: 0px;
  }
`;

export const WrapperRightBox = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  padding-left: 50px;
  padding-top: 70px;

  @media ${theme.device.tablet} {
    width: 100%;
    padding-left: 0px;
  }
`;

export const Title = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 32px;
  font-weight: bold;

  @media ${theme.device.tablet} {
    font-size: 28px;
  }
`;

export const WriterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding-top: 10px;
`;

export const Label = styled.div`
  padding-bottom: 10px;
  font-size: 16px;
  font-weight: 500;
`;

export const InputWrapper = styled.div`
  width: 100%;
  padding-top: 12px;
`;

export const Contents = styled(ReactQuill)`
  width: 100%;
  height: 350px;
`;

export const ZipcodeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const Zipcode = styled.input`
  width: 100%;
  max-width: 70px;
  padding: 14px;
  border: 1px solid #bdbdbd;
  outline-color: #000;
`;

export const SearchButton = styled.button`
  width: 100%;
  max-width: 124px;
  height: 52px;
  background-color: #000;
  color: #fff;
`;

export const Address = styled.input`
  width: 100%;
  height: 52px;
  margin-top: 16px;
  padding-left: 14px;
  border: 1px solid #bdbdbd;
  outline-color: #000;
`;

export const Youtube = styled.input`
  width: 100%;
  height: 52px;
  padding-left: 14px;
  border: 1px solid #bdbdbd;
  outline-color: #000;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  padding-top: 20px;
`;

export const OptionWrapper = styled.div`
  width: 100%;
  padding-top: 40px;
`;

export const RadioButton = styled.input`
  cursor: pointer;
`;

export const RadioLabel = styled.label`
  margin-left: 8px;
  margin-right: 20px;
  font-weight: 500;
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 50px;
`;

export const SubmitButton = styled.button`
  width: 100%;
  max-width: 180px;
  height: 52px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  background-color: #ffd600;
  cursor: pointer;

  :disabled {
    background-color: #f2f2f2;
    cursor: default;
  }
`;

export const Error = styled.div`
  height: 10px;
  padding-top: 5px;
  padding-left: 2px;
  font-size: 14px;
  color: red;
`;
