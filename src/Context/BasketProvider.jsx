import React, { createContext, useState } from "react";
export const BasketContext = createContext();


function BasketProvider({ children }) {
  const [basket, setbasket] = useState([]);


  function AddtoBasket(item) {
    const itemindex = basket.findIndex((x) => x.id === item.id);

    if (itemindex === -1) {
      setbasket([...basket, { ...item, count: 1 }]);
    } else {
      const newBasket = [...basket];
      newBasket[itemindex].count += 1;
      setbasket(newBasket);
    }
  }

  function removeAtBasket(item) {
     setbasket(basket.filter((x) => x.id !== item.id));
    
  }

  return (
    <>
      <BasketContext.Provider
        value={{ basket, setbasket, AddtoBasket, removeAtBasket }}
      >
        {children}
      </BasketContext.Provider>
    </>
  );
}

export default BasketProvider;
