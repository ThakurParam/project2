import React from 'react'
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

function Sign() {



const contttt={
  backgroundColor:'wheat',
  padding:'20px'

}



  return (
   <>
   <body style={contttt}>
  <h1>Sign In</h1>
  <p>
    To Sign In please fill the details as given below...
  </p>
   <Container maxWidth="sm">
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Sign In
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>

    </body>
   </> 
  )
}

export default Sign