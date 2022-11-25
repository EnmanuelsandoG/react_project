import React, { useContext } from "react";
import  {Context}  from "../../Context/CustomContext";
import { Link } from "react-router-dom";
import "./Cart.css";
import { Table, Button } from "@mui/material";

export const Cart = () => {
  const { qty, total, emptyCart, cart, deleteItem } = useContext(Context)

  return (
      <>
          <div className='cart-container container-fluid d-flex flex-column justify-content-center align-items-center'>
              { 
                  qty > 0 ? (
                      <>
                          <h1 > Carrito({qty} Items) </h1>
                          <Table striped bordered hover variant="dark" className='table-cart table-responsive'>
                              <thead>
                                  <tr>
                                      <th></th>
                                      <th>Nombre</th>
                                      <th>Cantidad</th>
                                      <th>Precio</th>
                                      <th></th>
                                  </tr>
                              </thead>
                              {cart.map((product, index) =>
                                  <tbody key={index}>
                                      <tr >
                                          <td className='text-center align-middle'>{<img src={product.image} className='img-item-cart' alt="" />}</td>
                                          <td className='align-middle texto-nombre-cart'>{product.name}</td>
                                          <td className='align-middle texto-nombre-cart'>{product.cantidad}</td>
                                          <td className='align-middle texto-nombre-cart'>${product.price * product.cantidad} CLP</td>
                                          <td className='align-middle'> <button className='btn-agregar-cart d-flex justify-content-center' onClick={() => { deleteItem(product.id) }}>Eliminar</button></td>
                                      </tr>
                                  </tbody>
                              )}
                          </Table>
                          <h2> Resumen de la compra</h2>
                          <Table striped bordered hover variant="dark" className='table-cart'>
                              <thead>
                                  <tr>
                                      <th></th>
                                      <th className='text-end'>Cantidad de Produtos</th>
                                      <th className='text-center'>Total de la Compra</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr className="col align-self-end">
                                      <td>Total</td>
                                      <td className='text-end'>{qty}</td>
                                      <td className='text-center'>${total} CLP</td>
                                  </tr>
                              </tbody>
                          </Table>
                          <div className='container-fluid d-flex justify-content-center'>
                              {qty > 0 ? <button className='btn-agregar-cart' onClick={() => { emptyCart() }}>Borrar Carrito</button> : <p></p>}
                              <Link to={'/home'}> <Button className='btn-agregar-cart'>Agregar Productos</Button></Link>
                              {qty > 0 ? <Link to={'/checkout'}> <Button className='btn-agregar-cart'>Terminar Compra</Button></Link> : <p></p>}
                          </div>
                      </>
                  )
                      : (
                          <>
                              <h1 className='aviso-cart'> No hay productos en el carrito, por favor agregue sus productos</h1>
                              <Link to={'/home'}> <Button className='btn-agregar-cart'>Agregar Productos</Button></Link>
                          </>
                      )
              }
          </div>
      </>
  )
}


  //   const { cart, total, clear } = useContext(Context);

//   const comprador = {
//     nombre: 'Enmanuel',
//     apellido: 'Sandoval',
//     email: 'blabl@bla.com'
//   };

//   const finalizarCompra = ()=>{
//     const ventasCollection = collection(db,"ventas");
//     addDoc(ventasCollection,{
//       comprador,
//       items:[{nombre:'banana'},{nombre:'pera'}],
//       total: 200,
//       date:serverTimestamp()
//     })
//     .then(result=>{
//       console.log(result.id);
//     })
//     .catch(e => {
//       console.log('todo mal');
//       console.log(e);
//     });
    
//     clear();
//   }

//   const actualizarStock = ()=>{
//     const updateStock = doc(db, "productos","8bdxgcNSpGRzzAwmIFCG")
//     updateDoc(updateStock,{stock:80})
//   }


//   return (
//     <>
//       {cart.length === 0 ? (
//         <>
//           <h1 className={estilo ? "red" : "green"}>
//             No agregaste productos aun, puedes ir <Link to="/">ACA</Link>
//           </h1>
//           <h2 className={`tamanio ${color || ''}`}>Gracias por tu visita</h2>
//         </>
//       ) : (
//         <>
//           {cart.map((producto) => (
//             <h1 key={producto.id}>{producto.title}</h1>
//           ))}
//         </>
//       )}
//       <button onClick={actualizarStock}>finalizar compra</button>
//     </>
//   );
// };