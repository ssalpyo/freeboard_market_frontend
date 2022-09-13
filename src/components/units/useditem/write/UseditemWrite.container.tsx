import UseditemWriteUI from "./UseditemWrite.presenter";
import {
  IData,
  IupdateUseditemInput,
  IUseditemWriteProps,
} from "./UseditemWrite.types";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { CREATE_USEDITEM, UPDATE_USEDITEM } from "./useditemWrite.queries";
import { Modal } from "antd";
import { useEffect, useState } from "react";

const schema = yup.object({
  name: yup.string().required("작성자는 필수 입력 사항입니다."),
  remarks: yup.string().required("한줄 요약은 필수 입력 사항입니다."),
  contents: yup.string().required("상품 설명은 필수 입력 사항입니다."),
  price: yup.number().required("가격은 필수 입력 사항입니다."),
});

export default function UseditemWrite(props: IUseditemWriteProps) {
  const router = useRouter();

  const [createUseditem] = useMutation(CREATE_USEDITEM);
  const [updateUseditem] = useMutation(UPDATE_USEDITEM);

  const [fileUrls, setFileUrls] = useState<string[]>([]);

  const { register, handleSubmit, formState, setValue, trigger } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  useEffect(() => {
    setFileUrls(props.useditemData?.fetchUseditem?.images || []);
    onChangeContents(props.useditemData?.fetchUseditem?.contents);
  }, [props.useditemData]);

  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };

  const onChangeLocation = (lat: number, lng: number, address: string) => {
    setValue("lat", lat);
    setValue("lng", lng);
    setValue("address", address);
    trigger("lat");
    trigger("lng");
    trigger("address");
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
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            price: data.price,
            contents: data.contents,
            images: fileUrls,
            useditemAddress: {
              lat: data.lat,
              lng: data.lng,
              address: data.address,
              addressDetail: data.addressDetail,
            },
          },
        },
      });
      Modal.success({
        content: "상품이 등록되었습니다.",
        onOk() {
          router.push(`/markets/${result.data.createUseditem._id}`);
        },
      });
    } catch (error: any) {
      Modal.error({
        title: "상품 등록에 실패했습니다.",
        content: error.message,
      });
    }
  };

  const onClickEdit = async (data: IData) => {
    // if (
    //   !data.name &&
    //   !data.price &&
    //   !data.remarks &&
    //   !data.contents &&
    //   !fileUrls
    // ) {
    //   Modal.warning({
    //     content: "수정한 내용이 없습니다.",
    //   });
    //   // return;
    // }
    try {
      const updateUseditemInput: IupdateUseditemInput = {};

      if (data.name) updateUseditemInput.name = data.name;
      if (data.price) updateUseditemInput.price = data.price;
      if (data.remarks) updateUseditemInput.remarks = data.remarks;
      if (data.contents) updateUseditemInput.contents = data.contents;
      if (fileUrls) updateUseditemInput.images = fileUrls;
      if (data.lat || data.lng || data.address || data.addressDetail) {
        updateUseditemInput.useditemAddress = {};
        if (data.lat) updateUseditemInput.useditemAddress.lat = data.lat;
        if (data.lng) updateUseditemInput.useditemAddress.lng = data.lng;
        if (data.address)
          updateUseditemInput.useditemAddress.address = data.address;
        if (data.addressDetail)
          updateUseditemInput.useditemAddress.addressDetail =
            data.addressDetail;
      }
      const result = await updateUseditem({
        variables: {
          updateUseditemInput,
          useditemId: router.query.useditemId,
        },
      });
      Modal.success({
        content: "상품이 수정되었습니다.",
        onOk() {
          router.push(`/markets/${result.data.updateUseditem._id}`);
        },
      });
    } catch (error: any) {
      Modal.error({
        title: "상품 수정에 실패했습니다.",
        content: error.message,
      });
    }
  };

  return (
    <UseditemWriteUI
      onClickSubmit={onClickSubmit}
      onClickEdit={onClickEdit}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onChangeFiles={onChangeFiles}
      fileUrls={fileUrls}
      onChangeContents={onChangeContents}
      isEdit={props.isEdit}
      useditemData={props.useditemData}
      onChangeLocation={onChangeLocation}
    />
  );
}
