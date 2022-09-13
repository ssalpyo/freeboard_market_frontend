export interface IProps {
  onClickLogo: () => void;
  onClickMoveToLogin: () => void;
  onClickMoveToSignUp: () => void;
  onClickLogOut: () => void;
  accessToken: string;
  data: any;
}
