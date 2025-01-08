import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import Basket from "./pages/Basket";
import BasketProvider from "./Context/BasketProvider";

function App() {
  return (
    <>
      <BasketProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="basket" element={<Basket />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </BasketProvider>
    </>
  );
}

export default App;
