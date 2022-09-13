import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 64px;
  background-color: #999;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: white;
`;

export const MenuItem = styled.div`
  margin: 0px 60px;
  /* color: #656565; */
  color: #fff;
  cursor: pointer;

  :hover {
    color: #000;
  }
`;
