import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer"
import { ItemDetailContainer } from "./Components/ItemDetailContainer/ItemDetailContainer";
import { Cart } from "./Components/Cart/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {

  const mensaje = "Bienvenido a Karbon";

  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={mensaje} />} />
          <Route
            path="/categoria/:id"
            element={<ItemListContainer greeting={mensaje} />}
          />
          <Route path="/producto/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<ItemListContainer />} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;
