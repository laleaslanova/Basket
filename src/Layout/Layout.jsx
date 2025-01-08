import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { BasketContext } from "../Context/BasketProvider";

const Layout = () => {
    const {basket} = useContext(BasketContext)
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
          
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
