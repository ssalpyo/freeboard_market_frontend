import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export const Wrapper = styled.div`
`;

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
	width: 40px;
`