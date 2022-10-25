import styled from "@emotion/styled";
import theme from "../../../../commons/styles/theme";

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
  padding-bottom: 30px;
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
