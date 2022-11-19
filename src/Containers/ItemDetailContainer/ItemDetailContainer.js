import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../Firebase/firebase";

export const ItemDetailContainer = ({ greeting }) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const refDoc = doc(db, "productos", id);

    getDoc(refDoc)
      .then((result) => {
        setProduct({...result.data(), id: result.id});
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(setLoading(false));

    // const getFirebase = async () => {
    //   const db = await initFirebase();
    //   console.log(db);
    // }

    // getFirebase();
  }, [id]);

  return (
    <>
      <h1>{greeting}</h1>
      {<>{loading ? <h1>Cargando...</h1> : <ItemDetail product={product} />}</>}
    </>
  );
};
