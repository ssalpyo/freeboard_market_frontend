import Uploads01 from "../../../commons/uploads/01/Uploads01.container";
import * as S from "./UseditemWrite.styles";
import { IUseditemWriteUIProps } from "./UseditemWrite.types";
import { v4 as uuidv4 } from "uuid";
import KakaoMapWrite from "../../../commons/kakao-map/write";
import WriteInput from "../../../commons/inputs/write";

export default function UseditemWriteUI(props: IUseditemWriteUIProps) {
  return (
    <S.Wrapper
      onSubmit={props.handleSubmit(
        props.isEdit ? props.onClickEdit : props.onClickSubmit
      )}
    >
      <S.WrapperLeftBox>
        <S.Title>{props.isEdit ? "상품 수정" : "상품 등록"}</S.Title>
        <S.ProductWrapper>
          <S.InputWrapper>
            <S.Label>상품명</S.Label>
            <WriteInput
              type="text"
              placeholder="상품명을 작성해주세요."
              defaultValue={props.useditemData?.fetchUseditem.name}
              register={props.register("name")}
            />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>판매 가격</S.Label>
            <WriteInput
              type="text"
              placeholder="판매 가격을 입력해주세요."
              defaultValue={props.useditemData?.fetchUseditem.price}
              register={props.register("price")}
            />
          </S.InputWrapper>
        </S.ProductWrapper>
        <S.InputWrapper>
          <S.Label>한줄 요약</S.Label>
          <WriteInput
            type="text"
            placeholder="한줄 요약을 작성해주세요."
            defaultValue={props.useditemData?.fetchUseditem.remarks}
            register={props.register("remarks")}
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>상품 설명</S.Label>
          <S.Contents
            placeholder="상품을 설명해주세요."
            defaultValue={props.useditemData?.fetchUseditem.contents}
            onChange={props.onChangeContents}
          />
        </S.InputWrapper>
      </S.WrapperLeftBox>
      <S.WrapperRightBox>
        <S.InputWrapper>
          <S.Label>거래위치</S.Label>
          <KakaoMapWrite
            onChangeLocation={props.onChangeLocation}
            lat={
              props.useditemData?.fetchUseditem.useditemAddress.lat || 37.5273
            }
            lng={
              props.useditemData?.fetchUseditem.useditemAddress.lng || 126.9329
            }
          />
          <S.Address
            readOnly
            defaultValue={
              props.useditemData?.fetchUseditem.useditemAddress.address
            }
            {...props.register("address")}
          />
          <S.Address
            defaultValue={
              props.useditemData?.fetchUseditem.useditemAddress.addressDetail
            }
            {...props.register("addressDetail")}
          />
        </S.InputWrapper>
        <S.ImageWrapper>
          <S.Label>사진첨부</S.Label>
          {new Array(3).fill(1).map((_, index) => (
            <Uploads01
              key={uuidv4()}
              index={index}
              onChangeFiles={props.onChangeFiles}
              fileUrls={props.fileUrls}
            />
          ))}
        </S.ImageWrapper>
        <S.ButtonWrapper>
          <S.SubmitButton disabled={!props.formState.isValid}>
            {props.isEdit ? "수정하기" : "등록하기"}
          </S.SubmitButton>
        </S.ButtonWrapper>
      </S.WrapperRightBox>
    </S.Wrapper>
  );
}
