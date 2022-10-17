import React from "react";
import LogoKarbonAmarillo from "../../assets/LogoKarbonAmarillo.png";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { ButtonGroup } from "@mui/material";
import CartWidget from "../CartWidget/CartWidget";

export const Navbar = () => {
  return (
    <Box style={style.Navbar} sx={{ flexGrow: 1, backgroundColor: '#757575'}} >
      <img style={style.logo} src={LogoKarbonAmarillo} alt="Logo de tienda" />
      <ButtonGroup
        color="inherit"
        variant="text"
        aria-label="text button group"
      >
        <Button>Todos Los Productos</Button>
        <Button>Carnes</Button>
        <Button>Cervezas</Button>
        <Button>Cooking</Button>
      </ButtonGroup>
      <CartWidget />
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
  },
  logo: {
    height: "80%",
    margin: "10px",
  },
  a: {
    margin: "10px",
  },
};

