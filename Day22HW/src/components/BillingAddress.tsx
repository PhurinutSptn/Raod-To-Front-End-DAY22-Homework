import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

const country = [
    {
      value: 'TH',
      label: 'Thailand',
    },
    {
      value: 'US',
      label: 'United States',
    },
    {
      value: 'UK',
      label: 'United Kingdom',
    },
    {
      value: 'JP',
      label: 'Japan',
    },
];

const state = [
    {
      value: 'NY',
      label: 'New York',
    },
    {
      value: 'California',
      label: 'California',
    },
    {
      value: 'Texas',
      label: 'Texas',
    },
    {
      value: 'Florida',
      label: 'Florida',
    },
];

const BillingAddress = () => {
  return (
    <>
        <h2>Billing address</h2>
        <div className='d-flex justify-content-between'>
            <div className='name'>
                <p>First name</p>
                <TextField
                  required
                  fullWidth
                  id="firstName"
                />
            </div>
            <div className='name'>
                <p>Last name</p>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                />
            </div>
        </div>
        <div className='form-items'>
            <p>Username</p>
            <TextField
                  required
                  fullWidth
                  id="username"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
            />
        </div>
        <div className='form-items'>
            <p>Email (Optional)</p>
            <TextField
                  fullWidth
                  id="email"
                  placeholder='example@example.com'
            />
        </div>
        <div className='form-items'>
            <p>Address</p>
            <TextField
                  required
                  fullWidth
                  id="address"
                  placeholder='123/45 Main Street'
            />
        </div>
        <div className='form-items'>
            <p>Address 2 (Optional)</p>
            <TextField
                  fullWidth
                  id="address2"
                  placeholder='Apartment or suite'
            />
        </div>
        <div className='d-flex justify-content-between form-items'>
            <div className='country'>
                <p>Country</p>
                <TextField
                id="country"
                select
                fullWidth
                defaultValue="US"
                >
                {country.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
                </TextField>
            </div>
            <div className='state'>
                <p>State</p>
                <TextField
                id="state"
                select
                fullWidth
                defaultValue="NY"
                >
                {state.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
                </TextField>
            </div>
            <div className='zip'>
                <p>Zip</p>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                />
            </div>
        </div>
        <br />
        <hr />
        <FormControlLabel control={<Checkbox />} label="Shipping addrss is the same as my billing address" />
        <FormControlLabel control={<Checkbox />} label="Save this information for next time" />
        <br />
        <hr />
    </>
  )
}

export default BillingAddress