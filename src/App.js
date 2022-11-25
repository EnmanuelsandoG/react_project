import React from "react";
import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { ItemListContainer } from "./Containers/ItemListContainer/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./Containers/ItemDetailContainer/ItemDetailContainer";
import { Cart } from "./Containers/CartView/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomProvider  from "./Context/CustomContext";
import Footer from "./Components/Footer/Footer";
import Checkout from "./Components/Checkout/Checkout";

const App = () => {
  const mensaje = "Bienvenido a tu tienda preferida!";

  return (
    <BrowserRouter>
      <CustomProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={mensaje} />} />
          <Route path="/home" element={<ItemListContainer greeting={mensaje} />} />
          <Route path="/category/:id" element={<ItemListContainer greeting={mensaje} />}/>
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<ItemListContainer />} />
          <Route path="checkout" element={<Checkout/>}/>
        </Routes>
        <Footer/>
      </CustomProvider>
    </BrowserRouter>
  );
};

export default App;
