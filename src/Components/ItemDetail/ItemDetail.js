import React from "react";

const ItemDetail = ({ products }) => {
  return (
    <div>
      <img alt={products.title} src={products.image} />
      <h1>{products.title}</h1>
      <span>{products.description}</span>
      <h2>{products.price}</h2>
    </div>
  );
};

export default ItemDetail;