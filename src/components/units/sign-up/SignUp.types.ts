export interface IData {
  email: string;
  name: string;
  password: string;
  passwordCheck: string;
}

export interface ISignUpUIProps {
  register: any;
  handleSubmit: any;
  formState: any;
  onClickSignUp: (data: IData) => void;
	onClickCancel: () => void;
}
