import React from "react"
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import { Typography } from "@mui/material"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import { height, lineHeight } from "@mui/system"

const Banner = () => {
  return (
    <Grid sx={{ height: { md: "auto" }  , backgroundColor: { md: "#f0e0ff", xs: "#f0e0ff",sm:"f0e0ff" } }}>
      <Container maxWidth="xl" width={{xs:"100%"}} >
        <Stack sx={{ width: { md: "100%", xs: "100%", lg: "100%" }, height: { xs: "565px", md: "760px" } }}>
          <Stack
            direction={{ md: "row", xs: "column" }}
            m={{ md: "20px" }}
            textAlign={{ md: "start", xs: "center" }}
            mt={{ xs: "30px" }}
            // sx={{ border: { xs: "1px solid black" } }}

          >
            <Box
              sx={{
                width: { md: "100%", xs: "100%" },
                height: { md: "400px", xs: "200px" },
                mt: { md: "200px" },
                // border: { xs: "1px solid black" }

              }}
            >
              <Typography
                variant="span"
                sx={{
                  fontSize: { lg: "30px", md: "20", xs: "14px" },
                  
                }}
              >
                Smart Products
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { lg: "90px", md: "80px", xs: "40px" },
                  fontWeight: { lg: "600", md: "300", xs: "700" },
                  mt:{xs:"10px"}
                }}
              >
                Winter Offer <br /> 2024 Collection
              </Typography>
              <Button
                className="shopNow"
                sx={{
                  width: { md: "220px", xs: "100px" },
                  mt: { md: "30px", xs: "10px" },
                  ml: { md: "10px", xs: "5px" },
                  border: { md: "1px solid black", xs: "1px solid black" },
                  padding: { md: "10px", xs: "10px" },
                  color: { md: "black", xs: "black" },
                  fontSize: { md: "20px", xs: "12px" },

                }}
              >
                Shop Now
              </Button>
            </Box>
            <Box
              component="img"
              src="https://flone.jamstacktemplates.dev/assets/img/slider/single-slide-hm1-2.png"
              sx={{
                width: { md: "900px", xs: "330px" },

                m: { xs: "auto" },
                mt: { xs: "10px" },

              }}
            />
          </Stack>
        </Stack>
      </Container>
    </Grid>
  )
}

export default Banner