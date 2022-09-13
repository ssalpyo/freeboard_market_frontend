import styled from "@emotion/styled";

export const Button = styled.button`
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

interface IProps {
  isValid: boolean;
  title: string;
}

export default function SignButton(props: IProps) {
  return <Button disabled={!props.isValid}>{props.title}</Button>;
}
