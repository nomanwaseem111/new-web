import React from 'react'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import Typography from '@mui/material/Typography';
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
        <Stack width="35%" border="1px solid black">
          <Box width="70%" margin="auto"  height="600px" >

            <Box  margin="auto" mt="50px" height="60px" justifyContent="space-around" display="flex" width="300px">
              <WifiCalling3Icon fontSize='40px' margin="auto" sx={{ width: "50px", height: "50px" }} />
              <Box width="200px"  height="50px">
                <Typography>+012 345 678 102</Typography>
                <Typography>+012 345 678 102</Typography>

              </Box>
            </Box>

            <Box  margin="auto" mt="50px" height="60px" justifyContent="space-around" display="flex" width="300px">
              <WifiCalling3Icon fontSize='40px' margin="auto" sx={{ width: "50px", height: "50px" }} />
              <Box width="200px"  height="50px">
                <Typography>+012 345 678 102</Typography>
                <Typography>+012 345 678 102</Typography>

              </Box>
            </Box>

            <Box  margin="auto" mt="50px" height="60px" justifyContent="space-around" display="flex" width="300px">
              <WifiCalling3Icon fontSize='40px' margin="auto" sx={{ width: "50px", height: "50px" }} />
              <Box width="200px"  height="50px">
                <Typography>+012 345 678 102</Typography>
                <Typography>+012 345 678 102</Typography>

              </Box>
            </Box>

            <Box  margin="auto" mt="50px" height="60px" justifyContent="space-around" display="flex" width="300px">
              <WifiCalling3Icon  margin="auto"   sx={{ width: "50px", color:"#fff",background:"black", height: "50px" ,padding:"10px",fontSize:'10px',border:"1px solid black",borderRadius:"50%"}} />
              <Box width="200px"  height="50px">
                <Typography>+012 345 678 102</Typography>
                <Typography>+012 345 678 102</Typography>

              </Box>
            </Box>


          </Box>
        </Stack >
        <Stack width="70%" ml="40px" border="1px solid red">

        </Stack>
      </Stack>

    </>
  )
}

export default Contact