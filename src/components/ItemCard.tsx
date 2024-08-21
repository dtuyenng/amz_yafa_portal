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
  if (itemList.length > 30) {
    console.log("more than 30");
  }

  const limitedItemList = itemList.slice(0, 30); // Limiting to the first 50 items

  return (
    <div className="content">
      <div className="resultCounter fade">
        <div>
          Results: <span className="results"> {itemList.length}</span>
        </div>
        <div>
          {itemList.length > 50 && (
            <span className="blink">
              (30+ results, please narrow search terms!)
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
            <img
              className="mainPicture"
              src="https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg?w=1380&t=st=1724179166~exp=1724179766~hmac=8591241a7d5240a533b5dd92b35b82f197ae4eb3a8aa61a8d97eca6f45ea3637"
              alt=""
            />
            <img
              src="https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg?w=1380&t=st=1724179166~exp=1724179766~hmac=8591241a7d5240a533b5dd92b35b82f197ae4eb3a8aa61a8d97eca6f45ea3637"
              alt=""
            />
            <img
              src="https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg?w=1380&t=st=1724179166~exp=1724179766~hmac=8591241a7d5240a533b5dd92b35b82f197ae4eb3a8aa61a8d97eca6f45ea3637"
              alt=""
            />
            <img
              src="https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg?w=1380&t=st=1724179166~exp=1724179766~hmac=8591241a7d5240a533b5dd92b35b82f197ae4eb3a8aa61a8d97eca6f45ea3637"
              alt=""
            />
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
