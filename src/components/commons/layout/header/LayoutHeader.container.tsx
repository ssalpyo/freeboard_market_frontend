import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/store";
import LayoutHeaderUI from "./LayoutHeader.presenter";
import { FETCH_USER_LOGGED_IN, LOGOUT_USER } from "./LayoutHeader.queries";

export default function LayoutHeader() {
  const router = useRouter();

  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const [logoutUser] = useMutation(LOGOUT_USER);

  const { data } =
    useQuery<Pick<any, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  const onClickLogo = () => {
    router.push("/");
  };

  const onClickMoveToLogin = () => {
    router.push("/login");
  };

  const onClickMoveToSignUp = () => {
    router.push("/sign-up");
  };

  const onClickLogOut = () => {
    Modal.confirm({
      content: "정말 로그아웃 하시겠습니까?",
      onOk() {
        logoutUser();
        setAccessToken("");
        // localStorage.clear();
        router.push("/");
      },
    });
  };

  return (
    <LayoutHeaderUI
      onClickLogo={onClickLogo}
      onClickMoveToLogin={onClickMoveToLogin}
      onClickMoveToSignUp={onClickMoveToSignUp}
      onClickLogOut={onClickLogOut}
      accessToken={accessToken}
      data={data}
    />
  );
}
