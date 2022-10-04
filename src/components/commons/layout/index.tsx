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

const Wrapper = styled.div`
	width: 100%;
	/* max-width: 1400px; */
  /* padding: 0 20px; */
	margin: auto;
`

const Body = styled.div`
	width: 100%;
	padding: 20px 12%;
	display: flex;
	justify-content: center;
  background-color: #e5e5e5;
`;

export default function Layout(props: ILayoutProps) {
  const router = useRouter();

  const isLogin: boolean =
    router.asPath.includes("login") || router.asPath.includes("sign-up");
  const isMyPage: boolean = router.asPath.includes("mypages");

  return (
    <Wrapper>
      <LayoutHeader />
      {isLogin || <LayoutBanner />}
      {isLogin || <LayoutNavigation />}
      <Body>
        {isMyPage && <LayoutSideBar />}
        {props.children}
      </Body>
      <LayoutFooter />
    </Wrapper>
  );
}
