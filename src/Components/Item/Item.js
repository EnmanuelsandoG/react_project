import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Item = ({product}) => {

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
      <img src={`/products/${product.productImg}`} alt={product.title} style={style.img} />
        <Typography variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          ${product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Ver mas</Button>
      </CardActions>
    </Card>
  );
}

const style = {

  img: {
    width: 250,
  }
}

export default Item;