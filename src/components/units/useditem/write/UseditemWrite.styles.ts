import styled from "@emotion/styled";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export const Wrapper = styled.form`
  width: 1600px;
  min-height: 900px;
  background-color: #fff;
  border: none;
  box-shadow: 0px 0px 10px gray;
  padding: 50px;
  display: flex;
  flex-direction: row;
`;

export const WrapperLeftBox = styled.div`
  width: 70%;
  padding-left: 30px;
  padding-right: 80px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #999;
`;

export const WrapperRightBox = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  padding-left: 50px;
  padding-top: 70px;
`;

export const Title = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 36px;
  font-weight: bold;
`;

export const ProductWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 5px;
`;

export const Name = styled.input`
  width: 450px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
  outline-color: #000;
`;

export const Price = styled.input`
  width: 450px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
  outline-color: #000;
`;

export const Label = styled.div`
  padding-bottom: 16px;
  font-size: 16px;
  font-weight: 500;
`;

export const InputWrapper = styled.div`
  padding-top: 20px;
`;

export const Remarks = styled.input`
  width: 100%;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
  outline-color: #000;
`;

export const Contents = styled(ReactQuill)`
  height: 380px;
`;

export const Address = styled.input`
  width: 100%;
  height: 52px;
  margin-top: 16px;
  padding-left: 16px;
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
  width: 179px;
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
