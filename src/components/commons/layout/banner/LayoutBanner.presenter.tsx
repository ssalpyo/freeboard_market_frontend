import { SliderItem, Wrapper, StyledSlider, ArrowImage } from "./LayoutBanner.styles";
import styled from '@emotion/styled';

const Next = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 30px;
  z-index: 2;
  text-align: right;
  line-height: 30px;
`;
const Prev = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  left: 30px;
  z-index: 2;
  text-align: left;
  line-height: 30px;
`;

export default function LayoutBannerUI() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
		nextArrow: (
      <Next>
        <ArrowImage src="/images/next.png" alt="Next" />
      </Next>
    ),
    prevArrow: (
			<Prev>
				<ArrowImage src="/images/prev.png" alt="Prev" />
      </Prev>
    ),
  };

  return (
    <Wrapper>
      <StyledSlider {...settings}>
        <SliderItem src="/images/banner1.png" />

        <SliderItem src="/images/banner2.png" />

        <SliderItem src="/images/banner3.png" />

        <SliderItem src="/images/banner4.png" />
      </StyledSlider>
    </Wrapper>
  );
}
