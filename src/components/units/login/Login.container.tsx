import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import LoginUI from "./Login.presenter";
import { LOGIN_USER } from "./Login.queries";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IData } from "./Login.types";

const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식에 알맞지 않습니다.")
    .required("이메일은 필수 입력 사항입니다."),
  password: yup
    .string()
    // .matches(
    //   /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{0,8}$/,
    //   "비밀번호는 8자리 이내의 영문, 숫자, 특수문자를 포함해야 합니다."
    // )
    .required("비밀번호는 필수 입력 사항입니다."),
});

export default function Login() {
  const router = useRouter();

  const [loginUser] = useMutation(LOGIN_USER);
  const [, setAccessToken] = useRecoilState(accessTokenState);

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickLogin = async (data: IData) => {
    try {
      const result = await loginUser({
        variables: {
          email: data.email,
          password: data.password,
        },
      });
      setAccessToken(result.data?.loginUser.accessToken || "");
      // localStorage.setItem("accessToken", result.data?.loginUser.accessToken);
      Modal.success({
        content: "로그인 되었습니다.",
        onOk() {
          router.push("/");
        },
      });
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <LoginUI
      onClickLogin={onClickLogin}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
    />
  );
}
