export interface IBoardDetailUIProps {
  data: {
    fetchBoard: {
      writer: string;
      title: string;
      contents: string;
      likeCount: number;
      dislikeCount: number;
      createdAt: string;
      youtubeUrl: string;
      boardAddress: {
        zipcode: string;
        address: string;
        addressDetail: string;
      };
      images: [string];
    };
  };
  likeCount: number;
  dislikeCount: number;
  onClickLike: () => void;
  onClickDislike: () => void;
  onClickBoardEdit: () => void;
  onClickBoardDelete: () => void;
}
