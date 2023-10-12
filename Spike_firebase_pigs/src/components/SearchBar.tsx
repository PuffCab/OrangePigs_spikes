import React, { ChangeEvent } from "react";

interface SearchBarProps {
  inputChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

function SearchBar({ inputChangeHandler }: SearchBarProps) {
  return <input type="text" onChange={inputChangeHandler} />;
}

export default SearchBar;
