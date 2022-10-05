import React, { useState } from "react";
import { Button } from "@mui/material";


const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] =  useState(initial);

    const subtract = () => {
        if(count > 1){
            setCount(count - 1);
        }
    }

    const add = () => {
        if(count < stock){
            setCount(count + 1);
        }
    }

    function addToCart() {
        onAdd(count);
    }

    return (
    <>
        <Button onClick={subtract}>-</Button>
        <h2>{count}</h2>
        <Button onClick={add}>+</Button>
        <Button disabled={stock === 0} onClick={addToCart}>Agregar al Carrito</Button>
    </>
    );
};

export default ItemCount; 