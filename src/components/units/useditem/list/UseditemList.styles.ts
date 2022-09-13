import styled from "@emotion/styled";
import { HeartOutlined } from "@ant-design/icons";

export const Wrapper = styled.div`
  width: 1600px;
  background-color: #fff;
  border: none;
  box-shadow: 0px 0px 10px gray;
  padding: 50px;
  display: flex;
  flex-direction: row;
`;

export const WrapperLeftBox = styled.div`
  width: 70%;
  padding-left: 30px;
  padding-right: 80px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #999;
`;

export const WrapperRightBox = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  padding-left: 50px;
  padding-top: 70px;
`;

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Search = styled.input`
  width: 776px;
  height: 52px;
  background: #f2f2f2;
  border: none;
  border-radius: 10px;
  padding: 0px 15px;
  margin-bottom: 10px;
  outline-color: #000;
`;

export const ScrollBox = styled.div`
  height: 700px;
  overflow-y: auto;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
  margin-top: 20px;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 15px 0px;
  align-items: center;
  border-bottom: 1px solid gray;
`;

export const ListImage = styled.img`
  width: 150px;
  height: 150px;
`;

export const VisitedListImage = styled.img`
  width: 100px;
  height: 100px;
`;

export const ImageBox = styled.div`
  min-width: 150px;
  min-height: 150px;
  background-color: #999;
`;

export const ListBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 40px;
`;

export const Name = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  color: #000;
  width: 100%;
  cursor: pointer;

  :hover {
    color: blue;
  }
`;

export const Remarks = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #4f4f4f;
  padding-top: 4px;
  padding-bottom: 24px;
`;

export const SellerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ProfileImg = styled.img``;

export const Seller = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #4f4f4f;
  padding-left: 6px;
  padding-right: 22px;
`;

export const PickedIcon = styled(HeartOutlined)`
  font-size: 20px;
  color: #ffd600;
`;

export const PickedCount = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #4f4f4f;
  padding-left: 6px;
`;

export const Price = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  color: #000;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;
`;

export const Button = styled.button`
  width: 171px;
  height: 52px;
  background-color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;

  :hover {
    background-color: #000;
    color: #fff;
  }
`;
