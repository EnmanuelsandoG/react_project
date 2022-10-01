import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { IconButton } from "@mui/material";

export const CartWidget = () => {
  return (
    <IconButton color="inherit">
      <ShoppingCartIcon />
    </IconButton>
  );
};

export default CartWidget;
