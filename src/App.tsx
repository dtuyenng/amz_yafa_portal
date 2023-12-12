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
    itemASIN: "B08XZTQB07HB62Y7WG1Z",
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
  console.log(itemList);
  return (
    <div className="wrapper">
      <div className="title">Amazon Product Portal</div>
      <SearchBar />
      <ItemCard />
      <ItemCard />
      <ItemCard />
    </div>
  );
}

export default App;
