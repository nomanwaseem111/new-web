import React from "react"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import TextField from "@mui/material/TextField"
import SearchIcon from "@mui/icons-material/Search"
import Checkbox from "@mui/material/Checkbox"
import Box from "@mui/material/Box"
import Rating from "@mui/material/Rating"
import Pagination from "@mui/material/Pagination"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Button from '@mui/material/Button';

import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import { Link, useNavigate } from "react-router-dom"
const Accessories = () => {
  const [price, setPrice] = React.useState("")

  const handleChange = (event) => {
    setPrice(event.target.value)
  }

  const navigate = useNavigate()

  return (
    <Grid
      sx={{
        height: { md: "auto" },
      }}
     
      
    >
      <Container maxWidth="xl" sx={{mb:{xs:"100px",md:"100px"}}}  height={{md:'600px'}}>
       
        <Stack  mt={{md:'100px'}} height={{md:'600px'}} direction={{md:"row",xs:"column"}}>
          <Stack   width={{md:"60%"}} height={{md:'600px'}}>
            <Typography variant="h4" marginLeft={{md:"30px"}}>Billing Details</Typography>
            <Stack direction={{md:"row",xs:"column"}}  padding={{md:"30px"}}>
            <TextField id="outlined-basic" label="First Name" variant="outlined" sx={{width:{md:"400px"}}} />
            <TextField id="outlined-basic" label="Last Name"  variant="outlined" sx={{width:{md:"400px"}, marginLeft:{md:"40px"}}} />
        </Stack>
        <TextField  id="outlined-basic" label="Street Address"  variant="outlined" sx={{width:{md:"93% "}, marginLeft:{md:"32px"}}} />
        <Stack direction={{md:"row",xs:"column"}}  padding={{md:"30px"}}>
            <TextField id="outlined-basic" label="Phone Number" variant="outlined" sx={{width:{md:"400px"}}} />
            <TextField id="outlined-basic" label="Email Address"  variant="outlined" sx={{width:{md:"400px"}, marginLeft:{md:"40px"}}} />
        </Stack>
        <TextField placeholder='Notes about your Order, e.g special notes for delivery'
              variant='outlined'
              label="Additional information"
              multiline
              rows={5}

              sx={{ width: { md: "93%", xs: "90%" }, mb: { md: "0px", xs: "20px" }, mt: { md: "40px", xs: "0px" }, mx: { md: "32px" } }}


            />
          </Stack>
          <Stack  width={{md:"40%"}} height={{md:'600px'}}>
          <Typography variant="h4">Your Order</Typography>
          <Stack backgroundColor={{md:"#fff"}}  height={{md:"auto"}} >
           <Stack  mb={{md:"20px"}} height={{md:'10px'}} direction={{md:'row',xs:"row"}} justifyContent={{md:"space-between"}} marginLeft={{md:"30px"}} mt={{md:"30px"}} width={{md:"90%"}} height={{md:'50px'}}>
             <Typography fontSize={{md:"22px"}} >Product</Typography>
             <Typography fontSize={{md:"22px"}} >Total</Typography>
             

           </Stack>
           <hr/>
           <Stack   mb={{md:"20px"}} direction={{md:'row',xs:"row"}} justifyContent={{md:"space-between"}} marginLeft={{md:"30px"}} mt={{md:"30px"}} width={{md:"90%"}} height={{md:'50px'}}>
             <Typography fontSize={{md:"22px"}} >Lorem ipsum jacket X 3</Typography>
             <Typography fontSize={{md:"22px"}} >€33.60</Typography>
             

           </Stack>
           <hr/>
           <Stack   mb={{md:"20px"}} direction={{md:'row',xs:"row"}} justifyContent={{md:"space-between"}} marginLeft={{md:"30px"}} mt={{md:"30px"}} width={{md:"90%"}} height={{md:'50px'}}>
             <Typography fontSize={{md:"22px"}}>Shipping</Typography>
             <Typography fontSize={{md:"22px"}}>Free shipping</Typography>
             

           </Stack>
           <hr/>
           <Stack   mb={{md:"20px"}} direction={{md:'row',xs:"row"}} justifyContent={{md:"space-between"}} marginLeft={{md:"30px"}} mt={{md:"30px"}} width={{md:"90%"}} height={{md:'50px'}}>
             <Typography fontSize={{md:"22px"}}>Total</Typography>
             <Typography fontSize={{md:"22px"}}>€33.60</Typography>
             

           </Stack>
           <Button
            sx={{
              "&:hover": {
                backgroundColor: "#6610f2",
                color: "#fff",
              },
              backgroundColor: { md: " #6610f2", xs: " #6610f2" },
              padding: { md: "10px", xs: "5px" },
              width: { md: "80%", xs: "150px" },
              borderRadius: { md: "25px", xs: "25px" },
              fontSize: { md: "18px", xs: "10px" },
              color: { md: "#fff", xs: "#fff" },
              fontFamily:{md:'sans-serif'},
              marginLeft:{md:"60px"},
              mb:{md:"20px"}
            }}
            onClick={() => navigate("/checkout")}
          >
            Order Place
          </Button>

           </Stack>
          <Stack>

          

          </Stack>

          </Stack>


        </Stack>

      </Container>
    </Grid>
  )
}

export default Accessories
