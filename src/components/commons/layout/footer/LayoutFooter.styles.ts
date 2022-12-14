import theme from "../../../../commons/styles/theme";
import styled from "@emotion/styled";

export const Container = styled.footer`
  margin: auto;
  width: 100%;
  background-color: #999;
  padding: 60px 0;

  @media ${theme.device.tablet} {
    padding: 40px 0;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const Title = styled.h2`
  ${theme.fontSizes.subTitle};
  font-family: sans-serif;
  color: rgb(51, 51, 51);
`;

export const InfoText = styled.p`
  margin: 0;
  margin-bottom: 10px;
  color: rgb(51, 51, 51);
  ${theme.fontSizes.base};
  font-weight: 500;
  font-family: sans-serif;
  :last-child {
    margin-bottom: 0;
  }

  @media ${theme.device.tablet} {
    ${theme.fontSizes.small};
  }
`;

export const CompanyText = styled.p`
  margin: 0;
  margin-bottom: 10px;
  color: rgb(51, 51, 51);
  ${theme.fontSizes.small};
  font-weight: 500;
  font-family: sans-serif;
  :last-child {
    margin-bottom: 0;
  }
`;
