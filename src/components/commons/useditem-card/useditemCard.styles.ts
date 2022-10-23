import styled from "@emotion/styled";
import theme from "../../../commons/styles/theme";

export const CardInner = styled.div`
  position: relative;
  box-shadow: 4px 4px 6px 0 rgb(0 0 0 / 10%);
  width: 19.1%;
  border-radius: 10px;
  margin-right: 0.9em;
  margin-bottom: 20px;
  :nth-of-type(5n) {
    margin-right: 0;
  }

  @media ${theme.device.tablet} {
    margin-right: 0;
    width: 33.2%;
    :nth-of-type(3n) {
      margin-right: 0;
    }
  }

  @media ${theme.device.mobile} {
    margin-right: 0;
    width: 47%;
    :nth-of-type(even) {
      margin-left: 5px;
    }
    :nth-of-type(odd) {
      margin-right: 5px;
    }
  }
`;

export const CardItem = styled.div`
  cursor: pointer;
  width: 100%;
`;

export const ImgBox = styled.div``;

export const Img = styled.img`
  width: 100%;
  max-height: 300px;
  border-radius: 10px 10px 0 0;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const PickBox = styled.div`
  position: absolute;
  right: 15px;
  top: 15px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PickImg = styled.img`
  width: 30px;
  cursor: pointer;

  @media ${theme.device.tablet} {
    width: 20px;
  }
`;

export const PickCount = styled.div`
  font-size: 12px;

  @media ${theme.device.tablet} {
    font-size: 10px;
  }
`;

export const ContentBox = styled.div`
  padding: 10px;
`;

export const TextBox = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const TextTitle = styled.p`
  margin: 0;
  ${theme.fontSizes.base};
  /* font-weight: bold; */
  color: #333;

  @media (max-width: 768px) {
    font-size: 14px;
    /* font-weight: 700; */
  }
`;

export const SubTextBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PriceBox = styled.div`
  padding-top: 10px;
  border-top: 1px solid rgb(238, 238, 238);
`;

export const Price = styled.p`
  margin: 0;
  font-weight: bold;
  ${theme.fontSizes.base};
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
