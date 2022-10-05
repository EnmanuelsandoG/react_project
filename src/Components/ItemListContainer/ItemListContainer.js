import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = ({greeting, mensaje}) => {

    const onAdd = (count) => {
        console.log(`El usuario quiere agregar ${count} productos`);
    }

    return(
        <>
        <h1>{greeting}</h1>
        <h2>{mensaje}</h2>
        <ItemCount stock={8} initial={1} onAdd={onAdd}/>
        </>
    );
};


export default ItemListContainer