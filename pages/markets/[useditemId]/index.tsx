import { useAuth } from "../../../src/components/commons/hooks/useAuth";
import UseditemDetail from "../../../src/components/units/useditem/detail/UseditemDetail.container";

export default function UseditemDetailPage() {
  useAuth();
  return <UseditemDetail />;
}
