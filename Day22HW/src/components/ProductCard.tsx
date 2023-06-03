import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const ProductCard = () => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="src/assets/Edifier WH950NB.webp"
          alt="Headphones Edifier WH950NB"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Edifier WH950NB
          </Typography>
          <Typography variant="body2" color="text.secondary">
          หูฟังจากทาง Edifier ในรุ่น WH9500NB เป็นหูฟังไร้สายที่ออกแบบมาให้มีน้ำหนักเบา สวมใส่สบาย สามารถใช้งานได้อย่างหลากหลาย
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href='#/checkout'>
          Checkout
        </Button>
      </CardActions>
    </Card>
  )
}

export default ProductCard