import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import ItemCard from "./components/ItemCard";

import "./App.css";
// review codes about search function on keyboard press,
// searchinput clearing, delay class changing ..

const itemList = [
  {
    itemNumber: "CK71000:CK71966",
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

interface Item {
  itemNumber: string;
  itemASIN: string;
  itemUPC: string;
  itemName: string;
}

function App() {
  const [curItemList, setCurItemList] = useState<Item[]>([]);
  const [curSearchInput, setSearchInput] = useState("");

  function handleChange(event: any) {
    console.log(event.target.value);
    setSearchInput(event.target.value);
  }

  function handleClick() {
    const filteredList = itemList.filter(
      (item) =>
        item.itemNumber.toLowerCase().includes(curSearchInput.toLowerCase()) ||
        item.itemName.toLowerCase().includes(curSearchInput.toLowerCase()) ||
        item.itemASIN.toLowerCase().includes(curSearchInput.toLowerCase()) ||
        item.itemUPC.toLowerCase().includes(curSearchInput.toLowerCase())
    );
    setCurItemList(filteredList);
  }

  function handleClear() {
    setSearchInput("");
    setCurItemList([]);
  }

  useEffect(() => {
    const itemCards = document.querySelectorAll<HTMLElement>(".ItemCard"); // Explicitly specify the type as HTMLElement
    console.log(" go" + itemCards);
    // Assuming you want to apply the class to each ItemCard sequentially

    itemCards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add("fade");
        // card.style.visibility = "visible";
      }, index * 200); // Adjust the delay between adding classes if needed
    });
  }, [curItemList]);

  return (
    <div className="wrapper">
      <div className="header">
        <div className="title">Amazon Product Portal (A.P.P)</div>
        <SearchBar
          handleChange={handleChange}
          handleClick={handleClick}
          handleClear={handleClear}
          searchInput={curSearchInput}
        />
      </div>

      <ItemCard itemList={curItemList} />
    </div>
  );
}

export default App;
