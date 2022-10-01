import * as S from "./LayoutHeader.styles";
import { IProps } from "./LayoutHeader.types";

export default function LayoutHeaderUI(props: IProps) {
  return (
    <S.Wrapper>
      <S.InnerWrapper>
        <S.InnerLogo onClick={props.onClickLogo}>SSALPYO</S.InnerLogo>
        {props.accessToken && (
          <div>
            <S.SignInButton>
              {props.data?.fetchUserLoggedIn.name}
            </S.SignInButton>
            <S.LogOutButton onClick={props.onClickLogOut}>
              로그아웃
            </S.LogOutButton>
          </div>
        )}
        {!props.accessToken && (
          <div>
            <S.SignInButton onClick={props.onClickMoveToLogin}>
              로그인
            </S.SignInButton>
            <S.SignUpButton onClick={props.onClickMoveToSignUp}>
              회원가입
            </S.SignUpButton>
          </div>
        )}
      </S.InnerWrapper>
    </S.Wrapper>
  );
}
