import styled from "@emotion/styled";
import theme from "../../../../commons/styles/theme";
import { IMenuItemProps } from "./LayoutNavigation.types";

export const Wrapper = styled.div`
  width: 100%;
  height: 56px;
  background-color: #999;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media ${theme.device.tablet} {
    height: 40px;
  }
  @media ${theme.device.mobile} {
    height: 30px;
  }
`;

export const MenuItem = styled.div`
  margin: 0 60px;
  font-size: 18px;
  color: ${(props: IMenuItemProps) => (props.isActive ? "#000" : "#fff")};
  cursor: pointer;

  :hover {
    color: #000;
  }

  @media ${theme.device.tablet} {
    margin: 0 30px;
    font-size: 16px;
  }
  @media ${theme.device.mobile} {
    margin: 0 10px;
    font-size: 12px;
  }
`;
