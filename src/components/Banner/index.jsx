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
    <Grid sx={{ height:{md:"auto"} ,backgroundColor:{md:"#f0e0ff",xs:"#f0e0ff"}}}>
      <Container maxWidth="xl"  >
        <Stack sx={{ width: { md: "100%", sm: "100%", lg: "100%" } ,height:{xs:"535px",md:"760px"} }}>
          <Stack
            direction={{ md: "row", xs: "column" }}
            m={{ md: "20px" }}
            textAlign={{ md: "start", xs: "center" }}
            mt={{xs:"30px"}}
          >
            <Box
              sx={{
                width: { md: "100%", xs: "100%" },
                height: { md: "400px" },
                mt:{md:"200px"}
                
              }}
            >
              <Typography
                variant="span"
                sx={{ fontSize: { lg: "30px", md: "20", xs: "14px" } ,lineHeight:{xs:"2px"} }}
              >
                Smart Products
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { lg: "90px", md: "80px", xs: "40px" },
                  fontWeight: { lg: "600", md: "300", xs: "700" },
                }}
              >
                Winter Offer <br /> 2024 Collection
              </Typography>
              <Button
                className="shopNow"
                sx={{ width: { md: "220px", xs: "120px" },
                   mt:{md:"30px",xs:"10px"},
                   ml:{md:"10px",md:"5px"},
                   border:{md:"1px solid black",xs:"1px solid black"},
                   padding:{md:"10px",xs:"10px"},
                   color:{md:"black",xs:"black"},
                   fontSize:{md:"20px",xs:"14px"},
                   
                 }}
              >
                Shop Now
              </Button>
            </Box>
            <Box
              component="img"
              src="https://flone.jamstacktemplates.dev/assets/img/slider/single-slide-hm1-2.png"
              sx={{
                width: { md: "700px", xs: "300px" },
                
                m: { xs: "auto" },
                mt:{xs:"40px"},
                
              }}
            />
          </Stack>
        </Stack>
      </Container>
    </Grid>
  )
}

export default Banner
