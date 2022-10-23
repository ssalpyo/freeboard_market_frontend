import styled from "@emotion/styled";

export const Input = styled.input`
  width: 100%;
  max-width: 780px;
  height: 60px;
  background: #f6f6f6;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0px 20px;
  color: #6b6b6b;
  outline-color: #000;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
`;

interface IProps {
  type: string;
  placeholder: string;
  register: any;
}

export default function SignInput(props: IProps) {
  return (
    <Input
      type={props.type}
      placeholder={props.placeholder}
      {...props.register}
    />
  );
}
