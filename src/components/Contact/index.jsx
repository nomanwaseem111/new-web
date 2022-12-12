import React from 'react'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import Typography from '@mui/material/Typography';
import PublicIcon from '@mui/icons-material/Public';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TextField from '@mui/material/TextField';

import {

  Link
} from "react-router-dom";
const Contact = () => {
  return (
    <>
      <Stack direction="row" width="100%" height="100px" backgroundColor="#f7f7f7" justifyContent="center" alignItems="center">
        <Typography component={Link} to="/" sx={{ textDecoration: "none", color: "black", fontSize: "25px", mr: "10px", fontFamily: "sans-serif" }}>Home</Typography><Typography><i class="fa-sharp fa-solid fa-slash-forward"></i></Typography><Typography variant="span" sx={{ textDecoration: "none", fontFamily: "sans-serif", fontSize: "25px", mr: "10px" }}>Contact us</Typography>
      </Stack>

      <Stack width="85%" margin="auto" mt="100px">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.0094933385203!2d67.05912091409715!3d24.86352535126005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f3395a5ca43%3A0xbb199abfe2db29e!2sTech%20Matter%20(Pvt)%20Ltd.!5e0!3m2!1sen!2s!4v1670027099671!5m2!1sen!2s" border="none" allowfullscreen="" loading="lazy" height="800px" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </Stack>
      <Stack width="85%" margin="auto" mt="20px" height="700px" direction="row">
        <Stack width="40%" backgroundColor="#f3f3f3">
          <Box width="80%" margin="auto" pt="30px" height="600px" >

            <Box margin="auto" mt="50px" height="60px" justifyContent="space-around" display="flex" width="300px">
              <WifiCalling3Icon margin="auto" sx={{ width: "55px", color: "black", background: "#f3f3f3", height: "55px", padding: "10px", "&:hover": { backgroundColor: "black", color: "#fff" }, border: "1px solid black", borderRadius: "50%" }} />
              <Box width="350px" padding="5px" ml="20px" height="60px">
                <Typography fontSize="20px" fontFamily="sans-serif" width="350px" variant="p">+012 345 678 102 <br />+012 345 678 102</Typography>

              </Box>
            </Box>

            <Box margin="auto" mt="50px" height="60px" justifyContent="space-around" display="flex" width="300px">
              <PublicIcon margin="auto" sx={{ width: "55px", color: "black", background: "#f3f3f3", height: "55px", padding: "10px", "&:hover": { backgroundColor: "black", color: "#fff" }, border: "1px solid black", borderRadius: "50%" }} />
              <Box width="350px" padding="5px" ml="20px" height="60px">
                <Typography fontSize="20px" fontFamily="sans-serif" width="350px" variant="p">yourname@email.com <br />yourwebsitename.com</Typography>

              </Box>
            </Box>

            <Box margin="auto" mt="50px" height="60px" justifyContent="space-around" display="flex" width="300px">
              <LocationOnIcon margin="auto" sx={{ width: "55px", color: "black", background: "#f3f3f3", height: "55px", padding: "10px", "&:hover": { backgroundColor: "black", color: "#fff" }, border: "1px solid black", borderRadius: "50%" }} />
              <Box width="350px" padding="5px" ml="20px" height="60px">
                <Typography fontSize="20px" fontFamily="sans-serif" width="350px" variant="p">Address goes here,<br />street, Crossroad 123.</Typography>

              </Box>
            </Box>
            <Box margin="auto" mt="50px" height="150px" width="300px">
              <Typography variant="h4" textAlign="center" >Follow Us</Typography>
              <Box mt="30px" width="300px" textAlign="center" justifyContent="space-evenly" display="flex">
                <Typography component={Link} fontSize="22px" color="grey" to="https://www.facebook.com" sx={{ "&:hover": { color: "#6610f2" } }}><i class="fa-brands fa-facebook-f"></i></Typography>
                <Typography component={Link} fontSize="22px" color="grey" to="www.facebook.com" sx={{ "&:hover": { color: "#6610f2" } }} ><i class="fa-brands fa-pinterest-p"></i></Typography>
                <Typography component={Link} fontSize="22px" color="grey" to="www.facebook.com" sx={{ "&:hover": { color: "#6610f2" } }}><i class="fa-brands fa-tumblr"></i></Typography>
                <Typography component={Link} fontSize="22px" color="grey" to="www.facebook.com" sx={{ "&:hover": { color: "#6610f2" } }}><i class="fa-brands fa-vimeo-v"></i></Typography>
                <Typography component={Link} fontSize="22px" color="grey" to="www.facebook.com" sx={{ "&:hover": { color: "#6610f2" } }}><i class="fa-brands fa-twitter"></i></Typography>

              </Box>
            </Box>



          </Box>
        </Stack >




        <Stack width="75%" ml="15px" backgroundColor="#f3f3f3">
          <Stack width="80%" height="550px"  margin="auto">
            <Typography variant="h4" px="49px" color="#464646" fontWeight="600">Get in Touch</Typography>
            <Stack direction="row" justifyContent="space-evenly" alignItems="center" mt="50px">
              <TextField id="outlined-basic" label="Name" variant="outlined" sx={{ width: "320px" }} />
              <TextField id="outlined-basic" label="Email" variant="outlined" sx={{ width: "320px" }} />

            </Stack>
            <TextField id="outlined-basic" label="Subject" variant="outlined" sx={{ width: "88%", mx: "49px", mt: "40px" }} />
            <TextField placeholder='Enter your Message'
              variant='outlined'
              label="Enter your Message"
              multiline
              rows={5}

              sx={{ width: "88%", mx: "49px", mt: "40px" }}
            />
            <Button className='shopNow' sx={{ width: "140px", mt: "40px", backgroundColor:"#404040", ml: "50px", padding: "10px", color: "#fff", fontSize: "18px", "&:hover": { background: "#6610f2", border: "none", color: "#fff", fontWeight: "bold" } }}>Send</Button>

          </Stack>

        </Stack>
      </Stack>

    </>
  )
}

export default Contact