interface Props {
  handleChange: (value: any) => void;
  handleClick: () => void;
  handleClear: () => void;
  searchInput: string;
}

function SearchBar({
  handleChange,
  handleClick,
  handleClear,
  searchInput,
}: Props) {
  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };
  return (
    <div id="SearchBar">
      <input
        placeholder="Item#, Name, Desc, ASIN, SKU, UPC"
        onChange={handleChange}
        value={searchInput}
        onKeyDown={handleKeyPress}
      ></input>
      {/* <button onClick={handleClick}>O</button> */}
      <button onClick={handleClear}>Clear</button>
    </div>
  );
}

export default SearchBar;
