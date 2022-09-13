import { useQuery } from "@apollo/client";
import LayoutSideBarUI from "./LayoutSideBar.presenter";
import { FETCH_USER_LOGGED_IN } from "./LayoutSideBar.queries";

export default function LayoutSideBar() {
  const { data, refetch } =
    useQuery<Pick<any, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  return <LayoutSideBarUI data={data} refetch={refetch} />;
}
