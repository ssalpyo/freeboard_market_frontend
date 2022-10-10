import {
  SliderItem,
  Wrapper,
  StyledSlider,
  ArrowImage,
  Next,
  Prev,
} from "./LayoutBanner.styles";

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
