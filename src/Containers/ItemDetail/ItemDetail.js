import React, { useState, useContext } from "react";
import { ItemCount } from "../../Components/ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { Context } from "../../Context/CustomContext";
import { Button } from "@mui/material";

const ItemDetail = ({ product }) => {
  const [isPressedButton, setIsPressedButton] = useState(false);
  const { cart, addItem, IsInCart } = useContext(Context);

  let stock = 0;
  if (IsInCart(product.id)) {
    const found = cart.find((item) => item.id === product.id);
    stock = product.stock - found.cantidad;
  } else {
    stock = product.stock;
  }

  const onAdd = (count) => {
    setIsPressedButton(true);
    addItem(product, count);
  };

  return (
    <div style={style.Box1}>
      <img style={style.img} alt={product.title} src={product.image} />
      <div style={style.Box2}>
        <h1>{product.title}</h1>
        <span>{product.description}</span>
        <h2>${product.price}</h2>
        {!isPressedButton ? (
          <ItemCount stock={stock} initial={1} onAdd={onAdd} />
        ) : (
          <Link to={"/cart"}>
            <Button>Finalizar Compra</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;

const viewport ={
  width: document.documentElement.clientWidth,
  height: document.documentElement.clientHeight
}

const style = {
  Box1: {
    display: viewport.width > 900 ? "flex" : "none",
    alignItems: "center",
    justifyContent: "space-between",
  },

  Box2: {
    display: "block",
    justifyContent: "space-between",
  },

  img: {
    width: "100%",
    maxWidth: "600px",
    height: "auto",
  }
};
