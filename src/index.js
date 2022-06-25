import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Roots from "./Roots";
import NavbarPage from "./components/HomePage/NavbarPage";
import FooterPage from "./components/HomePage/FooterPage";

import FavoritesPage from "./components/LinkPage/FavoritePage/FavoritesPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <NavbarPage />
    <Routes>
      <Route path="/" element={<Roots />}></Route>
      <Route path="/favorite" element={<FavoritesPage />}></Route>
    </Routes>
    <FooterPage />
  </BrowserRouter>
);
