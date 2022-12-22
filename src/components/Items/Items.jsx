import React from 'react'
import Rating from "@mui/material/Rating"
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

import { useNavigate } from "react-router-dom"


const Items = () => {
  
    const navigate = useNavigate()

  
    return (
    <div>
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
                width={{ md: "auto", xs: "100%" }}
                ml={{ md: "5px",xs:'0px' }}
                height={{ md: "500px", xs: "400px" }}
                textAlign={{ md: "center", xs: "center" }}
                mt={{ xs: "20px" }}
                // border={{md:"1px solid black",xs:"1px solid black"}}
              >
                <Box
                  component="img"
                  src="https://www.i4u.com.pk/upload_new/32-inch-Android-32U870-L.webp"
                  sx={{ width: { md: "350px", xs: "290px" },marginRight:{md:"0px",xs:"50px"} }}
                  onClick={() => navigate("/product")}
                />
                <Box>
                  <Typography
                    component="p"
                    sx={{
                      fontSize: { md: "22px", xs: "18" },
                      mt: { md: "22px", xs: "5px" },
                      fontFamily:{md:"Roboto",xs:"Roboto"}

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
                mt={{ xs: "20px" }}


              >
                <Box
                  component="img"
                  src="https://www.i4u.com.pk/upload_new/samsung-85qn85a.webp"
                  sx={{ width: { md: "350px", xs: "290px" },marginRight:{md:"0px",xs:"50px"} }}
                  onClick={() => navigate("/product")}

                />
                <Box>
                  <Typography
                    component="p"
                    sx={{
                      fontSize: { md: "22px", xs: "18" },
                      mt: { md: "22px", xs: "5px" },
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
                mt={{ xs: "20px" }}

              >
                <Box
                  component="img"
                  src="https://www.i4u.com.pk/upload_new/samsung-75au7000.webp"
                  sx={{ width: { md: "350px", xs: "290px" },marginRight:{md:"0px",xs:"50px"} }}
                  onClick={() => navigate("/product")}

                />
                <Box>
                  <Typography
                    component="p"
                    sx={{
                      fontSize: { md: "22px", xs: "18" },
                      mt: { md: "22px", xs: "5px" },
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
                mt={{ xs: "20px" }}

              >
                <Box
                  component="img"
                  src="https://www.i4u.com.pk/upload_new/samsung-65au7000.webp"
                  sx={{ width: { md: "350px", xs: "290px" },marginRight:{md:"0px",xs:"50px"} }}
                  onClick={() => navigate("/product")}

                />
                <Box>
                  <Typography
                    component="p"
                    sx={{
                      fontSize: { md: "22px", xs: "18" },
                      mt: { md: "22px", xs: "5px" },
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
                mt={{ xs: "20px" }}

              >
                <Box
                  component="img"
                  src="https://www.i4u.com.pk/upload_new/hisense-49e5100-ex-basic.webp"
                  sx={{ width: { md: "350px", xs: "290px" },marginRight:{md:"0px",xs:"50px"} }}
                  onClick={() => navigate("/product")}

                />
                <Box>
                  <Typography
                    component="p"
                    sx={{
                      fontSize: { md: "22px", xs: "18" },
                      mt: { md: "22px", xs: "5px" },
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
                mt={{ xs: "20px" }}

              >
                <Box
                  component="img"
                  src="https://www.i4u.com.pk/upload_new/hisense-50a7400-f-4k-android-smart.webp"
                  sx={{ width: { md: "350px", xs: "290px" },marginRight:{md:"0px",xs:"50px"} }}
                  onClick={() => navigate("/product")}

                />
                <Box>
                  <Typography
                    component="p"
                    sx={{
                      fontSize: { md: "22px", xs: "18" },
                      mt: { md: "22px", xs: "5px" },
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
                mt={{ xs: "20px" }}

              >
                <Box
                  component="img"
                  src="https://www.i4u.com.pk/upload_new/TCL-55C735.webp"
                  sx={{ width: { md: "350px", xs: "290px" },marginRight:{md:"0px",xs:"50px"} }}
                  onClick={() => navigate("/product")}

                />
                <Box>
                  <Typography
                    component="p"
                    sx={{
                      fontSize: { md: "22px", xs: "18" },
                      mt: { md: "22px", xs: "5px" },
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
                mt={{ xs: "20px" }}

              >
                <Box
                  component="img"
                  src="https://www.i4u.com.pk/upload_new/H50K66UGP.webp"
                  sx={{ width: { md: "350px", xs: "290px" },marginRight:{md:"0px",xs:"50px"} }}
                  onClick={() => navigate("/product")}

                />
                <Box>
                  <Typography
                    component="p"
                    sx={{
                      fontSize: { md: "22px", xs: "18" },
                      mt: { md: "22px", xs: "5px" },
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
                mt={{ xs: "20px" }}

              >
                <Box
                  component="img"
                  src="https://www.i4u.com.pk/upload_new/Canon-80-D-18-55mm-L.webp"
                  sx={{ width: { md: "350px", xs: "290px" },marginRight:{md:"0px",xs:"50px"} }}
                  onClick={() => navigate("/product")}

                />
                <Box>
                  <Typography
                    component="p"
                    sx={{
                      fontSize: { md: "22px", xs: "18" },
                      mt: { md: "22px", xs: "5px" },
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
                mt={{ xs: "20px" }}

              >
                <Box
                  component="img"
                  src="https://www.i4u.com.pk/upload_new/Nikon-Mirrorless-Z7-with-KIT-L.webp"
                  sx={{ width: { md: "350px", xs: "290px" },marginRight:{md:"0px",xs:"50px"} }}
                  onClick={() => navigate("/product")}

                />
                <Box>
                  <Typography
                    component="p"
                    sx={{
                      fontSize: { md: "22px", xs: "18" },
                      mt: { md: "22px", xs: "5px" },
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
                mt={{ xs: "20px" }}

              >
                <Box
                  component="img"
                  src="https://www.i4u.com.pk/upload_new/Canon-Mirrorless-EOS-M50-L.webp"
                  sx={{ width: { md: "350px", xs: "290px" },marginRight:{md:"0px",xs:"50px"} }}
                  onClick={() => navigate("/product")}

                />
                <Box>
                  <Typography
                    component="p"
                    sx={{
                      fontSize: { md: "22px", xs: "18" },
                      mt: { md: "22px", xs: "5px" },
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
                mt={{ xs: "20px" }}

              >
                <Box
                  component="img"
                  src="https://www.i4u.com.pk/upload_new/Nikon-DSLR-D750-24-120-KIT-L.webp"
                  sx={{ width: { md: "350px", xs: "290px" },marginRight:{md:"0px",xs:"50px"} }}
                  onClick={() => navigate("/product")}

                />
                <Box>
                  <Typography
                    component="p"
                    sx={{
                      fontSize: { md: "22px", xs: "18" },
                      mt: { md: "22px", xs: "5px" },
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
      
    </div>
  )
}

export default Items
