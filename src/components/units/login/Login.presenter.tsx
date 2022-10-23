import Link from "next/link";
import SignInput from "../../commons/inputs/sign-in-up";
import * as S from "./Login.styles";
import { ILoginUIProps } from "./Login.types";

export default function LoginUI(props: ILoginUIProps) {
  return (
    <S.Wrapper onSubmit={props.handleSubmit(props.onClickLogin)}>
      <S.LogoBox>
        <S.Logo>로그인</S.Logo>
      </S.LogoBox>
      <SignInput
        type="text"
        placeholder="아이디"
        register={props.register("email")}
      />
      <S.Error>{props.formState.errors.email?.message}</S.Error>
      <SignInput
        type="password"
        placeholder="비밀번호"
        register={props.register("password")}
      />
      <S.Error>{props.formState.errors.password?.message}</S.Error>
      <S.SignButton disabled={!props.formState.isValid}>로그인</S.SignButton>
      <S.Footer>
        <S.Label>아직 계정이 없으신가요?</S.Label>
        <Link href="/sign-up">
          <S.SignUp>회원가입</S.SignUp>
        </Link>
      </S.Footer>
    </S.Wrapper>
  );
}
