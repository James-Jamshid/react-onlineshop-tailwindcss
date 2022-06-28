import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Roots from "./Roots";
import NavbarPage from "./components/HomePage/NavbarPage";
import FooterPage from "./components/HomePage/FooterPage";

import FavoritesPage from "./components/LinkPage/FavoritePage/FavoritesPage";
import CartPage from "./components/LinkPage/CartPage/CartPage";
import BuyProductPage from "./components/LinkPage/BuyProductPage";
import PhonePage from "./components/HomePage/DropDownPage/PhonePage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <NavbarPage />
    <Routes>
      <Route path="/" element={<Roots />}></Route>
      <Route path="/favorite" element={<FavoritesPage />}></Route>
      <Route path="/cart" element={<CartPage />}></Route>
      <Route path="/buy" element={<BuyProductPage />}></Route>
    </Routes>
    <FooterPage />
  </BrowserRouter>
);
