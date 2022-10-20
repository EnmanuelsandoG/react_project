import React from "react";
import Card from "@mui/material/Card";
import {
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActionArea,
  CardActions,
} from "@mui/material";
import { Link } from "react-router-dom"

const Item = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 345 }} style={styles.container}>
      <CardActionArea>
        <CardMedia
          component="img"
          width="140"
          image={product.images}
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
      <CardActions>
      <Link to={"/producto/" + product.id}>
        <Button size="small" color="primary">
          Ver Detalles
        </Button>
        </Link>
      </CardActions>
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
    background:
      "linear-gradient(99deg, rgba(255,253,193,1) 0%, rgba(255,220,0,1) 100%)",
  },
  title: {
    textOverflow: "ellipsis",
    overflow: "hidden",
    height: 100,
  },
};

export default Item;
