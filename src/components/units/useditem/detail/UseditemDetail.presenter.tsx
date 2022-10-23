import * as S from "./UseditemDetail.styles";
import { getDate } from "../../../../commons/libraries/utils";
import { IUseditemDetailUIProps } from "./UseditemDetail.types";
import DOMPurify from "dompurify";
import { v4 as uuidv4 } from "uuid";
import Slider from "react-slick";
import { Tooltip } from "antd";
import KakaoMapDetail from "../../../commons/kakao-map/detail";
import UseditemQuestion from "../../useditem-question/write/useditemQuestion.container";

export default function UseditemDetailUI(props: IUseditemDetailUIProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <S.Wrapper>
      <S.CardWrapper>
        <S.CardHeader>
          <S.ProfileImg src="/images/profile.svg"></S.ProfileImg>
          <S.InfoWrapper>
            <S.Seller>{props.data?.fetchUseditem.seller.name}</S.Seller>
            <S.CreatedAt>
              {getDate(props.data?.fetchUseditem.createdAt)}
            </S.CreatedAt>
          </S.InfoWrapper>
          <S.LocationWrapper>
            <S.LinkIcon />
            <Tooltip
              placement="topRight"
              title={`${
                props.data?.fetchUseditem.useditemAddress?.address || ""
              }
							${props.data?.fetchUseditem.useditemAddress?.addressDetail || ""}`}
            >
              <S.LocationIcon />
            </Tooltip>
          </S.LocationWrapper>
        </S.CardHeader>
        <S.CardBodyTop>
          <S.TopLeft>
            <S.Remarks>{props.data?.fetchUseditem.remarks}</S.Remarks>
            <S.Name>{props.data?.fetchUseditem.name}</S.Name>
          </S.TopLeft>
          <S.TopRight>
            <S.Price>
              {props.data?.fetchUseditem.price.toLocaleString()}원
            </S.Price>
            <S.PickedWrapper onClick={props.onClickUseditemPick}>
              {props.isActive ? (
                <S.PickImg src="/images/active-pick.png" />
              ) : (
                <S.PickImg src="/images/pick.png" />
              )}
              <S.PickedCount>
                {props.data?.fetchUseditem.pickedCount}
              </S.PickedCount>
            </S.PickedWrapper>
          </S.TopRight>
        </S.CardBodyTop>
        {props.data?.fetchUseditem.images[0] ? (
          <S.Carousel>
            <Slider {...settings}>
              {props.data?.fetchUseditem.images.map((el: string) => (
                <S.Image
                  key={uuidv4()}
                  src={`https://storage.googleapis.com/${el}`}
                />
              ))}
            </Slider>
          </S.Carousel>
        ) : (
          <></>
        )}
        {typeof window !== "undefined" ? (
          <S.Contents
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(
                String(props.data?.fetchUseditem.contents)
              ),
            }}
          />
        ) : (
          <S.Contents />
        )}
        <KakaoMapDetail
          lat={props.data?.fetchUseditem?.useditemAddress?.lat || 37.5273}
          lng={props.data?.fetchUseditem?.useditemAddress?.lng || 126.9329}
        />
        {props.data?.fetchUseditem.seller._id ===
        props.userData?.fetchUserLoggedIn._id ? (
          <S.CardBottom>
            <S.Button onClick={props.onClickUseditemEdit}>수정하기</S.Button>
            <S.Button onClick={props.onClickUseditemDelete}>삭제하기</S.Button>
          </S.CardBottom>
        ) : (
          <S.CardBottom>
            {props.data?.fetchUseditem.soldAt ? (
              <S.BuyButton disabled={true}>판매완료</S.BuyButton>
            ) : (
              <S.BuyButton onClick={props.onClickBuyButton}>
                구매하기
              </S.BuyButton>
            )}
          </S.CardBottom>
        )}
      </S.CardWrapper>
      <UseditemQuestion />
    </S.Wrapper>
  );
}
