import styled from "@emotion/styled";

export const UploadImage = styled.img`
  width: 78px;
  height: 78px;
  margin-right: 24px;
`;

export const UploadButton = styled.button`
  width: 78px;
  height: 78px;
  background-color: #bdbdbd;
  margin-right: 24px;
  outline: none;
  border: none;
  cursor: pointer;
  :hover {
    background-color: #000;
    color: #fff;
  }
`;

export const UploadFileHidden = styled.input`
  display: none;
`;
