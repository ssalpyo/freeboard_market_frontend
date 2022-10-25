import * as S from "./BoardDetail.styles";
import { getDate } from "../../../../commons/libraries/utils";
import { IBoardDetailUIProps } from "./BoardDetail.types";
import ReactPlayer from "react-player";
import { Tooltip } from "antd";
import BoardComment from "../../board-comment/write/BoardComment.container";
import { v4 as uuidv4 } from "uuid";
import DOMPurify from "dompurify";

export default function BoardDetailUI(props: IBoardDetailUIProps) {
  return (
    <S.Wrapper>
      <S.CardWrapper>
        <S.CardHeader>
          <S.ProfileImg src="/images/profile.svg"></S.ProfileImg>
          <S.WriterWrapper>
            <S.Writer>{props.data?.fetchBoard.writer}</S.Writer>
            <S.CreatedAt>
              Date : {getDate(props.data?.fetchBoard.createdAt)}
            </S.CreatedAt>
          </S.WriterWrapper>
          <S.LocationWrapper>
            <Tooltip title={props.data?.fetchBoard.youtubeUrl}>
              <S.LinkIcon />
            </Tooltip>
            <Tooltip title={props.data?.fetchBoard.boardAddress?.address}>
              <S.LocationIcon />
            </Tooltip>
          </S.LocationWrapper>
        </S.CardHeader>
        <S.CardBody>
          <S.Title>{props.data?.fetchBoard.title}</S.Title>
          {props.data?.fetchBoard.images.map((_: any, index: number) => (
            <S.Image
              key={uuidv4()}
              src={`https://storage.googleapis.com/${props.data?.fetchBoard.images[index]}`}
            />
          ))}
          {typeof window !== "undefined" ? (
            <S.Contents
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  String(props.data?.fetchBoard.contents)
                ),
              }}
            />
          ) : (
            <S.Contents />
          )}
          {props.data?.fetchBoard.youtubeUrl && (
            <ReactPlayer width="100%" url={props.data?.fetchBoard.youtubeUrl} />
          )}
        </S.CardBody>
        <S.CardFooter>
          <S.LikeWrapper>
            <S.LikeIcon onClick={props.onClickLike}></S.LikeIcon>
            <S.LikeCount>
              {props.likeCount || props.data?.fetchBoard.likeCount}
            </S.LikeCount>
          </S.LikeWrapper>
          <S.DislikeWrapper>
            <S.DislikeIcon onClick={props.onClickDislike}></S.DislikeIcon>
            <S.DislikeCount>
              {props.dislikeCount || props.data?.fetchBoard.dislikeCount}
            </S.DislikeCount>
          </S.DislikeWrapper>
        </S.CardFooter>
        <S.ButtonWrapper>
          <S.Button onClick={props.onClickBoardEdit}>수정하기</S.Button>
          <S.Button onClick={props.onClickBoardDelete}>삭제하기</S.Button>
        </S.ButtonWrapper>
      </S.CardWrapper>
      <BoardComment />
    </S.Wrapper>
  );
}
