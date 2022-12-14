import React from 'react'
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

const forgot = () => {
  return (
 
    <Grid sx={{backgroundColor: { md: "grey", xs: "grey",sm:"grey" }}}>
    <Container maxWidth="xl"   sx={{display:{md:"flex",xs:"flex"},width:{md:"auto",xs:"auto"},height:{md:"800px",xs:"600px"}}}>
    <Stack  display="flex" justifyContent="center" ml={{md:"400px",xs:"none"}} mt="200px" sx={{width:{md:"650px",xs:"350px"},height:{md:"370px",xs:"26s0px"}, padding:{md:"40px",xs:"15px"},backgroundColor:{md:"#f3f3f3",xs:"#f3f3f3"}, borderRadius:{md:"20px",xs:"10px"},paddingTop:{xs:"30px",md:"50px"}}}>
          <Typography variant="h5" sx={{mb:{md:"20px",xs:"10px"}, fontSize:{md:"24px",xs:"16px"}}} >Find Your Account</Typography>
          <hr/>
          <Typography  variant="p" sx={{fontSize:{md:"20px",xs:"14px"},mb:{md:"20px",xs:"10px"},mt:{md:"25px",xs:'18px'},fontFamily:{md:"sans-serif",xs:"sans-serif"}}} >Please enter your email address or mobile number to search for your account.</Typography>
          <Stack sx={{width:{md:"550px",xs:"320px"},mb:{md:"20px",xs:"10px"},mt:{md:"10px",xs:"5px"}}} >
          <TextField id="outlined-basic"  sx={{fontSize:"24px",backgroundColor:"white"}} variant="outlined" />
          </Stack>
          <hr/>
          <Stack direction="row" sx={{mb:"20px",mt:"20px"}} justifyContent="flex-end">
          <Button variant="contained" sx={{mr:{md:'10px',xs:"5px"},width:{md:"100px",xs:"50px"},fontSize:{md:'16px',xs:"12px"}}}>Cancel</Button>
          <Button variant="contained" sx={{mr:{md:'10px',xs:"5px"},width:{md:"100px",xs:"50px"},fontSize:{md:'16px',xs:"12px"}}}>Search</Button>

     
          </Stack>
      </Stack>

    </Container>
  </Grid>
     
  
  )
}

export default forgot