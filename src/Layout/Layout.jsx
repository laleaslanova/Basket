import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { BasketContext } from "../Context/BasketProvider";
import { WishListContext } from "../Context/WishListProvider";

const Layout = () => {
  const { basket } = useContext(BasketContext);
  const { wishList } = useContext(WishListContext);
  console.log(wishList);
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/basket">Basket {basket.length}</Link>
          </li>
          <li>
            <Link to="/WishList">WishList {wishList.length}</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
