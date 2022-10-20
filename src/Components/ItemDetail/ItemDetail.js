import React from "react";
import { Link } from "react-router-dom";

const ItemDetail = ({ product }) => {
  return (
    <div>
      <img alt={product.title} src={product.image} />
      <h1>{product.title}</h1>
      <span>{product.description}</span>
      <h2>{product.price}</h2>
        <Link to={'/cart'}>
          <button>Finalizar Compra</button>
        </Link>
    </div>
  );
};

export default ItemDetail;