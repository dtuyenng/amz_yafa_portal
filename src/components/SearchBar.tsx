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
      <div className="buttonWrapper">
        <button onClick={handleClick}>Search</button>
        <button onClick={handleClear}>Clear</button>
      </div>
    </div>
  );
}

export default SearchBar;
