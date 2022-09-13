import SignButton from "../../commons/buttons/sign-in-up";
import SignInput from "../../commons/inputs/sign-in-up";
import * as S from "./Login.styles";
import { ILoginUIProps } from "./Login.types";

export default function LoginUI(props: ILoginUIProps) {
  return (
    <S.Wrapper onSubmit={props.handleSubmit(props.onClickLogin)}>
      <S.Logo>SSALPYO</S.Logo>
      <SignInput
        type="text"
        placeholder="이메일을 입력해주세요."
        register={props.register("email")}
      />
      <S.Error>{props.formState.errors.email?.message}</S.Error>
      <SignInput
        type="password"
        placeholder="비밀번호를 입력해주세요."
        register={props.register("password")}
      />
      <S.Error>{props.formState.errors.password?.message}</S.Error>
      <S.CheckBoxWrapper>
        <S.CheckBoxIcon />
        <S.LoginStatus>로그인 상태 유지</S.LoginStatus>
      </S.CheckBoxWrapper>
      <SignButton isValid={props.formState.isValid} title="로그인" />
      <S.Footer>
        <S.Label>이메일 찾기</S.Label>
        <S.Label>비밀번호 찾기</S.Label>
        <S.Label>회원가입</S.Label>
      </S.Footer>
    </S.Wrapper>
  );
}
