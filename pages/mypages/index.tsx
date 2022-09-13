import { useAuth } from "../../src/components/commons/hooks/useAuth";
import MyPage from "../../src/components/units/mypage/mypage.container";

export default function myPagePage() {
  useAuth();
  return <MyPage />;
}
