import styled from "@emotion/styled";

export const Input = styled.input`
  border: 1px solid #ffffff;
  border-radius: 16px;
  padding: 0px 16px;
  width: 384px;
  height: 64px;
  margin-top: 15px;
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
