import { useAuth } from "../../src/components/commons/hooks/useAuth";
import MyPage from "../../src/components/units/mypage/MyPage.container";

export default function myPagePage() {
  useAuth();
  return <MyPage />;
}
