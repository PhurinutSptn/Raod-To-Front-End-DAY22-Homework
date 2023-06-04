import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const ProductInfo = () => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography 
            variant='h1' 
            fontSize={20} 
            fontFamily={'Prompt'}
            fontWeight={500}
            gutterBottom
        >
            Edifier WH950NB
        </Typography>
        <Typography
            variant='body2'
            fontFamily={'Prompt'}
            gutterBottom
        >
            หูฟังจากทาง Edifier ในรุ่น WH950NB เป็นหูฟังไร้สายที่ออกแบบมาให้มีน้ำหนักเบา สวมใส่สบาย สามารถใช้งานได้อย่างหลากหลาย
        </Typography>

        <Typography
            variant='body1'
            fontFamily={'Prompt'}
            fontWeight={500}
            gutterBottom
        >
            Price: 6,990฿
        </Typography>
        <TextField id="prod_qauntity" label="Quantity" variant="outlined" type='number' fullWidth />
      </CardContent>
      <CardActions>
        <Button size="small" href='#/checkout'>Checkout</Button>
      </CardActions>
    </Card>
  )
}

export default ProductInfo