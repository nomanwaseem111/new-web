import React from "react"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import TextField from "@mui/material/TextField"
import Checkbox from "@mui/material/Checkbox"
import Box from "@mui/material/Box"
import Pagination from "@mui/material/Pagination"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import WindowIcon from '@mui/icons-material/Window';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import AppsIcon from '@mui/icons-material/Apps';

import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import { Link } from "react-router-dom"
import Mobile from "../../components/mobileItems/Mobile"
const Accessories = () => {
  const [price, setPrice] = React.useState("")

  const handleChange = (event) => {
    setPrice(event.target.value)
  }

  return (
    <Grid
      sx={{
        height: { md: "auto" },
      }}
    >
      <Container maxWidth="xl"  backgroundColor={{md:"yellow",xs:"blue"}} sx={{mb:{xs:"100px",md:"100px"}}}>
        {/* <Stack
          direction="row"
          width="100%"
          height="100px"
          backgroundColor="#f7f7f7"
          justifyContent="center"
          alignItems="center"
          mt={{md:"3px",xs:"3px"}}
          // border="1px solid black"
        >
          <Typography
            component={Link}
            to="/"
            fontSize={{md:"25px",xs:"18px"}}
            sx={{
              textDecoration: "none",
              color: "black",
              
              mr: "10px",
              fontFamily: "sans-serif",
            }}
          >
            Home
          </Typography>
          <Typography>
            <i class="fa-sharp fa-solid fa-slash-forward"></i>
          </Typography>
          <Typography
            variant="span"
            fontSize={{md:"25px",xs:"18px"}}

            sx={{
              textDecoration: "none",
              fontFamily: "sans-serif",
              mr: "10px",
            }}
          >
            Mobile
          </Typography>
        </Stack> */}

        <Stack
          direction={{ md: "row", xs: "column" }}
          
          margin="auto"
          height="auto"
          mt="100px"
        >
          <Stack
            width={{ md: "25%", xs: "100%" }}
            height="auto"
            
          >
            <Typography
              variant="h5"
              ml="15px"
              fontSize={{ xs: "20px", md: "24px" }}
            >
              Search
            </Typography>
            <TextField
              id="outlined-basic"
              label="Search Here..."
              variant="outlined"
              sx={{
                width: { md: "300px", xs: "300px" },
                mt: { md: "20px", xs: "20px" },
                ml: { xs: "10px" },
              }}
            />
            {/* <SearchIcon sx={{ width: "50px", height: "40px", fontSize: "20px", position: "absolute", left: "400px", bottom: "380px", cursor: "pointer" }} /> */}
            <Typography
              variant="h5"
              ml="15px"
              sx={{
                mt: { md: "50px", xs: "30px" },
                fontSize: { md: "24px", xs: "20px" },
                fontFamily:{md:"Roboto",xs:"Roboto"}
              }}
            >
              Categories
            </Typography>
            <Stack sx={{ mt: { md: "30px", xs: "20px" }  }}>
              <Box>
                <Checkbox />{" "}
                <Typography
                  variant="span"
                  sx={{ fontSize: { md: "20px", xs: "16px" },                      fontFamily:{md:"Roboto",xs:"Roboto"}
 }}

                >
                  All Categories
                </Typography>
              </Box>
              <Box mt="15px">
                <Checkbox />{" "}
                <Typography
                  variant="span"
                  fontSize={{ md: "20px", xs: "16px" }}
                  fontFamily={{md:"Roboto",xs:"Roboto"}}
                >
                  Fashion
                </Typography>
              </Box>
              <Box mt="15px">
                <Checkbox />{" "}
                <Typography
                  variant="span"
                  fontSize={{ md: "20px", xs: "16px" }}
                  fontFamily={{md:"Roboto",xs:"Roboto"}}
                >
                  Men
                </Typography>
              </Box>
              <Box mt="15px">
                <Checkbox />{" "}
                <Typography
                  variant="span"
                  fontSize={{ md: "20px", xs: "16px" }}
                  fontFamily={{md:"Roboto",xs:"Roboto"}}
                >
                  Women
                </Typography>
              </Box>
              <Box mt="15px">
                <Checkbox />{" "}
                <Typography
                  variant="span"
                  fontSize={{ md: "20px", xs: "16px" }}
                  fontFamily={{md:"Roboto",xs:"Roboto"}}
                >
                  Electronics
                </Typography>
              </Box>
              <Box mt="15px">
                <Checkbox />{" "}
                <Typography
                  variant="span"
                  fontSize={{ md: "20px", xs: "16px" }}
                  fontFamily={{md:"Roboto",xs:"Roboto"}}
                >
                  Furniture
                </Typography>
              </Box>
              <Box mt="15px">
                <Checkbox />{" "}
                <Typography
                  variant="span"
                  fontSize={{ md: "20px", xs: "16px" }}
                  fontFamily={{md:"Roboto",xs:"Roboto"}}
                >
                  Flower
                </Typography>
              </Box>
              <Box mt="15px">
                <Checkbox />{" "}
                <Typography
                  variant="span"
                  fontSize={{ md: "20px", xs: "16px" }}
                  fontFamily={{md:"Roboto",xs:"Roboto"}}
                >
                  Kids
                </Typography>
              </Box>
            </Stack>
            <Typography
              variant="h5"
              mt="50px"
              ml="15px"
              fontSize={{ md: "24px", xs: "20px" }}
              fontFamily={{md:"Roboto",xs:"Roboto"}}

            >
              Colors
            </Typography>
            <Stack mt="30px">
              <Box>
                <Checkbox />{" "}
                <Typography
                  variant="span"
                  sx={{ fontSize: { md: "20px", xs: "16px" } }}
                  fontFamily={{md:"Roboto",xs:"Roboto"}}

                >
                  All Colors
                </Typography>
              </Box>
              <Box mt="15px">
                <Checkbox />{" "}
                <Typography
                  variant="span"
                  sx={{ fontSize: { md: "20px", xs: "16px" } }}
                  fontFamily={{md:"Roboto",xs:"Roboto"}}
                >
                  White
                </Typography>
              </Box>
              <Box mt="15px">
                <Checkbox />{" "}
                <Typography
                  variant="span"
                  sx={{ fontSize: { md: "20px", xs: "16px" } }}
                  fontFamily={{md:"Roboto",xs:"Roboto"}}
                >
                  Black
                </Typography>
              </Box>
              <Box mt="15px">
                <Checkbox />{" "}
                <Typography
                  variant="span"
                  sx={{ fontSize: { md: "20px", xs: "16px" } }}
                  fontFamily={{md:"Roboto",xs:"Roboto"}}
                >
                  Blue
                </Typography>
              </Box>
              <Box mt="15px">
                <Checkbox />{" "}
                <Typography
                  variant="span"
                  sx={{ fontSize: { md: "20px", xs: "16px" } }}
                  fontFamily={{md:"Roboto",xs:"Roboto"}}
                >
                  Brown
                </Typography>
              </Box>
            </Stack>
            <Typography
              variant="h5"
              mt="50px"
              ml="15px"
              fontSize={{ md: "24px", xs: "20px" }}
              fontFamily={{md:"Roboto",xs:"Roboto"}}

            >
              Size
            </Typography>
            <Stack mt="30px">
              <Box>
                <Checkbox />{" "}
                <Typography
                  variant="span"
                  sx={{ fontSize: { md: "20px", xs: "16px" } }}
                  fontFamily={{md:"Roboto",xs:"Roboto"}}

                >
                  All Sizes
                </Typography>
              </Box>
              <Box mt="15px">
                <Checkbox />{" "}
                <Typography
                  variant="span"
                  sx={{ fontSize: { md: "20px", xs: "16px" } }}
                  fontFamily={{md:"Roboto",xs:"Roboto"}}
                >
                  X
                </Typography>
              </Box>
              <Box mt="15px">
                <Checkbox />{" "}
                <Typography
                  variant="span"
                  sx={{ fontSize: { md: "20px", xs: "16px" } }}
                  fontFamily={{md:"Roboto",xs:"Roboto"}}
                >
                  M
                </Typography>
              </Box>
              <Box mt="15px">
                <Checkbox />{" "}
                <Typography
                  variant="span"
                  sx={{ fontSize: { md: "20px", xs: "16px" } }}
                  fontFamily={{md:"Roboto",xs:"Roboto"}}
                >
                  XL
                </Typography>
              </Box>
              <Box mt="15px">
                <Checkbox />{" "}
                <Typography
                  variant="span"
                  sx={{ fontSize: { md: "20px", xs: "16px" } }}
                  fontFamily={{md:"Roboto",xs:"Roboto"}}
                >
                  XXL
                </Typography>
              </Box>
            </Stack>

            <Typography
              variant="h5"
              mt="50px"
              ml="15px"
              fontSize={{ md: "24px", xs: "20px" }}
              fontFamily={{md:"Roboto",xs:"Roboto"}}

            >
              Tags
            </Typography>
            <Stack direction="row" flexWrap="wrap">
              <Typography
                component={Link}
                sx={{
                  textDecoration: "none",
                  backgroundColor: "#f6f6f6",
                  color: "#424242",
                  mt: "20px",
                  mx: "10px",
                  border: "none",
                  width: "auto",
                  padding: "10px",
                  borderRadius: "50px",
                  textAlign: "center",
                  "&:hover": { backgroundColor: "#a749ff", color: "#fff" },
                }}
                fontSize={{ md: "18px", xs: "16px" }}
                fontFamily={{md:"Roboto",xs:"Roboto"}}

              >
                Food
              </Typography>
              <Typography
                component={Link}
                sx={{
                  textDecoration: "none",
                  backgroundColor: "#f6f6f6",
                  color: "#424242",
                  mt: "20px",
                  mx: "10px",
                  border: "none",
                  width: "auto",
                  padding: "10px",
                  borderRadius: "50px",
                  textAlign: "center",
                  "&:hover": { backgroundColor: "#a749ff", color: "#fff" },
                }}
                fontSize={{ md: "18px", xs: "16px" }}
                fontFamily={{md:"Roboto",xs:"Roboto"}}

              >
                Organic Food
              </Typography>
              <Typography
                component={Link}
                sx={{
                  textDecoration: "none",
                  backgroundColor: "#f6f6f6",
                  color: "#424242",
                  mt: "20px",
                  mx: "10px",
                  border: "none",
                  width: "auto",
                  padding: "10px",
                  borderRadius: "50px",
                  textAlign: "center",
                  "&:hover": { backgroundColor: "#a749ff", color: "#fff" },
                }}
                fontSize={{ md: "18px", xs: "16px" }}
                fontFamily={{md:"Roboto",xs:"Roboto"}}

              >
                Games
              </Typography>
              <Typography
                component={Link}
                sx={{
                  textDecoration: "none",
                  backgroundColor: "#f6f6f6",
                  color: "#424242",
                  mt: "20px",
                  mx: "10px",
                  border: "none",
                  width: "auto",
                  padding: "10px",
                  borderRadius: "50px",
                  textAlign: "center",
                  "&:hover": { backgroundColor: "#a749ff", color: "#fff" },
                }}
                fontSize={{ md: "18px", xs: "16px" }}
                fontFamily={{md:"Roboto",xs:"Roboto"}}

              >
                Electroics
              </Typography>
              <Typography
                component={Link}
                sx={{
                  textDecoration: "none",
                  backgroundColor: "#f6f6f6",
                  color: "#424242",
                  mt: "20px",
                  mx: "10px",
                  border: "none",
                  width: "auto",
                  padding: "10px",
                  borderRadius: "50px",
                  textAlign: "center",
                  "&:hover": { backgroundColor: "#a749ff", color: "#fff" },
                }}
                fontSize={{ md: "18px", xs: "16px" }}
                fontFamily={{md:"Roboto",xs:"Roboto"}}

              >
                Accessories
              </Typography>
              <Typography
                component={Link}
                sx={{
                  textDecoration: "none",
                  backgroundColor: "#f6f6f6",
                  color: "#424242",
                  mt: "20px",
                  mx: "10px",
                  border: "none",
                  width: "auto",
                  padding: "10px",
                  borderRadius: "50px",
                  textAlign: "center",
                  "&:hover": { backgroundColor: "#a749ff", color: "#fff" },
                }}
                fontSize={{ md: "18px", xs: "16px" }}
                fontFamily={{md:"Roboto",xs:"Roboto"}}

              >
                Mobile
              </Typography>
              <Typography
                component={Link}
                sx={{
                  textDecoration: "none",
                  backgroundColor: "#f6f6f6",
                  color: "#424242",
                  mt: "20px",
                  mx: "10px",
                  border: "none",
                  width: "auto",
                  padding: "10px",
                  borderRadius: "50px",
                  textAlign: "center",
                  "&:hover": { backgroundColor: "#a749ff", color: "#fff" },
                }}
                fontSize={{ md: "18px", xs: "16px" }}
                fontFamily={{md:"Roboto",xs:"Roboto"}}

              >
                Mobile
              </Typography>
              <Typography
                component={Link}
                sx={{
                  textDecoration: "none",
                  backgroundColor: "#f6f6f6",
                  color: "#424242",
                  mt: "20px",
                  mx: "10px",
                  border: "none",
                  width: "auto",
                  padding: "10px",
                  borderRadius: "50px",
                  textAlign: "center",
                  "&:hover": { backgroundColor: "#a749ff", color: "#fff" },
                }}
                fontSize={{ md: "18px", xs: "16px" }}
                fontFamily={{md:"Roboto",xs:"Roboto"}}

              >
                TV
              </Typography>
              <Typography
                component={Link}
                sx={{
                  textDecoration: "none",
                  backgroundColor: "#f6f6f6",
                  color: "#424242",
                  mt: "20px",
                  mx: "10px",
                  border: "none",
                  width: "auto",
                  padding: "10px",
                  borderRadius: "50px",
                  textAlign: "center",
                  "&:hover": { backgroundColor: "#a749ff", color: "#fff" },
                }}
                fontSize={{ md: "18px", xs: "16px" }}
                fontFamily={{md:"Roboto",xs:"Roboto"}}

              >
                Watches
              </Typography>
              <Typography
                component={Link}
                sx={{
                  textDecoration: "none",
                  backgroundColor: "#f6f6f6",
                  color: "#424242",
                  mt: "20px",
                  mx: "10px",
                  border: "none",
                  width: "auto",
                  padding: "10px",
                  borderRadius: "50px",
                  textAlign: "center",
                  "&:hover": { backgroundColor: "#a749ff", color: "#fff" },
                }}
                fontSize={{ md: "18px", xs: "16px" }}
                fontFamily={{md:"Roboto",xs:"Roboto"}}

              >
                Clothing
              </Typography>
              <Typography
                component={Link}
                sx={{
                  textDecoration: "none",
                  backgroundColor: "#f6f6f6",
                  color: "#424242",
                  mt: "20px",
                  mx: "10px",
                  border: "none",
                  width: "auto",
                  padding: "10px",
                  borderRadius: "50px",
                  textAlign: "center",
                  "&:hover": { backgroundColor: "#a749ff", color: "#fff" },
                }}
                fontSize={{ md: "18px", xs: "16px" }}
                fontFamily={{md:"Roboto",xs:"Roboto"}}

              >
                Laptop
              </Typography>
              <Typography
                component={Link}
                sx={{
                  textDecoration: "none",
                  backgroundColor: "#f6f6f6",
                  color: "#424242",
                  mt: "20px",
                  mx: "10px",
                  border: "none",
                  width: "auto",
                  padding: "10px",
                  borderRadius: "50px",
                  textAlign: "center",
                  "&:hover": { backgroundColor: "#a749ff", color: "#fff" },
                }}
                fontSize={{ md: "18px", xs: "16px" }}
                fontFamily={{md:"Roboto",xs:"Roboto"}}

              >
                Keyboard
              </Typography>
              <Typography
                component={Link}
                sx={{
                  textDecoration: "none",
                  backgroundColor: "#f6f6f6",
                  color: "#424242",
                  mt: "20px",
                  mx: "10px",
                  border: "none",
                  width: "auto",
                  padding: "10px",
                  borderRadius: "50px",
                  textAlign: "center",
                  "&:hover": { backgroundColor: "#a749ff", color: "#fff" },
                }}
                fontSize={{ md: "18px", xs: "16px" }}
                fontFamily={{md:"Roboto",xs:"Roboto"}}

              >
                Makeup
              </Typography>
            </Stack>
          </Stack>

          <Stack mt={{ xs: "100px", md: "0px" }}>
            <Stack
              direction={{ md: "row", xs: "column" }}
              justifyContent="space-between"
              ml={{md:"40px"}}
            >
                <Box width={{ md: "95%", xs: "95%" }} display={{md:"flex"}}>
                <FormControl
                  sx={{ width: { md: "350px", xs: "320px" } }}
                  ml={{ md: "70px", xs: "0px" }}


                >
                  <Select
                    labelId="default"
                    id="default"
                    value={price}
                    onChange={handleChange}
                    height={{md:"20px"}}
                    sx={{height:{md:'40px',xs:"40px"},width:{md:"250px",xs:"80%"},marginLeft:{md:"0px",xs:"0px"}}}

                  >
                    <MenuItem
                      value={10}
                      textAlign="center"
                      sx={{ fontSize: "22px" }}
                      fontFamily={{ md: "Roboto", xs: "Roboto" }}

                    >
                      Default
                    </MenuItem>
                    <MenuItem value={20} sx={{ fontSize: "22px" }}
                      fontFamily={{ md: "Roboto", xs: "Roboto" }}

                    >
                      Price-High to Low
                    </MenuItem>
                    <MenuItem value={30} sx={{ fontSize: "22px" }}
                      fontFamily={{ md: "Roboto", xs: "Roboto" }}

                    >
                      Price-Low to High
                    </MenuItem>
                  </Select>

                </FormControl>
                 <Box
                  sx={{
                    width: { md: "250px", xs: "200px" },
                    fontSize: { md: "20px", xs: "14px" },
                   
                    height: { xs: "30px" },
                  }}
                  fontFamily="sans-serif"
                  margin="auto"
                  color="#606060"
                  textAlign="center"
                  marginRight={{md:"550px",xs:"200px"}}
                  mt={{md:"5px",xs:"10px"}}
                >
                  {" "}
                  Showing 15 of 144 result
                </Box> 
                <Stack direction={{md:"row",xs:"row"}}  marginLeft={{md:"0px",xs:"30px"}}>
                <WindowIcon sx={{fontSize:{md:"30px"}}}/>
                <AppsIcon sx={{fontSize:{md:"30px"},marginLeft:{md:"0px",xs:"10px"}}}/>
                <ViewHeadlineIcon sx={{fontSize:{md:"30px"},marginLeft:{md:"0px",xs:"10px"}}} />
</Stack>
              </Box>
            </Stack>

            {/* <Stack
              direction={{ md: "row", xs: "column" }}
              height="auto"
              sx={{
                width: { md: "100%", xs: "100%" },
                mt: { md: "30px", xs: "20px" },
              }}
              px="20px"
              justifyContent="space-around"
              flexWrap="wrap"
              margin="auto"
            >
              <Box
               width={{ md: "auto", xs: "100%" }}
                ml={{ md: "5px" }}
                height={{ md: "500px", xs: "400px" }}
                textAlign={{ md: "center", xs: "center" }}
                mt={{xs:"40px"}}
                // border={{xs:"1px solid black"}}
              >
                <Box
                  component="img"
                  src="https://www.i4u.com.pk/upload_new/Samsung-A32-6GB-128GB-L.webp"
                  sx={{ width: { md: "350px", xs: "300px" } }}
                />
                <Box>
                  <Typography
                    component="p"
                    sx={{
                      fontSize: { md: "22px", xs: "18" },
                      mt: { md: "22px", xs: "10px" },
                    }}
                  >
                    Lorem ipsum fashion female top
                  </Typography>
                  <Rating
                    name="size-large"
                    defaultValue={2}
                    size="large"
                    sx={{ mt: "10px" }}
                  />

                  <Typography
                    component="p"
                    sx={{
                      fontSize: { md: "22px", xs: "18px" },
                      mt: { md: "8px", xs: "15px" },
                    }}
                  >
                    €35.6
                  </Typography>
                </Box>
              </Box>

              <Box
               width={{ md: "auto", xs: "100%" }}
                ml={{ md: "5px" }}
                height={{ md: "500px", xs: "400px" }}
                textAlign={{ md: "center", xs: "center" }}
                mt={{xs:"40px"}}
              >
                <Box
                  component="img"
                  src="https://www.i4u.com.pk/upload_new/Iphone-13-512GB.webp"
                  sx={{ width: { md: "350px", xs: "300px" } }}
                />
                <Box>
                  <Typography
                    component="p"
                    sx={{
                      fontSize: { md: "22px", xs: "18" },
                      mt: { md: "22px", xs: "10px" },
                    }}
                  >
                    Lorem ipsum fashion female top
                  </Typography>
                  <Rating
                    name="size-large"
                    defaultValue={2}
                    size="large"
                    sx={{ mt: "10px" }}
                  />

                  <Typography
                    component="p"
                    sx={{
                      fontSize: { md: "22px", xs: "18px" },
                      mt: { md: "8px", xs: "15px" },
                    }}
                  >
                    €35.6
                  </Typography>
                </Box>
              </Box>

              <Box
               width={{ md: "auto", xs: "100%" }}
                ml={{ md: "5px" }}
                height={{ md: "500px", xs: "400px" }}
                textAlign={{ md: "center", xs: "center" }}
                mt={{xs:"40px"}}
              >
                <Box
                  component="img"
                  src="https://www.i4u.com.pk/upload_new/Vivo-V23-5G-12gb-256gb.webp"
                  sx={{ width: { md: "350px", xs: "300px" } }}
                />
                <Box>
                  <Typography
                    component="p"
                    sx={{
                      fontSize: { md: "22px", xs: "18" },
                      mt: { md: "22px", xs: "10px" },
                    }}
                  >
                    Lorem ipsum fashion female top
                  </Typography>
                  <Rating
                    name="size-large"
                    defaultValue={2}
                    size="large"
                    sx={{ mt: "10px" }}
                  />

                  <Typography
                    component="p"
                    sx={{
                      fontSize: { md: "22px", xs: "18px" },
                      mt: { md: "8px", xs: "15px" },
                    }}
                  >
                    €35.6
                  </Typography>
                </Box>
              </Box>

              <Box
               width={{ md: "auto", xs: "100%" }}
                ml={{ md: "5px" }}
                height={{ md: "500px", xs: "400px" }}
                textAlign={{ md: "center", xs: "center" }}
                mt={{xs:"40px"}}

              >
                <Box
                  component="img"
                  src="https://www.i4u.com.pk/upload_new/Vivo-X80-12GB-256GB.webp"
                  sx={{ width: { md: "350px", xs: "300px" } }}
                />
                <Box>
                  <Typography
                    component="p"
                    sx={{
                      fontSize: { md: "22px", xs: "18" },
                      mt: { md: "22px", xs: "10px" },
                    }}
                  >
                    Lorem ipsum fashion female top
                  </Typography>
                  <Rating
                    name="size-large"
                    defaultValue={2}
                    size="large"
                    sx={{ mt: "10px" }}
                  />

                  <Typography
                    component="p"
                    sx={{
                      fontSize: { md: "22px", xs: "18px" },
                      mt: { md: "8px", xs: "15px" },
                    }}
                  >
                    €35.6
                  </Typography>
                </Box>
              </Box>

              <Box
               width={{ md: "auto", xs: "100%" }}
                ml={{ md: "5px" }}
                height={{ md: "500px", xs: "400px" }}
                textAlign={{ md: "center", xs: "center" }}
                mt={{xs:"40px"}}
              >
                <Box
                  component="img"
                  src="https://www.i4u.com.pk/upload_new/Vivo-X80-12GB-256GB.webp"
                  sx={{ width: { md: "350px", xs: "300px" } }}
                />
                <Box>
                  <Typography
                    component="p"
                    sx={{
                      fontSize: { md: "22px", xs: "18" },
                      mt: { md: "22px", xs: "10px" },
                    }}
                  >
                    Lorem ipsum fashion female top
                  </Typography>
                  <Rating
                    name="size-large"
                    defaultValue={2}
                    size="large"
                    sx={{ mt: "10px" }}
                  />

                  <Typography
                    component="p"
                    sx={{
                      fontSize: { md: "22px", xs: "18px" },
                      mt: { md: "8px", xs: "15px" },
                    }}
                  >
                    €35.6
                  </Typography>
                </Box>
              </Box>

              <Box
               width={{ md: "auto", xs: "100%" }}
                ml={{ md: "5px" }}
                height={{ md: "500px", xs: "400px" }}
                textAlign={{ md: "center", xs: "center" }}
                mt={{xs:"40px"}}
              >
                <Box
                  component="img"
                  src="https://www.i4u.com.pk/upload_new/Oppo-F21-Pro-8GB-128GB.webp"
                  sx={{ width: { md: "350px", xs: "300px" } }}
                />
                <Box>
                  <Typography
                    component="p"
                    sx={{
                      fontSize: { md: "22px", xs: "18" },
                      mt: { md: "22px", xs: "10px" },
                    }}
                  >
                    Lorem ipsum fashion female top
                  </Typography>
                  <Rating
                    name="size-large"
                    defaultValue={2}
                    size="large"
                    sx={{ mt: "10px" }}
                  />

                  <Typography
                    component="p"
                    sx={{
                      fontSize: { md: "22px", xs: "18px" },
                      mt: { md: "8px", xs: "15px" },
                    }}
                  >
                    €35.6
                  </Typography>
                </Box>
              </Box>

              <Box
               width={{ md: "auto", xs: "100%" }}
                ml={{ md: "5px" }}
                height={{ md: "500px", xs: "400px" }}
                textAlign={{ md: "center", xs: "center" }}
                mt={{xs:"40px"}}
              >
                <Box
                  component="img"
                  src="https://www.i4u.com.pk/upload_new/tecno-camon-19-pro-mondrian.webp"
                  sx={{ width: { md: "350px", xs: "300px" } }}
                />
                <Box>
                  <Typography
                    component="p"
                    sx={{
                      fontSize: { md: "22px", xs: "18" },
                      mt: { md: "22px", xs: "10px" },
                    }}
                  >
                    Lorem ipsum fashion female top
                  </Typography>
                  <Rating
                    name="size-large"
                    defaultValue={2}
                    size="large"
                    sx={{ mt: "10px" }}
                  />

                  <Typography
                    component="p"
                    sx={{
                      fontSize: { md: "22px", xs: "18px" },
                      mt: { md: "8px", xs: "15px" },
                    }}
                  >
                    €35.6
                  </Typography>
                </Box>
              </Box>

              <Box
               width={{ md: "auto", xs: "100%" }}
                ml={{ md: "5px" }}
                height={{ md: "500px", xs: "400px" }}
                textAlign={{ md: "center", xs: "center" }}
                mt={{xs:"40px"}}
              >
                <Box
                  component="img"
                  src="https://www.i4u.com.pk/upload_new/Infinix-Note-12.webp"
                  sx={{ width: { md: "350px", xs: "300px" } }}
                />
                <Box>
                  <Typography
                    component="p"
                    sx={{
                      fontSize: { md: "22px", xs: "18" },
                      mt: { md: "22px", xs: "10px" },
                    }}
                  >
                    Lorem ipsum fashion female top
                  </Typography>
                  <Rating
                    name="size-large"
                    defaultValue={2}
                    size="large"
                    sx={{ mt: "10px" }}
                  />

                  <Typography
                    component="p"
                    sx={{
                      fontSize: { md: "22px", xs: "18px" },
                      mt: { md: "8px", xs: "15px" },
                    }}
                  >
                    €35.6
                  </Typography>
                </Box>
              </Box>

              <Box
               width={{ md: "auto", xs: "100%" }}
                ml={{ md: "5px" }}
                height={{ md: "500px", xs: "400px" }}
                textAlign={{ md: "center", xs: "center" }}
                mt={{xs:"40px"}}
              >
                <Box
                  component="img"
                  src="https://www.i4u.com.pk/upload_new/Vivo-V23e.webp"
                  sx={{ width: { md: "350px", xs: "300px" } }}
                />
                <Box>
                  <Typography
                    component="p"
                    sx={{
                      fontSize: { md: "22px", xs: "18" },
                      mt: { md: "22px", xs: "10px" },
                    }}
                  >
                    Lorem ipsum fashion female top
                  </Typography>
                  <Rating
                    name="size-large"
                    defaultValue={2}
                    size="large"
                    sx={{ mt: "10px" }}
                  />

                  <Typography
                    component="p"
                    sx={{
                      fontSize: { md: "22px", xs: "18px" },
                      mt: { md: "8px", xs: "15px" },
                    }}
                  >
                    €35.6
                  </Typography>
                </Box>
              </Box>

              <Box
               width={{ md: "auto", xs: "100%" }}
                ml={{ md: "5px" }}
                height={{ md: "500px", xs: "400px" }}
                textAlign={{ md: "center", xs: "center" }}
                mt={{xs:"40px"}}
              >
                <Box
                  component="img"
                  src="https://www.i4u.com.pk/upload_new/Vivo-y35-8gb-128gb.webp"
                  sx={{ width: { md: "350px", xs: "300px" } }}
                />
                <Box>
                  <Typography
                    component="p"
                    sx={{
                      fontSize: { md: "22px", xs: "18" },
                      mt: { md: "22px", xs: "10px" },
                    }}
                  >
                    Lorem ipsum fashion female top
                  </Typography>
                  <Rating
                    name="size-large"
                    defaultValue={2}
                    size="large"
                    sx={{ mt: "10px" }}
                  />

                  <Typography
                    component="p"
                    sx={{
                      fontSize: { md: "22px", xs: "18px" },
                      mt: { md: "8px", xs: "15px" },
                    }}
                  >
                    €35.6
                  </Typography>
                </Box>
              </Box>

              <Box
               width={{ md: "auto", xs: "100%" }}
                ml={{ md: "5px" }}
                height={{ md: "500px", xs: "400px" }}
                textAlign={{ md: "center", xs: "center" }}
                mt={{xs:"40px"}}
              >
                <Box
                  component="img"
                  src="https://www.i4u.com.pk/upload_new/Iphone-13-128GB.webp"
                  sx={{ width: { md: "350px", xs: "300px" } }}
                />
                <Box>
                  <Typography
                    component="p"
                    sx={{
                      fontSize: { md: "22px", xs: "18" },
                      mt: { md: "22px", xs: "10px" },
                    }}
                  >
                    Lorem ipsum fashion female top
                  </Typography>
                  <Rating
                    name="size-large"
                    defaultValue={2}
                    size="large"
                    sx={{ mt: "10px" }}
                  />

                  <Typography
                    component="p"
                    sx={{
                      fontSize: { md: "22px", xs: "18px" },
                      mt: { md: "8px", xs: "15px" },
                    }}
                  >
                    €35.6
                  </Typography>
                </Box>
              </Box>

              <Box
               width={{ md: "auto", xs: "100%" }}
                ml={{ md: "5px" }}
                height={{ md: "500px", xs: "400px" }}
                textAlign={{ md: "center", xs: "center" }}
                mt={{xs:"40px"}}
              >
                <Box
                  component="img"
                  src="https://www.i4u.com.pk/upload_new/Iphone-13-256GB.webp"
                  sx={{ width: { md: "350px", xs: "300px" } }}
                />
                <Box>
                  <Typography
                    component="p"
                    sx={{
                      fontSize: { md: "22px", xs: "18" },
                      mt: { md: "22px", xs: "10px" },
                    }}
                  >
                    Lorem ipsum fashion female top
                  </Typography>
                  <Rating
                    name="size-large"
                    defaultValue={2}
                    size="large"
                    sx={{ mt: "10px" }}
                  />

                  <Typography
                    component="p"
                    sx={{
                      fontSize: { md: "22px", xs: "18px" },
                      mt: { md: "8px", xs: "15px" },
                    }}
                  >
                    €35.6
                  </Typography>
                </Box>
              </Box>

             
             
              
            </Stack> */}
            <Mobile/>

            <Stack
              width={{md:"100%",xs:"100%"}}
              alignItems="center"
              textAlign="center"
              height="auto"
              sx={{mt:{md:"100px",xs:"80px"},mb:{md:"50px",xs:"50px"}}}
              
            >
              <Pagination count={10} color="secondary" sx={{ width:{xs:"105%",md:"30%"},ml:{xs:"0px",md:"100px"}  }} />
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Grid>
  )
}

export default Accessories
