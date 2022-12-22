import React from 'react'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import Typography from '@mui/material/Typography';
import PublicIcon from '@mui/icons-material/Public';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TextField from '@mui/material/TextField';
import Map from '../../components/Map/Map'
import {

  Link
} from "react-router-dom";
const Contact = () => {
  return (
    <>
      {/* <Stack direction="row" width="100%" height="100px" backgroundColor="#f7f7f7" mt={{ md: "3px", xs: "3px" }}
        justifyContent="center" alignItems="center">
        <Typography component={Link} to="/" sx={{ textDecoration: "none", color: "black", fontSize: "25px", mr: "10px", fontFamily: "sans-serif" }}>Home</Typography><Typography><i class="fa-sharp fa-solid fa-slash-forward"></i></Typography><Typography variant="span" sx={{ textDecoration: "none", fontFamily: "sans-serif", fontSize: "25px", mr: "10px" }}>Contact us</Typography>
      </Stack> */}
      <Map/>

      {/* <Stack width={{ md: "85%", xs: "90%" }} height={{ md: "800px", xs: "400px" }} margin="auto" mt={{ md: "100px", xs: "80px" }}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.0094933385203!2d67.05912091409715!3d24.86352535126005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f3395a5ca43%3A0xbb199abfe2db29e!2sTech%20Matter%20(Pvt)%20Ltd.!5e0!3m2!1sen!2s!4v1670027099671!5m2!1sen!2s" border="none" allowfullscreen="" loading="lazy" height="800px" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </Stack> */}
      <Stack width={{md:"85%",xs:"90%"}} margin="auto" mt="20px" height={{ md: "700px", xs: "auto" }} direction={{ md: "row", xs: "column" }} mb={{md:"100px",xs:"0px"}}>
        <Stack width={{ md: "40%", xs: "100%" }} backgroundColor="#f3f3f3">
          <Box width={{ md: "80%", xs: "100%" }} margin={{ md: "auto", xs: "auto" }} pt="30px" height={{ md: "600px", xs: "550px" }} >

            <Box margin="auto"  mt="50px" pl={{ md: "0px", xs: "15px" }} height="60px" justifyContent="space-around" display="flex" width="300px">
              <WifiCalling3Icon margin="auto" sx={{ width: "55px", color: "black", background: "#f3f3f3", height: "55px", padding: "10px", "&:hover": { backgroundColor: "black", color: "#fff" }, border: "1px solid black", borderRadius: "50%" }} />
              <Box width="350px" padding="5px" ml="20px" height="60px">
                <Typography fontSize={{md:"18px",xs:"16px"}}  fontFamily={{md:"Roboto",xs:"Roboto"}}  width="350px" variant="p">+012 345 678 102 <br />+012 345 678 102</Typography>

              </Box>
            </Box>

            <Box margin="auto"   mt="50px" pl={{ md: "0px", xs: "15px" }} height="60px" justifyContent="space-around" display="flex" width="300px">
              <PublicIcon margin="auto" sx={{ width: "55px", color: "black", background: "#f3f3f3", height: "55px", padding: "10px", "&:hover": { backgroundColor: "black", color: "#fff" }, border: "1px solid black", borderRadius: "50%" }} />
              <Box width="350px" padding="5px" ml="20px" height="60px">
                <Typography fontSize={{md:"18px",xs:"16px"}} fontFamily={{md:"Roboto",xs:"Roboto"}}  width="350px" variant="p">yourname@email.com <br />yourwebsitename.com</Typography>

              </Box>
            </Box>

            <Box margin="auto"  mt="50px" pl={{ md: "0px", xs: "15px" }} height="60px" justifyContent="space-around" display="flex" width="300px">
              <LocationOnIcon margin="auto" sx={{ width: "55px", color: "black", background: "#f3f3f3", height: "55px", padding: "10px", "&:hover": { backgroundColor: "black", color: "#fff" }, border: "1px solid black", borderRadius: "50%" }} />
              <Box width="350px" padding="5px" ml="20px" height="60px">
                <Typography fontSize={{ md: "18px", xs: "16px" }} fontFamily={{md:"Roboto",xs:"Roboto"}}  width="350px" variant="p">Address goes here,<br />street, Crossroad 123.</Typography>

              </Box>
            </Box>
            <Box margin="auto" mt="50px" height="150px" width="300px">
              <Typography variant="h4" fontSize={{ md: "40px", xs: "25px" }} textAlign="center" fontFamily={{md:"Roboto",xs:"Roboto"}} >Follow Us</Typography>
              <Box mt="30px" width="300px" textAlign="center" justifyContent="space-evenly" display="flex">
                <Typography component={Link} fontSize={{md:"22px",xs:"16px"}} color="grey" to="https://www.facebook.com" sx={{ "&:hover": { color: "#6610f2" } }}><i class="fa-brands fa-facebook-f"></i></Typography>
                <Typography component={Link} fontSize={{md:"22px",xs:"16px"}} color="grey" to="www.facebook.com" sx={{ "&:hover": { color: "#6610f2" } }} ><i class="fa-brands fa-pinterest-p"></i></Typography>
                <Typography component={Link} fontSize={{md:"22px",xs:"16px"}}color="grey" to="www.facebook.com" sx={{ "&:hover": { color: "#6610f2" } }}><i class="fa-brands fa-tumblr"></i></Typography>
                <Typography component={Link} fontSize={{md:"22px",xs:"16px"}} color="grey" to="www.facebook.com" sx={{ "&:hover": { color: "#6610f2" } }}><i class="fa-brands fa-vimeo-v"></i></Typography>
                <Typography component={Link} fontSize={{md:"22px",xs:"16px"}} color="grey" to="www.facebook.com" sx={{ "&:hover": { color: "#6610f2" } }}><i class="fa-brands fa-twitter"></i></Typography>

              </Box>
            </Box>



          </Box>
        </Stack >




        <Stack width={{ md: "75%", xs: "100%" }} ml={{ md: "15px", xs: "0px" }} mt={{ md: "0px", xs: "20px" }} backgroundColor="#f3f3f3" mb={{xs:"100px",md:"0px"}}>
          <Stack width={{ md: "80%", xs: "100%" }} height={{ md: "550px", xs: "570px" }} margin="auto">
            <Typography variant="h4" px={{ md: "49px", xs: "14px" }}  fontFamily={{md:"Roboto",xs:"Roboto"}}  color="#464646" fontWeight="600" fontSize={{ xs: "22px", md: "30px" }} pt={{ md: "0px", xs: "40px" }}>Get in Touch</Typography>
            <Stack direction={{ md: "row", xs: "column" }}  width={{md:"88%"}} marginLeft={{md:"40px"}} justifyContent="space-evenly" alignItems="center" mt={{ md: "50px", xs: "30px" }}>
              <TextField id="outlined-basic" type="text" label="Name" variant="outlined"  border="none"  sx={{  width: { md: "340px", xs: "90%" }, mb: { md: "0px", xs: "20px" },marginLeft:{md:"10px"}}} />
              <TextField id="outlined-basic" label="Email" variant="outlined"  sx={{ width: { md: "340px", xs: "90%" }, mb: { md: "0px", xs: "20px" },marginLeft:{md:"30px"} }} />

            </Stack>
            <TextField id="outlined-basic" label="Subject" variant="outlined" sx={{ width: { md: "88%", xs: "90%" }, mb: { md: "0px", xs: "20px" }, mt: { md: "40px", xs: "0px" }, mx: { md: "49px", xs: "15px" } }} />
            <TextField placeholder='Enter your Message'
              variant='outlined'
              label="Enter your Message"
              multiline
              rows={5}

              sx={{ width: { md: "88%", xs: "90%" }, mb: { md: "0px", xs: "20px" }, mt: { md: "40px", xs: "0px" }, mx: { md: "49px", xs: "15px" } }}


            />
            <Button
              sx={{
                width: { md: "140px", xs: "100px" }, mt: { md: "40px", xs: "10px" },
                backgroundColor: { md: "#404040", xs: "#404040" },
                ml: { md: "50px", xs: "15px" },
                padding: { md: "10px", xs: "5px" },
                color: { md: "#fff", xs: "#fff" },
                fontSize: { md: "18px", xs: "16px" }

              }}         >Send</Button>

          </Stack>

        </Stack>
      </Stack>

    </>
  )
}

export default Contact