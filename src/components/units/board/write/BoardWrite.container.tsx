import { ChangeEvent, useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { NextRouter, useRouter } from "next/router";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { IBoardWriteProps, IData, IupdateBoardInput } from "./BoardWrite.types";
import { Modal } from "antd";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

const schema = yup.object({
  writer: yup.string().required("작성자는 필수 입력 사항입니다."),
  password: yup.string().required("비밀번호는 필수 입력 사항입니다."),
  title: yup.string().required("제목은 필수 입력 사항입니다."),
  contents: yup.string().required("내용은 필수 입력 사항입니다."),
  youtubeUrl: yup.string(),
});

export default function BoardWrite(props: IBoardWriteProps) {
  const router: NextRouter = useRouter();

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");

  const [fileUrls, setFileUrls] = useState<string[]>([]);

  const [addressModalVisible, setAddressModalVisible] = useState(false);

  useEffect(() => {
    setFileUrls(props.boardData?.fetchBoard?.images || []);
  }, [props.boardData]);

  const { register, handleSubmit, formState, setValue, trigger } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };

  const onToggleAddressModal = () => {
    setAddressModalVisible((prev: boolean) => !prev);
  };
  const onCompleteAddress = (data: any) => {
    setZipcode(data.zonecode);
    setAddress(data.address);
    onToggleAddressModal();
  };
  const onChangeAddressDetail = (event: ChangeEvent<HTMLInputElement>) => {
    setAddressDetail(event.target.value);
  };
  const onChangeFiles = (index: number, url: string) => {
    const newFileUrls = [...fileUrls];

    if (fileUrls[index]) {
      newFileUrls[index] = url;
    } else {
      newFileUrls.push(url);
    }
    setFileUrls([...newFileUrls]);
  };

  const onClickSubmit = async (data: IData) => {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: data.writer,
            password: data.password,
            title: data.title,
            contents: data.contents,
            youtubeUrl: data.youtubeUrl,
            boardAddress: {
              zipcode,
              address,
              addressDetail,
            },
            images: fileUrls,
          },
        },
      });
      Modal.success({
        content: "게시글이 등록되었습니다.",
        onOk() {
          router.push(`/boards/${result.data.createBoard._id}`);
        },
      });
    } catch (error: any) {
      Modal.error({
        title: "게시글 등록에 실패했습니다.",
        content: error.message,
      });
    }
  };

  const onClickEdit = async (data: IData) => {
    try {
      const updateBoardInput: IupdateBoardInput = {};

      if (data.title) updateBoardInput.title = data.title;
      if (data.contents) updateBoardInput.contents = data.contents;
      if (data.youtubeUrl) updateBoardInput.youtubeUrl = data.youtubeUrl;
      if (fileUrls) updateBoardInput.images = fileUrls;
      if (zipcode || address || addressDetail) {
        updateBoardInput.boardAddress = {};
        if (zipcode) updateBoardInput.boardAddress.zipcode = zipcode;
        if (address) updateBoardInput.boardAddress.address = address;
        if (addressDetail)
          updateBoardInput.boardAddress.addressDetail = addressDetail;
      }
      const result = await updateBoard({
        variables: {
          updateBoardInput,
          password: data.password,
          boardId: router.query.boardId,
        },
      });
      Modal.success({
        content: "게시글이 수정되었습니다.",
        onOk() {
          router.push(`/boards/${result.data.updateBoard._id}`);
        },
      });
    } catch (error: any) {
      Modal.error({
        title: "게시글 수정에 실패했습니다.",
        content: error.message,
      });
    }
  };

  return (
    <BoardWriteUI
      onChangeContents={onChangeContents}
      onClickSubmit={onClickSubmit}
      onClickEdit={onClickEdit}
      isEdit={props.isEdit}
      boardData={props.boardData}
      addressModalVisible={addressModalVisible}
      onToggleAddressModal={onToggleAddressModal}
      onCompleteAddress={onCompleteAddress}
      zipcode={zipcode}
      address={address}
      onChangeAddressDetail={onChangeAddressDetail}
      onChangeFiles={onChangeFiles}
      fileUrls={fileUrls}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
    />
  );
}
