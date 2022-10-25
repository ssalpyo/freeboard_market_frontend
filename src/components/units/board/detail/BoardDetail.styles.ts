import styled from "@emotion/styled";
import {
  LikeOutlined,
  DislikeOutlined,
  LinkOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import theme from "../../../../commons/styles/theme";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1600px;
  background-color: #fff;
  border: none;
  box-shadow: 0px 0px 10px gray;
  padding: 50px;
  display: flex;
  flex-direction: row;

  @media ${theme.device.tablet} {
    flex-direction: column;
    padding: 30px;
  }
`;

export const CardWrapper = styled.div`
  width: 70%;
  padding-right: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid #999;

  @media ${theme.device.tablet} {
    width: 100%;
    border: none;
    padding-right: 0px;
  }
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

export const WriterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 16.67px;
`;

export const Writer = styled.div`
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

export const CardBody = styled.div`
  padding-top: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 163px;
  align-items: center;
`;

export const Title = styled.h1`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 53px;
  color: #000;
  padding-bottom: 40px;
  align-self: flex-start;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 800px;
  aspect-ratio: 1;
`;

export const Contents = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #000;
  padding-top: 40px;
  padding-bottom: 50px;
  align-self: flex-start;
`;

export const CardFooter = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LikeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 29.5px;
`;

export const LikeIcon = styled(LikeOutlined)`
  font-size: 24px;
  color: #ffd600;
  cursor: pointer;
`;

export const LikeCount = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  color: #ffd600;
  padding-top: 4px;
`;

export const DislikeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 29.5px;
`;

export const DislikeIcon = styled(DislikeOutlined)`
  font-size: 24px;
  color: #828282;
  cursor: pointer;
`;

export const DislikeCount = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  color: #828282;
  padding-top: 4px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 80px 0px;
`;

export const Button = styled.button`
  width: 100px;
  height: 45px;
  background-color: #fff;
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
    background-color: #000;
    color: #fff;
    border-color: #000;
  }
`;
