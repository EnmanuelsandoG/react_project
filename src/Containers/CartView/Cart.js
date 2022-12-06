import React, { useContext } from "react";
import { Context } from "../../Context/CustomContext";
import { Link } from "react-router-dom";
import "./Cart.css";
import { Table, Button, TableHead, TableBody, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export const Cart = () => {
  const { qty, total, clear, cart, deleteItem } = useContext(Context);

  return (
    <>
      <div className="cart-container">
        {qty > 0 ? (
          <>
            <h1> Carrito({qty} Items) </h1>
            <Table sx={{ border: 1 }}>
              <TableHead sx={{ border: 1 }}>
                <tr>
                  <th></th>
                  <th>Nombre</th>
                  <th>Cantidad</th>
                  <th>Precio</th>
                  <th>Eliminar</th>
                </tr>
              </TableHead>
              {cart.map((product, index) => (
                <TableBody key={index} sx={{ border: 1 }}>
                  <tr>
                    <td>
                      {
                        <img
                          src={product.image}
                          className="img-item-cart"
                          alt=""
                        />
                      }
                    </td>
                    <td>{product.title}</td>
                    <td>{product.cantidad}</td>
                    <td>${product.price * product.cantidad} CLP</td>
                    <td>
                      {" "}
                      <IconButton
                        aria-label="delete"
                        size="small"
                        onClick={() => {
                          deleteItem(product.id);
                        }}
                      >
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                    </td>
                  </tr>
                </TableBody>
              ))}
            </Table>
            <h2 className="text-center"> Resumen de la compra</h2>
            <Table>
              <TableHead>
                <tr>
                  <th></th>
                  <th className="text-end">Cantidad de Produtos</th>
                  <th className="text-center">Total de la Compra</th>
                </tr>
              </TableHead>
              <TableBody>
                <tr>
                  <td>Total</td>
                  <td className="text-end">{qty}</td>
                  <td className="text-center">${total} CLP</td>
                </tr>
              </TableBody>
            </Table>
            <div className="text-center space">
              {qty > 0 ? (
                <Button
                  variant="contained"
                  color="warning"
                  className="space"
                  onClick={() => {
                    clear();
                  }}
                >
                  Borrar Carrito
                </Button>
              ) : (
                <p></p>
              )}
              <Link style={{ textDecoration: "none" }} to={"/home"}>
                {" "}
                <Button variant="contained" color="warning" className="space">
                  Agregar Productos
                </Button>
              </Link>
              {qty > 0 ? (
                <Link to={"/checkout"} style={{ textDecoration: "none" }}>
                  {" "}
                  <Button variant="contained" color="warning" className="space">
                    Terminar Compra
                  </Button>
                </Link>
              ) : (
                <p></p>
              )}
            </div>
          </>
        ) : (
          <div className="text-center">
            <h1 className="aviso-cart">
              {" "}
              No hay productos en el carrito, por favor agregue sus productos
            </h1>
            <Link to={"/home"} style={{ textDecoration: "none" }} className="space">
              {" "}
              <Button variant="contained" color="warning" className="space">Agregar Productos</Button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};
