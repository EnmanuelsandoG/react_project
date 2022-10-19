import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { products } from "../ItemListContainer/ItemListContainer";

const getProducts = new Promise ((resolve, reject )=> {
    setTimeout (() => {
        resolve(products);
    }, 2000);
});

export const ItemDetailContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.log("salio todo mal");
        console.log(error);
      })
      .finally(setLoading(false));
  }, []);

  return (
    <>
      <h1>{greeting}</h1>
      {<>{loading ? <h1>Cargando...</h1> : <ItemDetail products={products} />}</>}
    </>
  );
};

