import React from "react";
import LogoKarbonAmarillo from "../../assets/LogoKarbonAmarillo.png";
import Box from "@mui/material/Box";
import { ButtonGroup } from "@mui/material";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {

  const categorias = [
    { nombre: "Ropa", id: 0, ruta: "/categoria/Ropa" },
    { nombre: "Electronicos", id: 1, ruta: "/categoria/Electronicos" },
    { nombre: "Muebles", id: 2, ruta: "/categoria/Muebles" },
    { nombre: "Zapatos", id: 3, ruta: "/categoria/Zapatos" },
    { nombre: "Otros", id: 4, ruta: "/categoria/Otros" },
  ];


  return (
    <Box style={style.Navbar} sx={{ flexGrow: 1}} >
      <Link to="/">
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



const style = {

  Navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: 40,
    width: "100%",
    border: "2px solid",
  },
  logo: {
    height: "3rem",
    margin: "10px",
  },
  a: {
    margin: "10px",
  },
  categoria: {
    margin: 15,
    color: "black",
  },
};

