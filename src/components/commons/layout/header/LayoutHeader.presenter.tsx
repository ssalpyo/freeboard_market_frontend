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
              Logout
            </S.LogOutButton>
          </div>
        )}
        {!props.accessToken && (
          <div>
            <S.SignInButton onClick={props.onClickMoveToLogin}>
              Sign in
            </S.SignInButton>
            <S.SignUpButton onClick={props.onClickMoveToSignUp}>
              Sign up
            </S.SignUpButton>
          </div>
        )}
      </S.InnerWrapper>
    </S.Wrapper>
  );
}
