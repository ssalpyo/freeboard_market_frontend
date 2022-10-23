import styled from "@emotion/styled";
import theme from "../../../../commons/styles/theme";
import { Iprops } from "./BoardList.types";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1600px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border: none;
  box-shadow: 0px 0px 10px gray;
  padding: 50px;
`;

export const SearchBox = styled.div`
  width: 100%;
  max-width: 600px;
  position: relative;

  @media ${theme.device.tablet} {
    width: 100%;
    padding: 0;
    padding-left: 15px;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  background: #f2f2f2;
  border: none;
  border-radius: 10px;
  padding: 12px 43px;
  outline-color: #000;
  ::placeholder {
    ${theme.fontSizes.base};
    line-height: 22px;
    font-weight: 400;
    color: #999;
    transition: all 0.3s ease-in-out;
  }
  :focus::placeholder {
    color: transparent;
  }
`;

export const SearchImg = styled.img`
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
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
  padding-top: 20px;
`;

export const Button = styled.button`
  width: 100%;
  max-width: 160px;
  padding: 14px 5px;
  border: 1px solid black;
  border-radius: 10px;
  :hover {
    background-color: #000;
    color: #fff;
  }
`;

export const Word = styled.span`
  color: ${(props: Iprops) => (props.isMatched ? "red" : "black")};
`;
