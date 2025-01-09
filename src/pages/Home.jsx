import React, { useContext, useEffect, useState } from "react";
import { BasketContext } from "../Context/BasketProvider";
import { WishListContext } from "../Context/WishListProvider";

function Home() { 
    const [products, setproducts] = useState([])
    const { AddtoBasket } = useContext(BasketContext);
    const {AddtoWishList} = useContext(WishListContext)
    useEffect(() => {
    fetch("https://northwind.vercel.app/api/categories")
      .then((response) => response.json())
      .then((data) => setproducts(data));
    }, [])
    
  return (
    <>
      <div className="container">
        <h2>Categories</h2>
        <div className="table">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Services</th>
                <th>WishList</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>
                    <button
                      onClick={() => AddtoBasket(item)}
                      className="btn btn-danger"
                    >
                      basket
                    </button>
                  </td>
                  <td>
                    <button onClick={() => AddtoWishList(item) }>Favori</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Home;
