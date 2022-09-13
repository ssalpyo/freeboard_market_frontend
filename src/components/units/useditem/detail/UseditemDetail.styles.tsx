import styled from "@emotion/styled";
import {
  LinkOutlined,
  EnvironmentOutlined,
  HeartOutlined,
} from "@ant-design/icons";

export const Wrapper = styled.div`
  width: 1600px;
  background-color: #fff;
  border: none;
  box-shadow: 0px 0px 10px gray;
  padding: 50px;
  display: flex;
  flex-direction: row;
`;

export const CardWrapper = styled.div`
  width: 70%;
  padding-left: 30px;
  padding-right: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid #999;
`;

export const CardHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid #bdbdbd;
`;

export const ProfileImg = styled.img`
  /* width: 46.67px;
  height: 46.67px; */
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 16.67px;
`;

export const Seller = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  color: #000;
`;

export const CreatedAt = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #828282;
`;

export const LocationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LinkIcon = styled(LinkOutlined)`
  margin-right: 20px;
  color: #828282;
  font-size: 30px;
  cursor: pointer;

  :hover {
    color: #ffd600;
  }
`;

export const LocationIcon = styled(EnvironmentOutlined)`
  color: #828282;
  font-size: 30px;
  cursor: pointer;

  :hover {
    color: #ffd600;
  }
`;

export const CardBodyTop = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;
`;

export const TopLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Remarks = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #bdbdbd;
`;

export const Name = styled.h1`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  color: #4f4f4f;
  padding-top: 4px;
`;

export const TopRight = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Price = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 53px;
  color: #000;
  padding-right: 80px;
`;

export const PickedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 10px;
`;

export const PickedIcon = styled(HeartOutlined)`
  font-size: 30px;
  color: #ffd600;
`;

export const PickedCount = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #000;
  padding-top: 4px;
`;

export const Carousel = styled.div`
  width: 400px;
  height: 400px;
`;

export const Image = styled.img`
  /* max-width: 854px;
  max-height: 480px; */
`;

export const Contents = styled.div`
  width: 100%;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #4f4f4f;
  padding: 80px 0px;
`;

export const CardBottom = styled.div`
  width: 100%;
  border-top: 1px solid #bdbdbd;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 50px;
`;

export const Button = styled.button`
  width: 100px;
  height: 45px;
  background-color: white;
  border: 1px solid #999;
  margin: 0px 12px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #000;
  cursor: pointer;

  :hover {
    background-color: #ffd600;
    border-color: #fff;
  }
`;

export const BuyButton = styled.button`
  width: 200px;
  height: 45px;
  background-color: white;
  border: 1px solid #999;
  margin: 0px 12px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #000;
  cursor: pointer;

  :hover {
    background-color: #ffd600;
    border-color: #fff;
  }
`;
