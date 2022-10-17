import { useRouter } from "next/router";
import { Fragment } from "react";
import { MenuItem, Wrapper } from "./LayoutNavigation.styles";
import { ILayoutNavigationUIProps } from "./LayoutNavigation.types";

const NAVIGATION_MENUS = [
  { name: "고양이", page: "/cats" },
  { name: "자유게시판", page: "/boards" },
  { name: "중고마켓", page: "/markets" },
  { name: "마이페이지", page: "/mypages" },
];

export default function LayoutNavigationUI(props: ILayoutNavigationUIProps) {
  const router = useRouter();
  return (
    <Wrapper>
      {NAVIGATION_MENUS.map((el) => (
        <Fragment key={el.page}>
          <MenuItem
            id={el.page}
            onClick={props.onClickMenu}
            isActive={router.asPath.includes(el.page)}
          >
            {el.name}
          </MenuItem>
        </Fragment>
      ))}
    </Wrapper>
  );
}
