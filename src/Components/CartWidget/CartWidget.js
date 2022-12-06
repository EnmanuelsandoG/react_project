import React,{useContext} from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Context } from "../../Context/CustomContext";

export const CartWidget = () => {
  const { qty } = useContext(Context);
  return (
    <div style={styles.container}>
      <p style={{textDecoration: "underline white"}}>{qty}</p>
      <ShoppingCartIcon color="inherit" fontSize="large" />
    </div>
  );
};

const styles = {
  container: {
    display: "Flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    background:"white",
    textDecoration:"none",
    color: "orange",
  },
};
