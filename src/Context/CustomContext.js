// import { useState ,createContext, useEffect } from "react";
// import { toast, ToastContainer } from 'react-toastify';

// export const Context = createContext()

// const { Provider } = Context

// const CustomProvider = ({ children }) => {

//     const [cart, setCart] = useState(JSON.parse(localStorage.getItem('items')) ?? [])


//     useEffect(() => {
//         localStorage.setItem('items', JSON.stringify(cart))

//     }, [cart])


//     const isInCart = (id) => {
//         return cart.some(e => e.id === id)

//     }

//     const addItem = (item, qty) => {
//         const newItem = {
//             ...item, qty
//         }

//         if (isInCart(newItem.id)) {
//             const findProduct = cart.find(e => e.id === newItem.id)
//             const productIndex = cart.indexOf(findProduct)
//             const auxArray = [...cart]
//             if (auxArray[productIndex].qty + qty > newItem.stock) {
//                 auxArray[productIndex].qty = newItem.stock
//                 toast.warn('Se esta superando el stock del producto, por favor verifique el stock', {
//                     position: "top-right",
//                     autoClose: 5000,
//                     hideProgressBar: false,
//                     closeOnClick: true,
//                     pauseOnHover: true,
//                     draggable: true,
//                     progress: undefined,
//                     theme: "dark"
//                 });
//             } else { auxArray[productIndex].qty += qty }


//             setCart(auxArray)

//         } else {
//             setCart([...cart, newItem])

//         }

//     }

//     const emptyCart = () => {
//         setCart([])
//     }
//     const deleteItem = (id) => {
//         return setCart(cart.filter(e => e.id !== id))

//     }
    // const getItemQty = () => {
    //     return cart.reduce((acc, x) => acc += x.qty, 0)


    // }
//     const getItemPrice = () => {
//         return cart.reduce((acc, x) => acc += x.qty * x.precio, 0)

//     }


//     return <>
//         <Provider value={{ cart, isInCart, addItem, deleteItem, emptyCart, getItemQty, getItemPrice }} >{children}</Provider>
//         <ToastContainer />
//     </>

// }
// export default CustomProvider



import React, { createContext, useEffect, useState } from "react";

export const Context = createContext();

const { Provider } = Context

const CustomProvider = ({ children }) => {
  
  const [cart, setCart] = useState([]);
  const [qty, setQty] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setQty(cart.reduce((total, item) => total + item.cantidad, 0))
    setTotal(cart.reduce((total, item) => total + (item.cantidad * item.price), 0))
  }, [])
  

  const addItem = (item, cantidad) => {
    if (IsInCart(item.id)) {
      const modificado = cart.map((producto) => {
        if (producto.id === item.id) {
          producto.cantidad += cantidad;
        }
        return producto;
      });
      setCart(modificado);
    } else {
      setCart([...cart, { ...item, cantidad }]);
    }
    setQty(qty + cantidad);
    setTotal(total + (item.price * cantidad));
  };

  const deleteItem = (id) => {
    const found = cart.find(producto => producto.id === id);
    setCart(cart.filter((item) => item.id !== id));
    setQty( qty - found.cantidad)
    setTotal(total - (found.price * found.cantidad))
  };

  const IsInCart = (id) => cart.some((item) => item.id === id);

  const clear = () => {
    setCart([]);
    setQty(0);
    setTotal(0);
  };

  return (
    <Provider value={{ cart, qty, total, addItem, deleteItem, clear, IsInCart }}>
      {children}
    </Provider>
  );
};

export default CustomProvider