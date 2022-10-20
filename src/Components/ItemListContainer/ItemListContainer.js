import React, { useState, useEffect } from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";


export const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  const URL_BASE = 'https://api.escuelajs.co/api/v1/products'
  const URL_CAT = `${URL_BASE}/category/${id}`

  useEffect(() => {
    const getProducts = async () => {
      try{
        const res = await fetch(id ? URL_CAT : URL_BASE);
        const data = await res.json();
        setProducts(data);
      } catch {
        console.log("error");
      } finally {
        setLoading(false);
      }
    };

    getProducts();
    
  }, [id, URL_BASE, URL_CAT]);

  const onAdd = (count) => {
    console.log(`El usuario quiere agregar ${count} productos`);
  };

  return (
    <>
      <h1>{greeting}</h1>
      {<>{loading ? <h1>Cargando...</h1> : <ItemList products={products} />}</>}
      <ItemCount stock={10} initial={1} onAdd={onAdd} />
    </>
  );
};