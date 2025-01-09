import React, { useContext } from "react";
import { BasketContext } from "../Context/BasketProvider";

function Basket() {
  const { basket } = useContext(BasketContext);

  return (
    <>
      <div>Basket</div>
      {basket.map((x) => (
        <ul>
          {console.log(x)}
          <li>{x.name}</li>
        </ul>
      ))}
    </>
  );
}

export default Basket;
