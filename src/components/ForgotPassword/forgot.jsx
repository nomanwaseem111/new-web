import React from 'react'
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const forgot = () => {
  return (
    <>

      <Stack sx={{height:"100vh",width:"100%",display:"flex",justifyContent:"center",background:"#f0f2f5", alignItems:"center"}}>
      <Stack sx={{width:"650px",height:"370px", border:"none",background:"#fff", borderRadius:"10px",padding:"50px"}}>
          <Typography variant="h5" sx={{mb:"20px"}}>Find Your Account</Typography>
          <hr/>
          <Typography variant="p" sx={{mb:"20px",mt:"25px", fontSize:"22px", fontFamily:"sans-serif",lineheight: "20px"}}>Please enter your email address or mobile number to search for your account.</Typography>
          <Stack sx={{width:"550px", mb:"20px",mt:"10px"}}>
          <TextField id="outlined-basic"  sx={{fontSize:"24px"}} variant="outlined" />
          </Stack>
          <hr/>
          <Stack direction="row" sx={{mb:"20px",mt:"20px"}} justifyContent="flex-end">
          <Button variant="contained" sx={{background:"#e4e6eb",mr:"10px", width:"100px" ,color:"grey"}}>Cancel</Button>
          <Button variant="contained" sx={{width:"100px"}}>Search</Button>

     
          </Stack>
      </Stack>
     </Stack>
    </>
  )
}

export default forgot