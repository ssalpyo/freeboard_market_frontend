import { SliderItem, Wrapper } from "./LayoutBanner.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LayoutBannerUI() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Wrapper>
      <Slider {...settings}>
        <SliderItem src="/images/banner1.png" />

        <SliderItem src="/images/banner2.png" />

        <SliderItem src="/images/banner3.png" />

        <SliderItem src="/images/banner4.png" />
      </Slider>
    </Wrapper>
  );
}
