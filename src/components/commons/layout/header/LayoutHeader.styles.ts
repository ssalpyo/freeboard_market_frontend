import styled from "@emotion/styled";
import theme from "../../../../commons/styles/theme";

export const Wrapper = styled.div`
  width: 100%;
  background-color: #1d1d1f;
  position: sticky;
  top: 0;
  z-index: 99;
`;

export const InnerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  padding: 0 30px;

  @media ${theme.device.tablet} {
    padding: 0 20px;
    font-size: 14px;
  }

  @media ${theme.device.mobile} {
    padding: 0 10px;
  }
`;

export const InnerLogo = styled.div`
  font-size: 32px;
  font-weight: bold;
  font-family: "live";
  font-style: italic;
  color: #fff;
  cursor: pointer;

  @media ${theme.device.tablet} {
    font-size: 28px;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const SignInButton = styled.span`
  color: #fff;
  cursor: pointer;
`;

export const SignUpButton = styled.button`
  color: #000;
  text-align: center;
  border-radius: 10px;
  background-color: #fff;
  padding: 5px 10px;
`;

export const LogOutButton = styled.button`
  color: #000;
  text-align: center;
  border-radius: 10px;
  background-color: #fff;
  padding: 5px 10px;
`;
