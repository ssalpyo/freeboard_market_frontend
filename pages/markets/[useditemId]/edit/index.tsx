import { gql, useQuery } from "@apollo/client";
import { NextRouter, useRouter } from "next/router";
import UseditemWrite from "../../../../src/components/units/useditem/write/UseditemWrite.container";

export const FETCH_USEDITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      images
      createdAt
      pickedCount
      seller {
        name
      }
      useditemAddress {
        lat
        lng
        address
        addressDetail
      }
    }
  }
`;

export default function BoardsNewPage() {
  const router: NextRouter = useRouter();

  const { data, loading } = useQuery(FETCH_USEDITEM, {
    variables: {
      useditemId: router.query.useditemId,
    },
  });
  return loading ? <></> : <UseditemWrite isEdit={true} useditemData={data} />;
}
