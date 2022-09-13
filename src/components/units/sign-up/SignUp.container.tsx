import { useMutation } from "@apollo/client";
import SignUpUI from "./SignUp.presenter";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CREATE_USER } from "./SignUp.queries";
import { IData } from "./SignUp.types";

const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식에 알맞지 않습니다.")
    .required("이메일은 필수 입력 사항입니다."),
  name: yup.string().required("이름은 필수 입력 사항입니다."),
  password: yup
    .string()
    // .matches(
    //   /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{0,8}$/,
    //   "비밀번호는 8자리 이내의 영문, 숫자, 특수문자를 포함해야 합니다."
    // )
    .required("비밀번호는 필수 입력 사항입니다."),
  passwordCheck: yup
    .string()
    .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다.")
    .required("비밀번호는 필수 입력 사항입니다."),
});

export default function SignUp() {
  const router = useRouter();
  const [createUser] = useMutation(CREATE_USER);

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSignUp = async (data: IData) => {
    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            email: data.email,
            name: data.name,
            password: data.password,
          },
        },
      });
      Modal.success({
        content: `${result.data?.createUser.name}님 회원가입을 축하합니다.`,
        onOk() {
          router.push("/login");
        },
      });
    } catch (error: any) {
      Modal.error({
        content: error.message,
      });
    }
  };

  return (
    <SignUpUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickSignUp={onClickSignUp}
    />
  );
}
