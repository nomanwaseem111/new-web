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
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';

import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { Link, useNavigate } from "react-router-dom"
const CheckOut = () => {
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
       
        <Stack  mt={{md:'100px',xs:"50px"}}  height={{md:'530px'}} direction={{md:"row",xs:"column"}}>
          <Stack   width={{md:"60%"}} height={{md:'600px'}}>
            <Typography variant="h4" fontSize={{xs:"20px",md:"30px"}} marginLeft={{md:"30px"}} fontFamily={{md:"Roboto",xs:"Roboto"}}>Billing Details</Typography>
            <Stack direction={{md:"row",xs:"row"}}  padding={{md:"30px"}}>
            <TextField id="outlined-basic" label="First Name"  variant="outlined" sx={{width:{md:"400px",xs:"150px"},mt:{md:"0px",xs:"20px"}}} />
            <TextField id="outlined-basic" label="Last Name"  variant="outlined" sx={{width:{md:"400px",xs:"150px"}, marginLeft:{md:"40px",xs:"30px"}, mt:{md:"0px",xs:"20px"}}} />
        </Stack>
        <TextField  id="outlined-basic" label="Street Address"  variant="outlined" sx={{width:{md:"93% "}, marginLeft:{md:"32px"},mt:{md:"0px",xs:"20px"}}} />
        <Stack direction={{md:"row",xs:"column"}}  padding={{md:"30px"}}>
        
            <TextField id="outlined-basic" label="Phone Number" variant="outlined" sx={{width:{md:"400px"},mt:{md:"0px",xs:"20px"}}} />
            <TextField id="outlined-basic" label="Email Address"  variant="outlined" sx={{width:{md:"400px"}, marginLeft:{md:"40px"},mt:{md:"0px",xs:"20px"}}} />
        </Stack>
        <TextField placeholder='Notes about your Order, e.g special notes for delivery'
              variant='outlined'
              label="Additional information"
              multiline
              rows={7}

              sx={{ width: { md: "93%", xs: "100%" }, mb: { md: "0px", xs: "20px" }, mt: { md: "0px", xs: "20px" }, mx: { md: "32px" } }}


            />
          </Stack>
          <Stack  backgroundColor={{md:"#f6f6f8",xs:"#f6f6f8"}}  p={{md:"20px",xs:'20px'}} pt={{md:"20px",xs:"30px"}} mt={{md:'0px',xs:"30px"}} borderRadius={{md:"0px",xs:"0px"}} height={{md:"520px"}} width={{md:'38%'}}> 
         <Typography variant="h5" marginLeft={{md:"30px"}} fontSize={{md:"30px",xs:"16px"}} fontFamily={{md:"Roboto",xs:"Roboto"}}>Payment Method</Typography>
        
         <FormControlLabel value="Cash" control={<Radio />} label="Cash" fontFamily={{md:"Roboto",xs:"Roboto"}} sx={{marginLeft:{md:"20px"},mt:{md:"20px",xs:"20px"}}} />
      
         <Stack  backgroundColor={{md:"#f6f6f8"}} width={{md:"100%"}} height={{md:"500px",xs:"350px"}}>
          <Stack direction={{md:"row",xs:"row"}} justifyContent={{md:"space-between",xs:"space-between"}}> 
          <FormControlLabel value="card" control={<Radio />} label="Debit/Credit Card"  sx={{marginLeft:{md:"20px"},mt:{md:"20px",xs:"10px"}}} />
          {/* <CreditCardIcon sx={{fontSize:{md:"50px"},marginRight:{md:"60px"}}}/>
            */}
            <Box component="img" src="https://www.3dtrickart.co.nz/wp-content/uploads/2014/04/mastercard-credit-card-american-express-visa-debit-card-mastercard.jpg" sx={{width:{md:"100px",xs:"80px"},marginRight:{md:"50px"}}} />

               </Stack>

         <TextField id="outlined-basic" label="Card Holder Name" sx={{width:{md:"85%"},marginLeft:{md:"30px"},mt:{md:"30px",xs:"30px"},height:{md:"30px",xs:"15px"}}}  variant="outlined" />
         
         <TextField id="outlined-basic"  label="Card Number" sx={{width:{md:"85%"},marginLeft:{md:"30px"},mt:{md:"50px",xs:"60px"},height:{md:"30px",xs:"15px"}}}  variant="outlined" />
         <Stack direction={{md:"row",xs:"row"}} mt={{md:'50px',xs:"60px"}} >
        
         <TextField id="outlined-basic" label="Expiry Date" sx={{width:{md:"25%",xs:"80%"},marginLeft:{md:"30px"},height:{md:"30px",xs:"15px"}}}  variant="outlined" />
         
         <TextField id="outlined-basic" label="Year"sx={{width:{md:"25%"},marginLeft:{md:"30px",xs:"10px"},height:{md:"30px",xs:"15px"}}}  variant="outlined" />
         
         <TextField id="outlined-basic" label="CVC" sx={{width:{md:"25%"},marginLeft:{md:"30px",xs:"10px"},height:{md:"30px",xs:"15px"}}}  variant="outlined" />
         </Stack>
         <Button
            sx={{
              "&:hover": {
                backgroundColor: "#64dd17",
                color: "#fff",
              },
              backgroundColor: { md: "#64dd17", xs:"#64dd17" },
              padding: { md: "10px", xs: "5px" },
              width: { md: "80%", xs: "280px" },
              borderRadius: { md: "50px", xs: "25px" },
              fontSize: { md: "14px", xs: "10px" },
              color: { md: "#fff", xs: "#fff" },
              fontFamily:{md:"Roboto",xs:"Roboto"}    ,          marginLeft:{md:"50px",xs:"0px"},
              fontWeight:{md:"bold",xs:"bold"},
             
              mt:{md:"50px",xs:"70px"}
            }}
            onClick={() => navigate("/checkout")}
          >
            Pay Now
          </Button>
         </Stack>
        </Stack>

       
       
        </Stack>
     



        <Stack  width={{md:"38%",xs:"100%"}}  borderRadius={{md:"0px",xs:"0px"}} padding={{md:"30px",xs:"30px"}} backgroundColor={{md:"#f6f6f8",xs:"#f6f6f8"}} height={{md:'550px',xs:"350px"}}  pt={{md:"30px",xs:"30px"}}   marginLeft={{md:"890px",xs:"0px"}} mt={{md:"30px",xs:"30px"}}>
          <Typography variant="h5" fontSize={{md:"30px",xs:"20px"}} fontFamily={{md:"Roboto",xs:"Roboto"}}>Your Order</Typography>
          <Stack   mt={{md:"20px",xs:"20px"}} height={{md:"auto"}} >
           <Stack  mb={{md:"10px",xs:"10px"}} height={{md:'10px'}} direction={{md:'row',xs:"row"}} justifyContent={{md:"space-between",xs:"space-between"}} marginLeft={{md:"30px"}} mt={{md:"30px"}} width={{md:"90%"}} height={{md:'50px'}}>
             <Typography fontSize={{md:"22px",xs:"16px"}} fontFamily={{md:"Roboto",xs:"Roboto"}} >Product</Typography>
             <Typography fontSize={{md:"22px",xs:"16px"}} fontFamily={{md:"Roboto",xs:"Roboto"}} >Total</Typography>
             

           </Stack>
           <hr/>
           <Stack   mb={{md:"10px",xs:"10px"}} direction={{md:'row',xs:"row"}} justifyContent={{md:"space-between",xs:"space-between"}} marginLeft={{md:"30px"}} mt={{md:"30px",xs:"20px"}} width={{md:"90%"}} height={{md:'50px'}}>
             <Typography fontSize={{md:"22px",xs:"16px"}} fontFamily={{md:"Roboto",xs:"Roboto"}} >Lorem ipsum jacket X 3</Typography>
             <Typography fontSize={{md:"22px",xs:"16px"}}  fontFamily={{md:"Roboto",xs:"Roboto"}}>€33.60</Typography>
             

           </Stack>
           <hr/>
           <Stack   mb={{md:"10px",xs:"10px"}} direction={{md:'row',xs:"row"}} justifyContent={{md:"space-between",xs:"space-between"}} marginLeft={{md:"30px"}} mt={{md:"30px",xs:"20px"}} width={{md:"90%"}} height={{md:'50px'}}>
             <Typography fontSize={{md:"22px",xs:"16px"}}fontFamily={{md:"Roboto",xs:"Roboto"}}>Shipping</Typography>
             <Typography fontSize={{md:"22px",xs:"16px"}} fontFamily={{md:"Roboto",xs:"Roboto"}}>Free shipping</Typography>
             

           </Stack>
           <hr/>
           <Stack   mb={{md:"10px",xs:"10px"}} direction={{md:'row',xs:"row"}} justifyContent={{md:"space-between",xs:"space-between"}} marginLeft={{md:"30px"}} mt={{md:"30px",xs:"20px"}} width={{md:"90%"}} height={{md:'50px'}}>
             <Typography fontSize={{md:"22px",xs:"16px"}} fontFamily={{md:"Roboto",xs:"Roboto"}} fontWeight={{md:"bold",xs:"bold"}}>Total</Typography>
             <Typography fontSize={{md:"22px",xs:"16px"}} fontFamily={{md:"Roboto",xs:"Roboto"}} color={{md:"#6610f2"}}>€33.60</Typography>
             

           </Stack>
           <hr/>
           <Button
            sx={{
              "&:hover": {
                backgroundColor: "#6610f2",
                color: "#fff",
              },
              backgroundColor: { md: " #6610f2", xs: " #6610f2" },
              padding: { md: "10px", xs: "5px" },
              width: { md: "80%", xs: "280px" },
              borderRadius: { md: "25px", xs: "25px" },
              fontSize: { md: "18px", xs: "10px" },
              color: { md: "#fff", xs: "#fff" },
              fontFamily:{md:"Roboto",xs:"Roboto"}     ,         marginLeft:{md:"60px",xs:"0px"},
              mb:{md:"20px"},
              mt:{md:"20px",xs:"20px"},
              fontWeight:{md:"bold",xs:"bold"},

            }}
            onClick={() => navigate("/checkout")}
          >
            Order Place
          </Button>

           </Stack>
          <Stack>

          

          </Stack>

          </Stack>


      </Container>
    </Grid>
  )
}

export default CheckOut