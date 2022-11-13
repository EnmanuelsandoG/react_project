import React from "react";
import LogoKarbonAmarillo from "../../assets/LogoKarbonAmarillo.png";
import Box from "@mui/material/Box";
import { ButtonGroup } from "@mui/material";
import { CartWidget } from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {

  const categorias = [
    { nombre: "Carnes", id: 0, ruta: "/categoria/Carnes" },
    { nombre: "Cervezas", id: 1, ruta: "/categoria/Cervezas" },
    { nombre: "Cooking", id: 2, ruta: "/categoria/Cooking" },
  ];


  return (
    <Box style={style.Navbar} sx={{ flexGrow: 1}} >
      <Link style={style.logo} to="/">
      <img style={style.logo} src={LogoKarbonAmarillo} alt="Logo de tienda" />
      </Link>
      <ButtonGroup
        color="inherit"
        variant="text"
        aria-label="text button group"
      >
        {categorias.map((categoria) => {
          return (
            <NavLink key={categoria.id} style={style.categoria} to={categoria.ruta}>
              {categoria.nombre}
            </NavLink>
          );
        })}
      </ButtonGroup>
        <Link to="/Cart">
        <CartWidget/>
        </Link>
    </Box>
  );
};

export default Navbar;


const viewport ={
  width: document.documentElement.clientWidth,
  height: document.documentElement.clientHeight
}

const style = {

  Navbar: {
    display: viewport.width > 900 ? "flex" : "none",
    alignItems: "center",
    justifyContent: "space-between",
    height: 100,
    width: "100%",
    border: "2px solid",
  },
  logo: {
    height: "90%",
  },
  a: {
    margin: "10px",
  },
  categoria: {
    margin: 15,
    color: "black",
  },
};

