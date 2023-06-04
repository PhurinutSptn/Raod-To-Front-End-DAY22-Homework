import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Jumbotron = () => {
  return (
    <>
        <div className='container-fluid justify-content-center'>
            <div className='jumbotron'>
                <h1>Album example</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam sequi, fuga aspernatur eligendi perferendis corporis ipsa debitis obcaecati ad sunt voluptatibus perspiciatis delectus eveniet consequuntur tempora. Explicabo sunt neque consectetur.</p>
                <Stack spacing={2} direction="row" className='justify-content-center'>
                    <Button variant="contained">Main action</Button>
                    <Button variant="outlined">Secodary action</Button>
                </Stack>
            </div>
        </div>
    </>
  )
}

export default Jumbotron