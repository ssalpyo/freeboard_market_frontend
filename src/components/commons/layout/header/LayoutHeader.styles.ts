import styled from "@emotion/styled";

export const Wrapper = styled.div`
	width: 100%;
  background-color: #1d1d1f;
  position: sticky;
  top: 0;
  z-index: 2;
`;

export const InnerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
	padding: 0 20px;
`;

export const InnerLogo = styled.div`
  font-size: 32px;
  font-weight: bold;
  font-family: "live";
  font-style: italic;
  color: #fff;
  cursor: pointer;
`;

export const SignInButton = styled.span`
  margin: 10px;
  color: #fff;
  cursor: pointer;
`;

export const SignUpButton = styled.button`
  margin: 10px;
  color: #000;
  text-align: center;
  border-radius: 10px;
  background-color: #fff;
  padding: 5px 10px;
  cursor: pointer;
`;

export const LogOutButton = styled.button`
  margin: 10px;
  color: #000;
  text-align: center;
  border-radius: 10px;
  background-color: #fff;
  padding: 5px 10px;
  cursor: pointer;
`;
