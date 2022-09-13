import Head from "next/head";
import { IPaymentUIProps } from "./Payment.types";
import * as S from "./Payment.styles";

export default function PaymentUI(props: IPaymentUIProps) {
  return (
    <div>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        />
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        />
      </Head>
      <select name="price" onChange={props.onChangePrice}>
        <option value="100">100원</option>
        <option value="5000">5,000원</option>
        <option value="10000">10,000원</option>
        <option value="200000">200,000원</option>
      </select>
      <S.Button onClick={props.requestPay}>충전하기</S.Button>
    </div>
  );
}
