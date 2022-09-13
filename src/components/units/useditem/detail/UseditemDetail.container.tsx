import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { NextRouter, useRouter } from "next/router";
import UseditemDetailUI from "./UseditemDetail.presenter";
import {
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
  DELETE_USEDITEM,
  FETCH_USEDITEM,
  FETCH_USER_LOGGED_IN,
  TOGGLE_USEDITEM_PICK,
} from "./UseditemDetail.queries";

export default function UseditemDetail() {
  const router: NextRouter = useRouter();
  const [deleteUseditem] = useMutation(DELETE_USEDITEM);
  const [toggleUseditemPick] = useMutation(TOGGLE_USEDITEM_PICK);
  const [createPointTransactionOfBuyingAndSelling] = useMutation(
    CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING
  );

  const { data, refetch } = useQuery(FETCH_USEDITEM, {
    variables: {
      useditemId: router.query.useditemId,
    },
  });

  const { data: userData } =
    useQuery<Pick<any, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

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

  const onClickUseditemPick = async () => {
    try {
      await toggleUseditemPick({
        variables: { useditemId: router.query.useditemId },
      });
      refetch();
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  const onClickBuyButton = async () => {
    try {
      await createPointTransactionOfBuyingAndSelling({
        variables: {
          useritemId: router.query.useditemId,
        },
      });
      Modal.success({
        content: "구매가 완료되었습니다.",
        onOk() {
          refetch();
        },
      });
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  const onClickUseditemDelete = () => {
    try {
      deleteUseditem({
        variables: { useditemId: router.query.useditemId },
      });
      Modal.success({
        content: "상품이 삭제되었습니다.",
        onOk() {
          router.push("/markets/");
        },
      });
    } catch (error: any) {
      Modal.error({
        title: "상품 삭제에 실패했습니다.",
        content: error.message,
      });
    }
  };

  const onClickUseditemEdit = () => {
    router.push(`/markets/${router.query.useditemId}/edit`);
  };

  return (
    <UseditemDetailUI
      data={data}
      settings={settings}
      onClickUseditemDelete={onClickUseditemDelete}
      onClickUseditemEdit={onClickUseditemEdit}
      userData={userData}
      onClickUseditemPick={onClickUseditemPick}
      onClickBuyButton={onClickBuyButton}
    />
  );
}
