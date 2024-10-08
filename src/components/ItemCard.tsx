interface Item {
  itemNumber: string;
  itemASIN: string;
  itemName: string;
}

interface ItemList {
  itemList: Item[];
}

function ItemCard({ itemList }: ItemList) {
  if (itemList.length === 0) {
    return (
      <>
        <div className="content">
          <div className="resultCounter fade">Results: 0</div>
          <div className="noResult">No result found. Re-enter search input</div>
        </div>
      </>
    );
  }
  if (itemList.length > 100) {
    console.log("more than 100");
  }

  const limitedItemList = itemList.slice(0, 100); // Limiting to the first x number of items

  return (
    <div className="content">
      <div className="resultCounter fade">
        <div>
          Results: <span className="results"> {itemList.length}</span>
        </div>
        <div>
          {itemList.length > 100 && (
            <span className="blink">
              (100+ results, please narrow search terms!)
            </span>
          )}
        </div>
      </div>
      {limitedItemList.map((item, index) => (
        <div
          className="ItemCard"
          // in case duplicate ASIN's are present in the data
          key={item.itemASIN + Math.floor(Math.random() * 10000)}
        >
          <div className="item_index">{index + 1}.</div>
          <div className="gallery">
            <img className="mainPicture" src="image_placeholder.png" alt="" />
            <img src="image_placeholder.png" alt="" />
            <img src="image_placeholder.png" alt="" />
            <img src="image_placeholder.png" alt="" />
          </div>
          <div className="itemInfo">
            <div className="itemName">{item.itemName}</div>
            <div className="itemInfoWrapper">
              <div className="itemLabel">Item#:</div>
              <div className="itemNumber"> {item.itemNumber}</div>
              <div className="itemLabel">ASIN:</div>
              <div className="itemAsin">{item.itemASIN}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemCard;
