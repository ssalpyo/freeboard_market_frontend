import * as S from "./styles";

interface SearchInputProps {
  placeholder: string;
  onChange?: any;
}

export default function SearchInput(props: SearchInputProps) {
  return (
    <S.SearchBox>
      <S.SearchInput
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
      <S.SearchImg src="/images/search.svg" alt="searchImg" />
    </S.SearchBox>
  );
}
