import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

type productDesc = {
  image: string,
  alter: string,
  prod_name: string,
  children: React.ReactNode
}

const ProductCard = ({image, alter, prod_name, children}:productDesc) => {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea href='#/product_desc'>
        <CardMedia
          component="img"
          height="250"
          image={image}
          alt={alter}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {prod_name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {children}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <div className='d-flex justify-content-between'>
          <Button size="small" color="primary" href='#/checkout'>
            Checkout
          </Button>
          <p className='view'>8 views</p>
        </div>
      </CardActions>
    </Card>
  )
}

export default ProductCard