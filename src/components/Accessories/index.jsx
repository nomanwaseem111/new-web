import React from 'react'
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Pagination from '@mui/material/Pagination';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {

   Link
} from "react-router-dom";
const Accessories = () => {

   const [price, setPrice] = React.useState('');

   const handleChange = (event) => {
      setPrice(event.target.value);
   };


   return (
      <>
         <Stack direction="row" width="100%" height="100px" backgroundColor="#f7f7f7" justifyContent="center" alignItems="center">
            <Typography component={Link} to="/" sx={{ textDecoration: "none", color: "black", fontSize: "25px", mr: "10px", fontFamily: "sans-serif" }}>Home</Typography><Typography><i class="fa-sharp fa-solid fa-slash-forward"></i></Typography><Typography variant="span" sx={{ textDecoration: "none", fontFamily: "sans-serif", fontSize: "25px", mr: "10px" }}>Accessories</Typography>
         </Stack>


         <Stack direction="row" width="90%" margin="auto" height="auto" mt="100px">
            <Stack width="25%" height="auto" >
               <Typography variant='h5' ml="15px">Search</Typography>
               <TextField id="outlined-basic" label="Search Here..." variant="outlined" sx={{ width: "340px", mt: "20px", mx: "15px" }} />
               <SearchIcon sx={{ width: "50px", height: "40px", fontSize: "20px", position: "absolute", left: "400px", bottom: "380px", cursor: "pointer" }} />
               <Typography variant='h5' mt="50px" ml="15px">Categories</Typography>
               <Stack mt="20px" >
                  <Box ><Checkbox /> <Typography variant='span' fontSize="20px">All Categories</Typography></Box>
                  <Box mt="15px"><Checkbox /> <Typography variant='span' fontSize="20px" fontFamily="sans-serif">Fashion</Typography></Box>
                  <Box mt="15px"><Checkbox /> <Typography variant='span' fontSize="20px" fontFamily="sans-serif">Men</Typography></Box>
                  <Box mt="15px"><Checkbox /> <Typography variant='span' fontSize="20px" fontFamily="sans-serif">Women</Typography></Box>
                  <Box mt="15px"><Checkbox /> <Typography variant='span' fontSize="20px" fontFamily="sans-serif">Electronics</Typography></Box>
                  <Box mt="15px"><Checkbox /> <Typography variant='span' fontSize="20px" fontFamily="sans-serif">Furniture</Typography></Box>
                  <Box mt="15px"><Checkbox /> <Typography variant='span' fontSize="20px" fontFamily="sans-serif">Flower</Typography></Box>
                  <Box mt="15px"><Checkbox /> <Typography variant='span' fontSize="20px" fontFamily="sans-serif">Kids</Typography></Box>


               </Stack>
               <Typography variant='h5' mt="50px" ml="15px">Colors</Typography>
               <Stack mt="20px">
                  <Box ><Checkbox /> <Typography variant='span' fontSize="20px">All Colors</Typography></Box>
                  <Box mt="15px"><Checkbox /> <Typography variant='span' fontSize="20px" fontFamily="sans-serif">White</Typography></Box>
                  <Box mt="15px"><Checkbox /> <Typography variant='span' fontSize="20px" fontFamily="sans-serif">Black</Typography></Box>
                  <Box mt="15px"><Checkbox /> <Typography variant='span' fontSize="20px" fontFamily="sans-serif">Blue</Typography></Box>
                  <Box mt="15px"><Checkbox /> <Typography variant='span' fontSize="20px" fontFamily="sans-serif">Brown</Typography></Box>


               </Stack>
               <Typography variant='h5' mt="50px" ml="15px">Size</Typography>
               <Stack mt="20px">
                  <Box ><Checkbox /> <Typography variant='span' fontSize="20px">All Sizes</Typography></Box>
                  <Box mt="15px"><Checkbox /> <Typography variant='span' fontSize="20px" fontFamily="sans-serif">X</Typography></Box>
                  <Box mt="15px"><Checkbox /> <Typography variant='span' fontSize="20px" fontFamily="sans-serif">M</Typography></Box>
                  <Box mt="15px"><Checkbox /> <Typography variant='span' fontSize="20px" fontFamily="sans-serif">XL</Typography></Box>
                  <Box mt="15px"><Checkbox /> <Typography variant='span' fontSize="20px" fontFamily="sans-serif">XXL</Typography></Box>


               </Stack>


               <Typography variant='h5' mt="50px" ml="15px">Tags</Typography>
               <Stack direction="row" flexWrap="wrap">
                  <Typography component={Link} sx={{ textDecoration: "none", backgroundColor: "#f6f6f6", color: "#424242", mt: "20px", mx: "10px", border: "none", width: "auto", fontSize: "18px", padding: "10px", borderRadius: "50px", textAlign: "center", "&:hover": { backgroundColor: "#a749ff", color: "#fff" } }}>Food</Typography>
                  <Typography component={Link} sx={{ textDecoration: "none", backgroundColor: "#f6f6f6", color: "#424242", mt: "20px", mx: "10px", border: "none", width: "auto", fontSize: "18px", padding: "10px", borderRadius: "50px", textAlign: "center", "&:hover": { backgroundColor: "#a749ff", color: "#fff" } }}>Organic Food</Typography>
                  <Typography component={Link} sx={{ textDecoration: "none", backgroundColor: "#f6f6f6", color: "#424242", mt: "20px", mx: "10px", border: "none", width: "auto", fontSize: "18px", padding: "10px", borderRadius: "50px", textAlign: "center", "&:hover": { backgroundColor: "#a749ff", color: "#fff" } }}>Games</Typography>
                  <Typography component={Link} sx={{ textDecoration: "none", backgroundColor: "#f6f6f6", color: "#424242", mt: "20px", mx: "10px", border: "none", width: "auto", fontSize: "18px", padding: "10px", borderRadius: "50px", textAlign: "center", "&:hover": { backgroundColor: "#a749ff", color: "#fff" } }}>Electroics</Typography>
                  <Typography component={Link} sx={{ textDecoration: "none", backgroundColor: "#f6f6f6", color: "#424242", mt: "20px", mx: "10px", border: "none", width: "auto", fontSize: "18px", padding: "10px", borderRadius: "50px", textAlign: "center", "&:hover": { backgroundColor: "#a749ff", color: "#fff" } }}>Accessories</Typography>
                  <Typography component={Link} sx={{ textDecoration: "none", backgroundColor: "#f6f6f6", color: "#424242", mt: "20px", mx: "10px", border: "none", width: "auto", fontSize: "18px", padding: "10px", borderRadius: "50px", textAlign: "center", "&:hover": { backgroundColor: "#a749ff", color: "#fff" } }}>Mobile</Typography>
                  <Typography component={Link} sx={{ textDecoration: "none", backgroundColor: "#f6f6f6", color: "#424242", mt: "20px", mx: "10px", border: "none", width: "auto", fontSize: "18px", padding: "10px", borderRadius: "50px", textAlign: "center", "&:hover": { backgroundColor: "#a749ff", color: "#fff" } }}>Mobile</Typography>
                  <Typography component={Link} sx={{ textDecoration: "none", backgroundColor: "#f6f6f6", color: "#424242", mt: "20px", mx: "10px", border: "none", width: "auto", fontSize: "18px", padding: "10px", borderRadius: "50px", textAlign: "center", "&:hover": { backgroundColor: "#a749ff", color: "#fff" } }}>TV</Typography>
                  <Typography component={Link} sx={{ textDecoration: "none", backgroundColor: "#f6f6f6", color: "#424242", mt: "20px", mx: "10px", border: "none", width: "auto", fontSize: "18px", padding: "10px", borderRadius: "50px", textAlign: "center", "&:hover": { backgroundColor: "#a749ff", color: "#fff" } }}>Watches</Typography>
                  <Typography component={Link} sx={{ textDecoration: "none", backgroundColor: "#f6f6f6", color: "#424242", mt: "20px", mx: "10px", border: "none", width: "auto", fontSize: "18px", padding: "10px", borderRadius: "50px", textAlign: "center", "&:hover": { backgroundColor: "#a749ff", color: "#fff" } }}>Clothing</Typography>
                  <Typography component={Link} sx={{ textDecoration: "none", backgroundColor: "#f6f6f6", color: "#424242", mt: "20px", mx: "10px", border: "none", width: "auto", fontSize: "18px", padding: "10px", borderRadius: "50px", textAlign: "center", "&:hover": { backgroundColor: "#a749ff", color: "#fff" } }}>Laptop</Typography>
                  <Typography component={Link} sx={{ textDecoration: "none", backgroundColor: "#f6f6f6", color: "#424242", mt: "20px", mx: "10px", border: "none", width: "auto", fontSize: "18px", padding: "10px", borderRadius: "50px", textAlign: "center", "&:hover": { backgroundColor: "#a749ff", color: "#fff" } }}>Keyboard</Typography>
                  <Typography component={Link} sx={{ textDecoration: "none", backgroundColor: "#f6f6f6", color: "#424242", mt: "20px", mx: "10px", border: "none", width: "auto", fontSize: "18px", padding: "10px", borderRadius: "50px", textAlign: "center", "&:hover": { backgroundColor: "#a749ff", color: "#fff" } }}>Makeup</Typography>

               </Stack>
            </Stack>





            <Stack>

               <Stack direction="row" justifyContent="space-between">
                  <Box   width="800px" display="flex"  >
                     <FormControl sx={{ width: "400px" ,ml:"70px"}} >
                        <Select
                           labelId="demo-simple-select-label"
                           id="demo-simple-select"
                           value={price}
                           onChange={handleChange}
                        >
                           <MenuItem value={10} textAlign="center" sx={{fontSize:'22px', }}>Default</MenuItem>
                           <MenuItem value={20} sx={{fontSize:'22px'}}>Price-High to Low</MenuItem>
                           <MenuItem value={30} sx={{fontSize:'22px'}}>Price-Low to High</MenuItem>
                        </Select>
                     </FormControl>
                     <Box   width="250px" textAlign="center" fontFamily="sans-serif" fontSize="20px" margin="auto" color="#606060"> Showing 15 of 144 result</Box>

                  </Box>
               </Stack>


               <Stack direction="row"  mt="50px" width="100%"  justifyContent="space-around" px="50px" flexWrap="wrap">



                  <Box mb="50px">
                     <img src="https://www.i4u.com.pk/upload_new/32-inch-Android-32U870-L.webp" width="350px" height="auto" alt="" />
                     <Box textAlign="center">
                        <Typography component="p" sx={{ fontSize: "22px", mt: "10px" }}>Lorem ipsum fashion female top</Typography>
                        <Rating name="size-large" defaultValue={2} size="large" sx={{ mt: "10px" }} />


                        <Typography component="p" sx={{ fontSize: "22px", mt: "8px" }}>€35.6</Typography>


                     </Box>
                  </Box>
                  <Box mb="50px">
                     <img src="https://www.i4u.com.pk/upload_new/samsung-85qn85a.webp" width="350px" height="auto" alt="" />
                     <Box textAlign="center">
                        <Typography component="p" sx={{ fontSize: "22px", mt: "10px" }}>Lorem ipsum fashion female top</Typography>
                        <Rating name="size-large" defaultValue={2} size="large" sx={{ mt: "10px" }} />


                        <Typography component="p" sx={{ fontSize: "22px", mt: "8px" }}>€35.6</Typography>


                     </Box>
                  </Box>
                  <Box mb="50px">
                     <img src="https://www.i4u.com.pk/upload_new/samsung-75au7000.webp" width="350px" height="auto" alt="" />
                     <Box textAlign="center">
                        <Typography component="p" sx={{ fontSize: "22px", mt: "10px" }}>Lorem ipsum fashion female top</Typography>
                        <Rating name="size-large" defaultValue={2} size="large" sx={{ mt: "10px" }} />


                        <Typography component="p" sx={{ fontSize: "22px", mt: "8px" }}>€35.6</Typography>


                     </Box>
                  </Box>
                  <Box mb="50px">
                     <img src="https://www.i4u.com.pk/upload_new/samsung-65au7000.webp" width="350px" height="auto" alt="" />
                     <Box textAlign="center">
                        <Typography component="p" sx={{ fontSize: "22px", mt: "10px" }}>Lorem ipsum fashion female top</Typography>
                        <Rating name="size-large" defaultValue={2} size="large" sx={{ mt: "10px" }} />


                        <Typography component="p" sx={{ fontSize: "22px", mt: "8px" }}>€35.6</Typography>


                     </Box>
                  </Box>
                  <Box mb="50px">
                     <img src="https://www.i4u.com.pk/upload_new/hisense-49e5100-ex-basic.webp" width="350px" height="auto" alt="" />
                     <Box textAlign="center">
                        <Typography component="p" sx={{ fontSize: "22px", mt: "10px" }}>Lorem ipsum fashion female top</Typography>
                        <Rating name="size-large" defaultValue={2} size="large" sx={{ mt: "10px" }} />


                        <Typography component="p" sx={{ fontSize: "22px", mt: "8px" }}>€35.6</Typography>


                     </Box>
                  </Box>
                  <Box mb="50px">
                     <img src="https://www.i4u.com.pk/upload_new/hisense-50a7400-f-4k-android-smart.webp" width="350px" height="auto" alt="" />
                     <Box textAlign="center">
                        <Typography component="p" sx={{ fontSize: "22px", mt: "10px" }}>Lorem ipsum fashion female top</Typography>
                        <Rating name="size-large" defaultValue={2} size="large" sx={{ mt: "10px" }} />


                        <Typography component="p" sx={{ fontSize: "22px", mt: "8px" }}>€35.6</Typography>


                     </Box>
                  </Box>
                  <Box mb="50px">
                     <img src="https://www.i4u.com.pk/upload_new/TCL-55C735.webp" width="350px" height="auto" alt="" />
                     <Box textAlign="center">
                        <Typography component="p" sx={{ fontSize: "22px", mt: "10px" }}>Lorem ipsum fashion female top</Typography>
                        <Rating name="size-large" defaultValue={2} size="large" sx={{ mt: "10px" }} />


                        <Typography component="p" sx={{ fontSize: "22px", mt: "8px" }}>€35.6</Typography>


                     </Box>
                  </Box>
                  <Box mb="50px">
                     <img src="https://www.i4u.com.pk/upload_new/H50K66UGP.webp" width="350px" height="auto" alt="" />
                     <Box textAlign="center">
                        <Typography component="p" sx={{ fontSize: "22px", mt: "10px" }}>Lorem ipsum fashion female top</Typography>
                        <Rating name="size-large" defaultValue={2} size="large" sx={{ mt: "10px" }} />


                        <Typography component="p" sx={{ fontSize: "22px", mt: "8px" }}>€35.6</Typography>


                     </Box>
                  </Box>
                  <Box mb="50px">
                     <img src="https://www.i4u.com.pk/upload_new/Canon-80-D-18-55mm-L.webp" width="350px" height="auto" alt="" />
                     <Box textAlign="center">
                        <Typography component="p" sx={{ fontSize: "22px", mt: "10px" }}>Lorem ipsum fashion female top</Typography>
                        <Rating name="size-large" defaultValue={2} size="large" sx={{ mt: "10px" }} />


                        <Typography component="p" sx={{ fontSize: "22px", mt: "8px" }}>€35.6</Typography>


                     </Box>
                  </Box>
                  <Box mb="50px">
                     <img src="https://www.i4u.com.pk/upload_new/Nikon-Mirrorless-Z7-with-KIT-L.webp" width="350px" height="auto" alt="" />
                     <Box textAlign="center">
                        <Typography component="p" sx={{ fontSize: "22px", mt: "10px" }}>Lorem ipsum fashion female top</Typography>
                        <Rating name="size-large" defaultValue={2} size="large" sx={{ mt: "10px" }} />


                        <Typography component="p" sx={{ fontSize: "22px", mt: "8px" }}>€35.6</Typography>


                     </Box>
                  </Box>
                  <Box mb="50px">
                     <img src="https://www.i4u.com.pk/upload_new/Canon-Mirrorless-EOS-M50-L.webp" width="350px" height="auto" alt="" />
                     <Box textAlign="center">
                        <Typography component="p" sx={{ fontSize: "22px", mt: "10px" }}>Lorem ipsum fashion female top</Typography>
                        <Rating name="size-large" defaultValue={2} size="large" sx={{ mt: "10px" }} />


                        <Typography component="p" sx={{ fontSize: "22px", mt: "8px" }}>€35.6</Typography>


                     </Box>
                  </Box>
                  <Box mb="50px">
                     <img src="https://www.i4u.com.pk/upload_new/Nikon-DSLR-D750-24-120-KIT-L.webp" width="350px" height="auto" alt="" />
                     <Box textAlign="center">
                        <Typography component="p" sx={{ fontSize: "22px", mt: "10px" }}>Lorem ipsum fashion female top</Typography>
                        <Rating name="size-large" defaultValue={2} size="large" sx={{ mt: "10px" }} />


                        <Typography component="p" sx={{ fontSize: "22px", mt: "8px" }}>€35.6</Typography>


                     </Box>
                  </Box>
               </Stack>
               <Stack  width="100%" alignItems="center" textAlign="center" height="auto"  mt="50px">
               <Pagination count={10} color="secondary"  size="large"/>
 
               </Stack>
            </Stack>
         </Stack>
      </>
   )
}

export default Accessories