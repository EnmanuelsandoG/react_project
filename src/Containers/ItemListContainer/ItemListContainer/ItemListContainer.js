import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../../Firebase/firebase";

export const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const productsCollection = collection(db, "productos");

  useEffect(() => {
    setLoading(true);

    console.log(id);

    if (id) {
      const q = query(productsCollection, where("category", "==", id));
      console.log(q);
      getDocs(q)
        .then((snapshot) => {
          setProducts(
            snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
          );
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      getDocs(productsCollection)
        .then((snapshot) => {
          setProducts(
            snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
          );
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [id]);

  return (
    <>
      <h1>{greeting}</h1>
      {<>{loading ? <h1>Cargando...</h1> : <ItemList products={products} />}</>}
    </>
  );
};
