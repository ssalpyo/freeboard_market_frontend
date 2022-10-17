import { CF } from "../../../../commons/styles/commonComponentStyle";
import * as S from "./LayoutFooter.styles";

export default function LayoutFooterUI() {
  return (
    <S.Container>
      <S.Wrapper>
        <CF.ColumnDiv width="100%" gap={7} style={{ paddingLeft: "10%" }}>
          <S.Title>ssalpyo</S.Title>
          <S.CompanyText>㈜ssalpyo | 사업자 번호: 123-45-67890</S.CompanyText>
          <S.CompanyText>통신판매업신고번호 : 2022-서울-1111</S.CompanyText>
          <S.CompanyText>대표 : 홍성표</S.CompanyText>
          <S.CompanyText>서울특별시 영등포구 여의도동</S.CompanyText>
        </CF.ColumnDiv>
        <CF.ColumnDiv
          width="100%"
          style={{ paddingLeft: "10%", paddingRight: "10%" }}
        >
          <S.Title>고객센터</S.Title>
          <S.InfoText>이메일 : tjdvy6@gmail.com</S.InfoText>
          <S.InfoText>고객센터 : 010-9215-6673</S.InfoText>
          <S.InfoText>
            업무시간 : 평일 10:00 - 17:00 (점심: 12:00 - 13:00)
          </S.InfoText>
        </CF.ColumnDiv>
      </S.Wrapper>
    </S.Container>
  );
}
