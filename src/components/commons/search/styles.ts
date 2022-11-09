import styled from "@emotion/styled";
import theme from "../../../commons/styles/theme";

export const SearchBox = styled.div`
  width: 100%;
  max-width: 600px;
  position: relative;
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
