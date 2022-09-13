import SignButton from "../../commons/buttons/sign-in-up";
import SignInput from "../../commons/inputs/sign-in-up";
import * as S from "./SignUp.styles";
import { ISignUpUIProps } from "./SignUp.types";

export default function SignUpUI(props: ISignUpUIProps) {
  return (
    <S.Wrapper onSubmit={props.handleSubmit(props.onClickSignUp)}>
      <S.Logo>회원가입</S.Logo>
      <S.Label>이메일</S.Label>
      <SignInput
        type="text"
        placeholder="이메일을 입력해주세요."
        register={props.register("email")}
      />
      <S.Error>{props.formState.errors.email?.message}</S.Error>
      <S.Label>이름</S.Label>
      <SignInput
        type="text"
        placeholder="이름을 입력해주세요."
        register={props.register("name")}
      />
      <S.Error>{props.formState.errors.name?.message}</S.Error>
      <S.Label>비밀번호</S.Label>
      <SignInput
        type="password"
        placeholder="비밀번호를 입력해주세요."
        register={props.register("password")}
      />
      <S.Error>{props.formState.errors.password?.message}</S.Error>
      <S.Label>비밀번호 확인</S.Label>
      <SignInput
        type="password"
        placeholder="비밀번호를 다시 입력해주세요."
        register={props.register("passwordCheck")}
      />
      <S.Error>{props.formState.errors.passwordCheck?.message}</S.Error>
      <SignButton isValid={props.formState.isValid} title="회원가입" />
    </S.Wrapper>
  );
}
