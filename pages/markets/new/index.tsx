import { useAuth } from "../../../src/components/commons/hooks/useAuth";
import UseditemWrite from "../../../src/components/units/useditem/write/UseditemWrite.container";

export default function UseditemNewPage() {
  useAuth();
  return <UseditemWrite isEdit={false} />;
}
