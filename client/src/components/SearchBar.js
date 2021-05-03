import React from "react";
import styled from "styled-components";
import Palette from "../lib/styles/Palette";
import { BsSearch } from "react-icons/bs";

const SearchBarBlock = styled.div`
  width: 100%;
  border-top: 1px solid ${Palette.gray[2]};
`;

const SearchForm = styled.form`
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  width: 525px;
  border: 1px solid ${Palette.gray[9]};
  input,
  button {
    outline: none;
    border: none;
    font-size: 1rem;
  }

  input {
    padding: 0.5rem;
    flex: 1;
    min-width: 0;
  }

  button {
    cursor: pointer;
    padding-right: 1rem;
    padding-left: 1rem;
    border: none;
    background: ${Palette.gray[8]};
    color: white;
    font-weight: bold;
    &:hover {
      background: ${Palette.gray[6]};
    }
  }
`;

const SearchBar = () => {
  return (
    <SearchBarBlock>
      <SearchForm>
        <input placeholder="검색어를 입력하세요" />
        <button type="submit">
          <BsSearch />
        </button>
      </SearchForm>
    </SearchBarBlock>
  );
};

export default SearchBar;
