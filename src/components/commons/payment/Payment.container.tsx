import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useState } from "react";
import PaymentUI from "./Payment.presenter";
import { CREATE_POINT_TRANSACTION_OF_LOADING } from "./Payment.queries";
import { IPaymentProps } from "./Payment.types";

declare const window: typeof globalThis & {
  IMP: any;
};

export default function Payment(props: IPaymentProps) {
  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POINT_TRANSACTION_OF_LOADING
  );
  const [price, setPrice] = useState("100");

  const onChangePrice = (event: any) => {
    setPrice(event.target.value);
  };

  const requestPay = () => {
    const IMP = window.IMP;
    IMP.init("imp49910675");

    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011",
        name: "중고마켓 포인트 충전",
        amount: price,
        buyer_email: props.data?.fetchUserLoggedIn.email,
        buyer_name: props.data?.fetchUserLoggedIn.name,
        buyer_tel: "010-1234-5678",
        // buyer_addr: props.data?.fetchUseditem.useditemAddress.address,
        buyer_postcode: "00000",
        // m_redirect_url: "http://localhost:3000/28-01-payment",
      },
      async (rsp: any) => {
        if (rsp.success) {
          await createPointTransactionOfLoading({
            variables: {
              impUid: rsp.imp_uid,
            },
          });
          Modal.success({
            content: "결제가 완료되었습니다.",
            onOk() {
              props.refetch();
            },
          });
        } else {
          Modal.error({
            content: "결제에 실패했습니다. 잠시후에 다시 시도해주세요.",
          });
        }
      }
    );
  };

  return <PaymentUI onChangePrice={onChangePrice} requestPay={requestPay} />;
}
