import React, { createContext, useState } from "react";
export const BasketContext = createContext();


function BasketProvider({ children }) {
  const [basket, setbasket] = useState([]);


  function AddtoBasket(item) {
    const itemindex = basket.findIndex((x) => x.id === item.id);

    if (itemindex === -1) {
      setbasket([...basket, { item, count: 1 }]);
    } else {
      const newBasket = [...basket];
      newBasket[itemindex].count += 1;
      setbasket[newBasket];
    }
  }

  return (
    <>
      <BasketContext.Provider value={{ basket, setbasket, AddtoBasket }}>
        {children}
      </BasketContext.Provider>
    </>
  );
}

export default BasketProvider;
