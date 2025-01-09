import React, { createContext, useState } from "react";
export const WishListContext = createContext();

function WishListProvider({ children }) {
  const [wishList, setWishList] = useState([]);

  function AddtoWishList(item) {
    const itemindex = wishList.findIndex((x) => x.id === item.id);

    if (itemindex === -1) {
      setWishList([...wishList, item]);
    } else {
      setWishList(wishList.filter((x) => x.id !== item.id));
    }
  }

  return (
    <>
      <WishListContext.Provider
        value={{ wishList, setWishList, AddtoWishList }}
      >
        {children}
      </WishListContext.Provider>
    </>
  );
}

export default WishListProvider;
