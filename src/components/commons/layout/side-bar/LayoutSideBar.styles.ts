import { DollarCircleOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border: none;
  box-shadow: 0px 0px 10px gray;
  padding: 30px 75px;
`;

export const Title = styled.h1`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  color: #000;
  padding-bottom: 20px;
`;

export const ProfileImg = styled.img``;

export const Name = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  color: #000;
  padding-top: 20px;
  padding-bottom: 10px;
`;

export const PointBox = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 15px;
`;

export const DollarIcon = styled(DollarCircleOutlined)`
  color: #ffd600;
  font-size: 20px;
`;

export const Point = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #4f4f4f;
  padding-left: 8px;
`;

export const PointChargeButton = styled.button`
  width: 100px;
  height: 35px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-size: 14px;
  line-height: 24px;
  color: #4f4f4f;
  background-color: #fff;
  border: 1px solid #999;
  cursor: pointer;

  :hover {
    background-color: #ffd600;
  }
`;
