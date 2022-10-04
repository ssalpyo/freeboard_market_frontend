import Link from "next/link";
import * as S from "./SignUp.styles";
import { ISignUpUIProps } from "./SignUp.types";

export default function SignUpUI(props: ISignUpUIProps) {
  return (
    <S.Wrapper onSubmit={props.handleSubmit(props.onClickSignUp)}>
      <S.LogoBox>
        <S.Logo>회원가입</S.Logo>
      </S.LogoBox>
      <S.InputBox>
        <S.Label>아이디</S.Label>
        <S.SignInput
          type="text"
          placeholder="이메일 아이디를 @까지 정확하게 입력하세요"
          {...props.register("email")}
        />
      </S.InputBox>
      <S.Error>{props.formState.errors.email?.message}</S.Error>
      <S.InputBox>
        <S.Label>비밀번호</S.Label>
        <S.SignInput
          type="password"
          placeholder="영문+숫자 조합 8~16자리를 입력해주세요"
          {...props.register("password")}
        />
      </S.InputBox>
      <S.Error>{props.formState.errors.password?.message}</S.Error>
      <S.InputBox>
        <S.Label>비밀번호 확인</S.Label>
        <S.SignInput
          type="password"
          placeholder="영문+숫자 조합 8~16자리를 입력해주세요"
          {...props.register("passwordCheck")}
        />
      </S.InputBox>
      <S.Error>{props.formState.errors.passwordCheck?.message}</S.Error>
      <S.InputBox>
        <S.Label>이름</S.Label>
        <S.SignInput
          type="text"
          placeholder="Ex) 홍길동"
          {...props.register("name")}
        />
      </S.InputBox>
      <S.Error>{props.formState.errors.name?.message}</S.Error>
      <S.ButtonBox>
        <S.SignUpButton disabled={!props.formState.isValid}>
          회원가입하기
        </S.SignUpButton>
        <S.CancelButton type="button" onClick={props.onClickCancel}>
          취소
        </S.CancelButton>
      </S.ButtonBox>
      <S.Footer>
        <S.Desk>이미 아이디가 있으신가요?</S.Desk>
        <Link href="/login">
          <S.Login>로그인</S.Login>
        </Link>
      </S.Footer>
    </S.Wrapper>
  );
}
