import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import Basket from "./pages/Basket";
import BasketProvider from "./Context/BasketProvider";
import WishListProvider from "./Context/WishListProvider";
import WishList from "./pages/WishList";

function App() {
  return (
    <>
      <WishListProvider>
        <BasketProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="basket" element={<Basket />} />
                <Route path="wishlist" element={<WishList />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </BasketProvider>
      </WishListProvider>
    </>
  );
}

export default App;
