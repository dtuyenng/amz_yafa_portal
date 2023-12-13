import React from "react";

interface Props {
  handleChange: (value: any) => void;
}

function SearchBar({ handleChange }: Props) {
  return (
    <div id="SearchBar">
      <input
        placeholder="Item#, Name, Desc, ASIN, SKU, UPC"
        onChange={handleChange}
      ></input>
    </div>
  );
}

export default SearchBar;
