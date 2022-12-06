import React from "react";
import Card from "@mui/material/Card";
import {
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 345 }} style={styles.container}>
      <Link style={{textDecoration: "none"}} to={"/product/" + product.id}>
        <CardActionArea>
          <CardMedia
            component="img"
            width="140"
            image={product.image}
            alt={product.title}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              style={styles.title}
            >
              {product.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              ${product.price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};

const styles = {
  container: {
    width: window.innerHeight > 900 ? "25%" : "90%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    background: "white",
  },
  title: {
    color: "black",
    textOverflow: "ellipsis",
    overflow: "hidden",
    height: 100,
  },
};

export default Item;
