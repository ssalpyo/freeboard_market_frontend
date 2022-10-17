import styled from "@emotion/styled";
import theme from "../../../../commons/styles/theme";
import { IMenuItemProps } from "./LayoutNavigation.types";

export const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  background-color: #999;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
    margin: 0 20px;
    font-size: 14px;
  }
  @media ${theme.device.mobile} {
    margin: 0 10px;
    font-size: 12px;
  }
`;
