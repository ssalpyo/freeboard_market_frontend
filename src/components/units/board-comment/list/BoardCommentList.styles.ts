import styled from "@emotion/styled";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

export const Body = styled.div`
  height: 700px;
  overflow-y: auto;
`;

export const Wrapper = styled.div``;

export const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px 0px 10px 0px;
  border-bottom: 1px solid #bdbdbd;
`;

export const CommentInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const ProfileImg = styled.img`
  /* width: 40px;
  height: 40px; */
`;

export const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 16px;
  width: 100%;
`;

export const CommentInfoHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const WriterRatingBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

export const CommentWriter = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #000;
  padding-right: 30px;
`;

export const CommentCreatedAt = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #bdbdbd;
  padding-left: 16px;
`;

export const CommentEditDelBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 48px;
`;

export const CommentEditIcon = styled(EditOutlined)`
  font-size: 20px;
  color: #828282;
  cursor: pointer;

  :hover {
    color: #ffd600;
  }
`;

export const CommentDeleteIcon = styled(DeleteOutlined)`
  font-size: 20px;
  color: #828282;
  cursor: pointer;

  :hover {
    color: #ffd600;
  }
`;

export const CommentContents = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #4f4f4f;
  padding-top: 8px;
`;

export const CommentInfoFooter = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 10px;
`;
