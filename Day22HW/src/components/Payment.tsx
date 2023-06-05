import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

const Payment = () => {
  return (
    <>
        <h2>Payment</h2>
        <FormControl>
            <RadioGroup
                aria-labelledby="payment-method"
                defaultValue="creditcard"
                name="radio-buttons-group"
            >
                <FormControlLabel value="creditcard" control={<Radio />} label="Credit card" />
                <FormControlLabel value="debitcard" control={<Radio />} label="Debit card" />
                <FormControlLabel value="paypal" control={<Radio />} label="Paypal" />
            </RadioGroup>
        </FormControl>
        <div className='d-flex justify-content-between'>
            <div className='holderName'>
                <p>Name on card</p>
                <TextField
                  required
                  fullWidth
                  id="holderName"
                />
            </div>
            <div className='cardNumber'>
                <p>Card number</p>
                <TextField
                  required
                  fullWidth
                  id="cardNumber"
                />
            </div>
        </div>
    </>
  )
}

export default Payment