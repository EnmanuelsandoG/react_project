import React, { useState } from "react";
import { Button } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export const ItemCount = ({ stock, initial, onAdd }) => {

  const [count, setCount] = useState(initial);

  const subtract = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const add = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  return (
    <>
      <div style={style.countBox}>
        <Button style={{border: "solid 2px"}} variant="contained" color="warning" onClick={subtract}>-</Button>
        <h2>{count}</h2>
        <Button style={{border: "solid 2px"}} variant="contained" color="warning" onClick={add}>+</Button>
      </div>
      <Button variant="outlined" color="warning" disabled={stock === 0} onClick={()=>onAdd(count)} >
        <span>
        {stock === 0 ? 'No tenemos Stock':'Agregar al carrito'}
        </span>
        <AddShoppingCartIcon />
      </Button>
    </>
  );
};

const style = {
  countBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "0% 80% 0% 0%",
  },
};
