import React, { useContext } from "react";
import { WishListContext } from "../Context/WishListProvider";

function WishList() {
  const { wishList } = useContext(WishListContext);

  return (
    <>
      {wishList.map((x) => (
        <ul>
          {console.log(x)}
          <li>{x.name}</li>
          <div>wishList</div>
        </ul>
      ))}
    </>
  );
}

export default WishList;
