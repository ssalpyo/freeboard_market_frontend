import Payment from "../../payment/Payment.container";
import * as S from "./LayoutSideBar.styles";
import { ILayoutSideBarUIProps } from "./LayoutSideBar.types";

export default function LayoutSideBarUI(props: ILayoutSideBarUIProps) {
  return (
    <S.Wrapper>
      <S.Title>MYPAGE</S.Title>
      <S.ProfileImg src="/images/profile-96px.png" />
      <S.Name>{props.data?.fetchUserLoggedIn.name}</S.Name>
      <S.PointBox>
        <S.DollarIcon />
        <S.Point>
          {props.data?.fetchUserLoggedIn.userPoint.amount.toLocaleString()}원
        </S.Point>
      </S.PointBox>
      {/* <S.PointChargeButton>충전하기</S.PointChargeButton> */}
      <Payment data={props.data} refetch={props.refetch} />
    </S.Wrapper>
  );
}
