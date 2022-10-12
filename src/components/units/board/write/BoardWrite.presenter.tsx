import * as S from "./BoardWrite.styles";
import { IBoardWriteUIProps } from "./BoardWrite.types";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";
import Uploads01 from "../../../commons/uploads/01/Uploads01.container";
import { v4 as uuidv4 } from "uuid";
import WriteInput from "../../../commons/inputs/write";

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  return (
    <S.Wrapper
      onSubmit={props.handleSubmit(
        props.isEdit ? props.onClickEdit : props.onClickSubmit
      )}
    >
      <S.WrapperLeftBox>
        <S.Title>{props.isEdit ? "게시글 수정" : "게시글 등록"}</S.Title>
        <S.WriterWrapper>
          <S.InputWrapper>
            <S.Label>작성자</S.Label>
            <WriteInput
              type="text"
              placeholder="이름을 작성해주세요."
              disabled={props.isEdit}
              defaultValue={props.boardData?.fetchBoard.writer}
              register={props.register("writer")}
            />
            <S.Error>{props.formState.errors.writer?.message}</S.Error>
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>비밀번호</S.Label>
            <WriteInput
              type="password"
              placeholder="비밀번호를 작성해주세요."
              register={props.register("password")}
            />
            <S.Error>{props.formState.errors.password?.message}</S.Error>
          </S.InputWrapper>
        </S.WriterWrapper>
        <S.InputWrapper>
          <S.Label>제목</S.Label>
          <WriteInput
            type="text"
            placeholder="제목을 작성해주세요."
            defaultValue={props.boardData?.fetchBoard.title}
            register={props.register("title")}
          />
          <S.Error>{props.formState.errors.title?.message}</S.Error>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>내용</S.Label>
          <S.Contents
            placeholder="내용을 작성해주세요."
            defaultValue={props.boardData?.fetchBoard.contents}
            onChange={props.onChangeContents}
          />
          <S.Error>{props.formState.errors.contents?.message}</S.Error>
        </S.InputWrapper>
      </S.WrapperLeftBox>
      <S.WrapperRightBox>
        <S.InputWrapper>
          <S.Label>주소</S.Label>
          <S.ZipcodeWrapper>
            <S.Zipcode
              placeholder="07250"
              readOnly
              defaultValue={
                props.zipcode ||
                props.boardData?.fetchBoard.boardAddress?.zipcode
              }
            />
            <S.SearchButton onClick={props.onToggleAddressModal}>
              우편번호 검색
            </S.SearchButton>
            {props.addressModalVisible && (
              <Modal
                visible={true}
                onOk={props.onToggleAddressModal}
                onCancel={props.onToggleAddressModal}
              >
                <DaumPostcode onComplete={props.onCompleteAddress} />
              </Modal>
            )}
          </S.ZipcodeWrapper>
          <S.Address
            readOnly
            defaultValue={
              props.address || props.boardData?.fetchBoard.boardAddress?.address
            }
          />
          <S.Address
            onChange={props.onChangeAddressDetail}
            defaultValue={
              props.boardData?.fetchBoard.boardAddress?.addressDetail
            }
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>유튜브</S.Label>
          <WriteInput
            type="text"
            placeholder="링크를 복사해주세요."
            defaultValue={props.boardData?.fetchBoard.youtubeUrl}
            register={props.register("youtubeUrl")}
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
        <S.OptionWrapper>
          <S.Label>메인설정</S.Label>
          <S.RadioButton type="radio" id="youtube" name="radio-button" />
          <S.RadioLabel htmlFor="youtube">유튜브</S.RadioLabel>
          <S.RadioButton type="radio" id="image" name="radio-button" />
          <S.RadioLabel htmlFor="image">사진</S.RadioLabel>
        </S.OptionWrapper>
        <S.ButtonWrapper>
          <S.SubmitButton disabled={!props.formState.isValid}>
            {props.isEdit ? "수정하기" : "등록하기"}
          </S.SubmitButton>
        </S.ButtonWrapper>
      </S.WrapperRightBox>
    </S.Wrapper>
  );
}
