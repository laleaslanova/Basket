import React, { useContext } from "react";
import { WishListContext } from "../Context/WishListProvider";

function WishList() {
  const { wishList, AddtoWishList } = useContext(WishListContext);

  return (
    <>
      {wishList.map((x) => (
        <ul>
          {console.log(x)}
          <li>{x.name}</li>
          <div>wishList</div>
          <button onClick={() => AddtoWishList(x)}>X</button>
        </ul>
      ))}
    </>
  );
}

export default WishList;
