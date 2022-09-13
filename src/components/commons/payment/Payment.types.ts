export interface IPaymentProps {
  data: any;
  refetch: any;
}

export interface IPaymentUIProps {
  onChangePrice: (event: any) => void;
  requestPay: () => void;
}
