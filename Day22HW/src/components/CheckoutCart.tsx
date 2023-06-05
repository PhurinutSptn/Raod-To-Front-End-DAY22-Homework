import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';

const CheckoutCart = () => {
  return (
    <>
        <div className='d-flex justify-content-between align-center'>
            <h2>Your Cart</h2>
            <Badge badgeContent={3} color="primary">
                <ShoppingCartIcon color="action" />
            </Badge>
        </div>
        <table>
            <tr>
                <div className="cart-items">
                    <div>
                        <b>Product name</b>
                        <p>Brief description</p>
                    </div>
                    <p>6,990฿</p>
                </div>
            </tr>
            <tr>
                <div className="cart-items">
                    <div>
                        <b>Second product</b>
                        <p>Brief description</p>
                    </div>
                    <p>1,990฿</p>
                </div>
            </tr>
            <tr>
                <div className="cart-items">
                    <div>
                        <b>Third product</b>
                        <p>Brief description</p>
                    </div>
                    <p>2,490฿</p>
                </div>
            </tr>
            <tr className='promo-code bg-light-gray'>
                <div className="cart-items">
                    <div>
                        <b>Promo code</b>
                        <p>Brief description</p>
                    </div>
                    <p>-1000฿</p>
                </div>
            </tr>
            <tr>
                <div className="cart-items">
                    <div>
                        <b>Total (THB)</b>
                    </div>
                    <p>10,470฿</p>
                </div>
            </tr>
        </table>
        <br />
        <ButtonGroup variant="contained" aria-label="outlined primary button group" className='w-100'>
            <TextField id="promo-code" label="Promo code" variant="outlined" fullWidth />
            <Button>Submit</Button>
        </ButtonGroup>
    </>
  )
}

export default CheckoutCart