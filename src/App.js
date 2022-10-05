import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"


const App = () => {
  const mensaje="Bienvenido a tu tienda preferida"

  return (
    <>
    <Navbar/>
    <ItemListContainer greeting={mensaje} mensaje="Bienvenido a Karbon"/>
    </>
  );
};

export default App;
