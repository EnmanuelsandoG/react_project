import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer"


const App = () => {

  return (
    <>
    <Navbar/>
    <ItemListContainer mensaje="Bienvenido a Karbon"/>
    </>
  );
};

export default App;
