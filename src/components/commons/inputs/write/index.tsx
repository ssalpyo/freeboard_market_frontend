import styled from "@emotion/styled";

export const Input = styled.input`
  width: 100%;
  padding: 14px;
  border: 1px solid #bdbdbd;
  outline-color: #000;
`;

interface IProps {
  type: string;
  placeholder?: string;
  disabled?: boolean;
  defaultValue?: string;
  register: any;
}

export default function WriteInput(props: IProps) {
  return (
    <Input
      type={props.type}
      placeholder={props.placeholder}
      disabled={props.disabled}
      defaultValue={props.defaultValue}
      {...props.register}
    />
  );
}
