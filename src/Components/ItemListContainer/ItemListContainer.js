import React from "react";

const ItemListContainer = ({greeting, mensaje}) => {
    return(
        <>
        <h1>{greeting}</h1>
        <h2>{mensaje}</h2>
        </>
    );
};


export default ItemListContainer;