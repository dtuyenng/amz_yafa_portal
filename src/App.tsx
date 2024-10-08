import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import ItemCard from "./components/ItemCard";
// import itemList from "./itemList";
import jsonData from "../src/assets/items08202024.json";

import "./App.css";

interface Item {
  itemNumber: string;
  itemASIN: string;
  itemName: string;
}

function App() {
  // const [curItemList, setCurItemList] = useState<Item[]>([]);

  const [curItemList, setCurItemList] = useState<Item[]>([]);

  const [curSearchInput, setSearchInput] = useState("");

  function handleChange(event: any) {
    console.log(event.target.value);
    setSearchInput(event.target.value);
  }

  function handleClick() {
    if (curSearchInput === "") return;

    const searchTerms = curSearchInput
      .toLowerCase()
      .split(" ")
      .filter((term) => term.trim() !== "");

    const filteredList = jsonData
      .map((item) => ({
        ...item,
        itemNumber: item.itemNumber.toString(), // Ensure itemNumber is a string
      }))
      .filter((item) => {
        const itemAttributes = [
          item.itemNumber.toLowerCase(), // Now it's safe to use toLowerCase
          item.itemName.toLowerCase(),
          item.itemASIN.toLowerCase(),
        ];

        return searchTerms.every((searchTerm) =>
          itemAttributes.some((attribute) => attribute.includes(searchTerm))
        );
      });

    setCurItemList(filteredList); // Set the filtered list
  }

  // function handleClick() {
  //   if (curSearchInput === "") return;
  //   const searchTerms = curSearchInput
  //     .toLowerCase()
  //     .split(" ")
  //     .filter((term) => term.trim() !== "");

  //   const filteredList = jsonData.filter((item) => {
  //     const itemAttributes = [
  //       item.itemNumber.toString().toLowerCase(),
  //       item.itemName.toLowerCase(),
  //       item.itemASIN.toLowerCase(),
  //     ];

  //     return searchTerms.every((searchTerm) =>
  //       itemAttributes.some((attribute) => attribute.includes(searchTerm))
  //     );
  //   });

  //   setCurItemList(filteredList);
  // }

  function handleClear() {
    setSearchInput("");
    setCurItemList([]);
    console.log("Cleared", curSearchInput, curItemList);
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
        <div>
          <img className="logo" src="yafalogo.png" alt="" />
          <div className="title_wrapper">
            <div className="title">
              <h1>Amazon Product Portal (A.P.P)</h1>
            </div>
            <div className="author">by: Andre Tuyen Nguyen</div>
            <div className="updated">Updated: 08-20-24</div>
          </div>
        </div>

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
