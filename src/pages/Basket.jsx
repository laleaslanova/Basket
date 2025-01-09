import React, { useContext } from "react";
import { BasketContext } from "../Context/BasketProvider";

function Basket() {
  const { basket, removeAtBasket } = useContext(BasketContext);

  return (
    <>
      <div>Basket</div>
      {basket.map((x) => (
        <ul>
          {console.log(x)}
          <li>{x.name}</li>
          <button onClick={() => removeAtBasket(x)}>X</button>
        </ul>
      ))}
    </>
  );
}

export default Basket;
