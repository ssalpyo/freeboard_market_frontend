import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import theme from "../../../../commons/styles/theme";

export const Wrapper = styled.div``;

export const SliderItem = styled.img`
  margin: auto;
`;

export const StyledSlider = styled(Slider)`
  position: relative;
  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
`;

export const ArrowImage = styled.img`
  width: 30px;

  @media ${theme.device.mobile} {
    width: 20px;
  }
`;

export const Next = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 30px;
  z-index: 2;

  @media ${theme.device.mobile} {
    width: 20px;
    height: 20px;
    right: 20px;
  }
`;
export const Prev = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  left: 30px;
  z-index: 2;

  @media ${theme.device.mobile} {
    width: 20px;
    height: 20px;
    left: 20px;
  }
`;
