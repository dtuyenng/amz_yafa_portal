import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ItemCard from "./components/ItemCard";

import "./App.css";

const itemList = [
  {
    itemNumber: "CK71966",
    itemASIN: "B09X746FN1",
    itemUPC: "080333719664",
    itemName:
      "CONKLIN All American Special Eye Dropper Edition Fountain Pen (Demo Orange) - Omniflex Nib",
  },
  {
    itemNumber: "CK76165",
    itemASIN: "B08XZTQG1Z",
    itemUPC: "080333761656",
    itemName:
      "CONKLIN All American Ballpoint Pen (Turquoise Serenity) - Medium Point",
  },
  {
    itemNumber: "CK71436",
    itemASIN: "B07HB62Y7W",
    itemUPC: "080333714362",
    itemName:
      "CONKLIN All American Fountain Pen, Old Glory Special Edition, OmniFlex Nib",
  },
  {
    itemNumber: "CK72003",
    itemASIN: "B0C4RT5BCZ",
    itemUPC: "080333720035",
    itemName: "CONKLIN Duragraph Metal Fountain Pen PVD Gold - M",
  },
];

function App() {
  const [curItemList, setCurItemlist] = useState(itemList);
  const [curSearchInput, setSearchInput] = useState("");

  const filteredList = curSearchInput
    ? curItemList.filter(
        (item) =>
          item.itemNumber
            .toLowerCase()
            .includes(curSearchInput.toLowerCase()) ||
          item.itemName.toLowerCase().includes(curSearchInput.toLowerCase()) ||
          item.itemASIN.toLowerCase().includes(curSearchInput.toLowerCase()) ||
          item.itemUPC.toLowerCase().includes(curSearchInput.toLowerCase())
      )
    : [];

  function handleChange(event: any) {
    console.log(event.target.value);
    setSearchInput(event.target.value);
  }

  return (
    <div className="wrapper">
      <div className="header">
        <div className="title">Amazon Product Portal (A.P.P)</div>
        <SearchBar handleChange={handleChange} />{" "}
      </div>

      <ItemCard itemList={filteredList} />
    </div>
  );
}

export default App;
