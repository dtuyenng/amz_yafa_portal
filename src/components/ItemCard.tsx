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
  if (itemList.length > 50) {
    console.log("more than 50");
  }

  const limitedItemList = itemList.slice(0, 50); // Limiting to the first 50 items

  return (
    <div className="content">
      <div className="resultCounter fade">
        <div>
          Results: <span className="results"> {itemList.length}</span>
        </div>
        <div>
          {itemList.length > 50 && (
            <span>(50+ results, please narrow search terms!)</span>
          )}
        </div>
      </div>
      {limitedItemList.map((item) => (
        <div className="ItemCard" key={item.itemASIN}>
          <div className="gallery">
            <img
              className="mainPicture"
              src="src/assets/image_placeholder.png"
              alt=""
            />
            <img src="src/assets/image_placeholder.png" alt="" />
            <img src="src/assets/image_placeholder.png" alt="" />
            <img src="src/assets/image_placeholder.png" alt="" />
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
