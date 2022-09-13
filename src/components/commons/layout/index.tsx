import LayoutBanner from "./banner/LayoutBanner.container";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutNavigation from "./navigation/LayoutNavigation.container";
import styled from "@emotion/styled";
import { ReactNode } from "react";
import LayoutFooter from "./footer/LayoutFooter.container";
import { useRouter } from "next/router";
import LayoutSideBar from "./side-bar/LayoutSideBar.container";

interface ILayoutProps {
  children: ReactNode;
}
interface IProps {
  isLogin: boolean;
}

const Body = styled.div`
  /* height: 100%; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* align-items: center; */
  padding: 50px;
  background: ${(props: IProps) =>
    props.isLogin
      ? `linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8) ), url("/images/background.png")`
      : "#e5e5e5"};
  background-repeat: no-repeat;
`;

export default function Layout(props: ILayoutProps) {
  const router = useRouter();

  const isLogin: boolean =
    router.asPath.includes("login") || router.asPath.includes("sign-up");
  const isMyPage: boolean = router.asPath.includes("mypages");

  return (
    <>
      <LayoutHeader />
      {isLogin || <LayoutBanner />}
      {isLogin || <LayoutNavigation />}
      <Body isLogin={isLogin}>
        {isMyPage && <LayoutSideBar />}
        {props.children}
      </Body>
      <LayoutFooter />
    </>
  );
}
