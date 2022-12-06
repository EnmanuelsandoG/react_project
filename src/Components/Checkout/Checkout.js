import { addDoc, collection } from "firebase/firestore";
import { useContext, useState } from "react";
import { Button, CircularProgress } from "@mui/material";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Context } from "../../Context/CustomContext";
import "react-toastify/dist/ReactToastify.css";
import "./Checkout.css";
import { db } from "../../Firebase/firebase";

export default function Checkout() {
  const [finalizado, setFinalizado] = useState(false);
  const [recibida, setRecibida] = useState(false);
  const [comprador, setComprador] = useState("");
  const [orderId, setOrderID] = useState("");
  const { getItemPrice, cart, clear } = useContext(Context);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const ordercollection = collection(db, "orders");

  const onSubmit = (data, e) => {
    const order = {
      buyer: data,
      items: cart,
      total: getItemPrice(),
    };
    setFinalizado(true);
    toast.success("Su compra se ha realizado con exito.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    addDoc(ordercollection, order)
      .then(({ id }) => {
        setOrderID(id);
        setComprador(data.nombre);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setRecibida(true);
      });
    e.target.reset();
    clear();
  };

  return (
    <>
      {!finalizado ? (
        <>
          <div className="estilo-form">
            <h2 className="text-center">
              Complete sus datos para terminar la compra
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label>Nombre</label>
              <input
                className="form-control"
                {...register("nombre", {
                  required: true,
                  minLength: 3,
                  pattern: /^\S+[A-Za-z ]+$/i,
                })}
              />
              {errors?.nombre?.type === "required" && (
                <p className="mensaje-alerta">Campo Requerido</p>
              )}
              {errors?.nombre?.type === "pattern" && (
                <p className="mensaje-alerta">
                  No se permiten carateres especiales
                </p>
              )}
              {errors?.nombre?.type === "minLength" && (
                <p className="mensaje-alerta">Minimo 3 caracteres</p>
              )}
              <label>Telefono</label>
              <input
                className="form-control"
                {...register("telefono", {
                  required: true,
                  maxLength: 20,
                  pattern: /^[0-9]{9}/,
                })}
              />
              {errors?.telefono?.type === "required" && (
                <p className="mensaje-alerta">Campo Requerido</p>
              )}
              {errors?.telefono?.type === "pattern" && (
                <p className="mensaje-alerta">
                  Por favor introduzca un numero de telefono valido
                </p>
              )}
              <label>Correo Electronico</label>
              <input
                className="form-control"
                {...register("correo", {
                  required: true,
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                })}
              />
              {errors?.correo?.type === "pattern" && (
                <p className="mensaje-alerta">
                  Por favor introduzca un correo electronico valido
                </p>
              )}
              <Button Button variant="contained" color="warning" size="small" type="submit">
                Terminar compra
              </Button>
            </form>
          </div>
          <ToastContainer />
        </>
      ) : !recibida ? (
        <CircularProgress color="inherit" />
      ) : (
        <div className="compra-finalizada text-center">
          <h1>Su compra se ha realizado con Exito!</h1>
          <h2 className="text-comprador">Muchas Gracias {comprador}</h2>
          <h2>Su numero de Id es:</h2>
          <p className="order">{orderId}</p>
          <p className="mensaje">Muy pronto nos contactaremos con ud.</p>
          <Link style={{textDecoration: "none"}} to={"/home"} >
            {" "}
            <Button Button variant="contained" color="warning" size="small" type="submit">Ir al Home</Button>
          </Link>
        </div>
      )}
    </>
  );
}
