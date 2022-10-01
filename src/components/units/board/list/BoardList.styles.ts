import styled from "@emotion/styled";
import { Iprops } from "./BoardList.types";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border: none;
  box-shadow: 0px 0px 10px gray;
  padding: 50px;
`;

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Search = styled.input`
  width: 800px;
  height: 50px;
  background: #f2f2f2;
  border: none;
  border-radius: 10px;
  padding: 0px 15px;
  margin-bottom: 10px;
  outline-color: #000;
`;

export const TableTop = styled.div`
  border-top: 2px solid gray;
  margin-top: 20px;
`;

export const TableBottom = styled.div`
  border-bottom: 2px solid gray;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid gray;

  :hover {
    color: blue;
  }
`;

export const ColumnHeaderBasic = styled.div`
  width: 10%;
  text-align: center;
`;

export const ColumnHeaderTitle = styled.div`
  width: 70%;
  text-align: center;
`;

export const ColumnBasic = styled.div`
  width: 10%;
  text-align: center;
`;

export const ColumnTitle = styled.div`
  width: 70%;
  text-align: center;
  cursor: pointer;

  :hover {
    color: blue;
  }
  :hover span {
    color: blue;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;
`;

export const PencilIcon = styled.img``;

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

export const Word = styled.span`
  color: ${(props: Iprops) => (props.isMatched ? "red" : "black")};
`;
