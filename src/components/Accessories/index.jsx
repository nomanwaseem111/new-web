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

import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import { Link } from "react-router-dom"
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
      // backgroundColor={{md:"yellow",xs:"green"}}
     
      
    >
      <Container maxWidth="xl" sx={{mb:{xs:"100px",md:"100px"}}} >
        {/* <Stack
          direction="row"
          height="100px"
          backgroundColor="#f7f7f7"
          justifyContent="center"
          alignItems="center"
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
            Accessories
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
              }}
            >
              Categories
            </Typography>
            <Stack sx={{ mt: { md: "30px", xs: "20px" } }}>
              <Box>
                <Checkbox />{" "}
                <Typography
                  variant="span"
                  sx={{ fontSize: { md: "20px", xs: "16px" } }}
                >
                  All Categories
                </Typography>
              </Box>
              <Box mt="15px">
                <Checkbox />{" "}
                <Typography
                  variant="span"
                  fontSize={{ md: "20px", xs: "16px" }}
                  fontFamily="sans-serif"
                >
                  Fashion
                </Typography>
              </Box>
              <Box mt="15px">
                <Checkbox />{" "}
                <Typography
                  variant="span"
                  fontSize={{ md: "20px", xs: "16px" }}
                  fontFamily="sans-serif"
                >
                  Men
                </Typography>
              </Box>
              <Box mt="15px">
                <Checkbox />{" "}
                <Typography
                  variant="span"
                  fontSize={{ md: "20px", xs: "16px" }}
                  fontFamily="sans-serif"
                >
                  Women
                </Typography>
              </Box>
              <Box mt="15px">
                <Checkbox />{" "}
                <Typography
                  variant="span"
                  fontSize={{ md: "20px", xs: "16px" }}
                  fontFamily="sans-serif"
                >
                  Electronics
                </Typography>
              </Box>
              <Box mt="15px">
                <Checkbox />{" "}
                <Typography
                  variant="span"
                  fontSize={{ md: "20px", xs: "16px" }}
                  fontFamily="sans-serif"
                >
                  Furniture
                </Typography>
              </Box>
              <Box mt="15px">
                <Checkbox />{" "}
                <Typography
                  variant="span"
                  fontSize={{ md: "20px", xs: "16px" }}
                  fontFamily="sans-serif"
                >
                  Flower
                </Typography>
              </Box>
              <Box mt="15px">
                <Checkbox />{" "}
                <Typography
                  variant="span"
                  fontSize={{ md: "20px", xs: "16px" }}
                  fontFamily="sans-serif"
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
            >
              Colors
            </Typography>
            <Stack mt="30px">
              <Box>
                <Checkbox />{" "}
                <Typography
                  variant="span"
                  sx={{ fontSize: { md: "20px", xs: "16px" } }}
                >
                  All Colors
                </Typography>
              </Box>
              <Box mt="15px">
                <Checkbox />{" "}
                <Typography
                  variant="span"
                  sx={{ fontSize: { md: "20px", xs: "16px" } }}
                  fontFamily="sans-serif"
                >
                  White
                </Typography>
              </Box>
              <Box mt="15px">
                <Checkbox />{" "}
                <Typography
                  variant="span"
                  sx={{ fontSize: { md: "20px", xs: "16px" } }}
                  fontFamily="sans-serif"
                >
                  Black
                </Typography>
              </Box>
              <Box mt="15px">
                <Checkbox />{" "}
                <Typography
                  variant="span"
                  sx={{ fontSize: { md: "20px", xs: "16px" } }}
                  fontFamily="sans-serif"
                >
                  Blue
                </Typography>
              </Box>
              <Box mt="15px">
                <Checkbox />{" "}
                <Typography
                  variant="span"
                  sx={{ fontSize: { md: "20px", xs: "16px" } }}
                  fontFamily="sans-serif"
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
            >
              Size
            </Typography>
            <Stack mt="30px">
              <Box>
                <Checkbox />{" "}
                <Typography
                  variant="span"
                  sx={{ fontSize: { md: "20px", xs: "16px" } }}
                >
                  All Sizes
                </Typography>
              </Box>
              <Box mt="15px">
                <Checkbox />{" "}
                <Typography
                  variant="span"
                  sx={{ fontSize: { md: "20px", xs: "16px" } }}
                  fontFamily="sans-serif"
                >
                  X
                </Typography>
              </Box>
              <Box mt="15px">
                <Checkbox />{" "}
                <Typography
                  variant="span"
                  sx={{ fontSize: { md: "20px", xs: "16px" } }}
                  fontFamily="sans-serif"
                >
                  M
                </Typography>
              </Box>
              <Box mt="15px">
                <Checkbox />{" "}
                <Typography
                  variant="span"
                  sx={{ fontSize: { md: "20px", xs: "16px" } }}
                  fontFamily="sans-serif"
                >
                  XL
                </Typography>
              </Box>
              <Box mt="15px">
                <Checkbox />{" "}
                <Typography
                  variant="span"
                  sx={{ fontSize: { md: "20px", xs: "16px" } }}
                  fontFamily="sans-serif"
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
              <Box width={{ md: "800px", xs: "200px" }} display="flex">
                <FormControl
                  sx={{ width: { md: "350px", xs: "200px" } }}
                  ml={{ md: "70px", xs: "0px" }}
                 
                >
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={price}
                    onChange={handleChange}
                  >
                    <MenuItem
                      value={10}
                      textAlign="center"
                      sx={{ fontSize: "22px" }}
                    >
                      Default
                    </MenuItem>
                    <MenuItem value={20} sx={{ fontSize: "22px" }}>
                      Price-High to Low
                    </MenuItem>
                    <MenuItem value={30} sx={{ fontSize: "22px" }}>
                      Price-Low to High
                    </MenuItem>
                  </Select>
                </FormControl>
                <Box
                  sx={{
                    width: { md: "250px", xs: "200px" },
                    fontSize: { md: "20px", xs: "14px" },
                    pr: { xs: "150px", md: "0px" },
                    height: { xs: "30px" },
                  }}
                  fontFamily="sans-serif"
                  margin="auto"
                  color="#606060"
                  textAlign="center"
                >
                  {" "}
                  Showing 15 of 144 result
                </Box>
              </Box>
            </Stack>

            <Stack
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
               width={{ md: "auto", xs: "300px" }}
                ml={{ md: "5px" }}
                height={{ md: "500px", xs: "400px" }}
                textAlign={{ md: "center", xs: "center" }}
                mt={{xs:"20px"}}
              >
                <Box
                  component="img"
                  src="https://www.i4u.com.pk/upload_new/32-inch-Android-32U870-L.webp"
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
                width={{ md: "auto", xs: "300px" }}
                ml={{ md: "5px" }}
                height={{ md: "500px", xs: "400px" }}
                textAlign={{ md: "center", xs: "center" }}
                mt={{xs:"20px"}}
              >
                <Box
                  component="img"
                  src="https://www.i4u.com.pk/upload_new/samsung-85qn85a.webp"
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
                  width={{ md: "auto", xs: "300px" }}
                ml={{ md: "5px" }}
                height={{ md: "500px", xs: "400px" }}
                textAlign={{ md: "center", xs: "center" }}
                mt={{xs:"20px"}}
              >
                <Box
                  component="img"
                  src="https://www.i4u.com.pk/upload_new/samsung-75au7000.webp"
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
              width={{ md: "auto", xs: "300px" }}
                ml={{ md: "5px" }}
                height={{ md: "500px", xs: "400px" }}
                textAlign={{ md: "center", xs: "center" }}
                mt={{xs:"20px"}}

              >
                <Box
                  component="img"
                  src="https://www.i4u.com.pk/upload_new/samsung-65au7000.webp"
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
                 width={{ md: "auto", xs: "300px" }}
                ml={{ md: "5px" }}
                height={{ md: "500px", xs: "400px" }}
                textAlign={{ md: "center", xs: "center" }}
                mt={{xs:"20px"}}
              >
                <Box
                  component="img"
                  src="https://www.i4u.com.pk/upload_new/hisense-49e5100-ex-basic.webp"
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
                  width={{ md: "auto", xs: "300px" }}
                ml={{ md: "5px" }}
                height={{ md: "500px", xs: "400px" }}
                textAlign={{ md: "center", xs: "center" }}
                mt={{xs:"20px"}}
              >
                <Box
                  component="img"
                  src="https://www.i4u.com.pk/upload_new/hisense-50a7400-f-4k-android-smart.webp"
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
                 width={{ md: "auto", xs: "300px" }}
                ml={{ md: "5px" }}
                height={{ md: "500px", xs: "400px" }}
                textAlign={{ md: "center", xs: "center" }}
                mt={{xs:"20px"}}
              >
                <Box
                  component="img"
                  src="https://www.i4u.com.pk/upload_new/TCL-55C735.webp"
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
                 width={{ md: "auto", xs: "300px" }}
                ml={{ md: "5px" }}
                height={{ md: "500px", xs: "400px" }}
                textAlign={{ md: "center", xs: "center" }}
                mt={{xs:"20px"}}
              >
                <Box
                  component="img"
                  src="https://www.i4u.com.pk/upload_new/H50K66UGP.webp"
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
                 width={{ md: "auto", xs: "300px" }}
                ml={{ md: "5px" }}
                height={{ md: "500px", xs: "400px" }}
                textAlign={{ md: "center", xs: "center" }}
                mt={{xs:"20px"}}
              >
                <Box
                  component="img"
                  src="https://www.i4u.com.pk/upload_new/Canon-80-D-18-55mm-L.webp"
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
                 width={{ md: "auto", xs: "300px" }}
                ml={{ md: "5px" }}
                height={{ md: "500px", xs: "400px" }}
                textAlign={{ md: "center", xs: "center" }}
                mt={{xs:"20px"}}
              >
                <Box
                  component="img"
                  src="https://www.i4u.com.pk/upload_new/Nikon-Mirrorless-Z7-with-KIT-L.webp"
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
              width={{ md: "auto", xs: "300px" }}
                ml={{ md: "5px" }}
                height={{ md: "500px", xs: "400px" }}
                textAlign={{ md: "center", xs: "center" }}
                mt={{xs:"20px"}}
              >
                <Box
                  component="img"
                  src="https://www.i4u.com.pk/upload_new/Canon-Mirrorless-EOS-M50-L.webp"
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
                width={{ md: "auto", xs: "300px" }}
                ml={{ md: "5px" }}
                height={{ md: "500px", xs: "400px" }}
                textAlign={{ md: "center", xs: "center" }}
                mt={{xs:"20px"}}
              >
                <Box
                  component="img"
                  src="https://www.i4u.com.pk/upload_new/Nikon-DSLR-D750-24-120-KIT-L.webp"
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

             
             
              
            </Stack>

            <Stack
              width={{md:"100%",xs:"100%"}}
              alignItems="center"
              textAlign="center"
              height="auto"
              sx={{mt:{md:"100px",xs:"30px"},mb:{md:"50px",xs:"50px"}}}
              
            >
              <Pagination count={10} color="secondary"  sx={{size:{md:"large",xs:"small"}}} />
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Grid>
  )
}

export default Accessories
