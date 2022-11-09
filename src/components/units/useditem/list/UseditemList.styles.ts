import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 0px 10px gray;
  padding: 50px;
`;

export const HeaderBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding-bottom: 30px;
`;

export const ScrollBox = styled.div`
  height: 700px;
  overflow-y: auto;
`;

export const ListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  width: 100%;
  max-width: 140px;
  padding: 11px 5px;
  border: 1px solid #000;
  border-radius: 5px;
  :hover {
    background-color: #000;
    color: #fff;
  }
`;
