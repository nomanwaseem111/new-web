import React from "react"
import Rating from "@mui/material/Rating"
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"


import { useNavigate } from "react-router-dom"
import PRODUCT from "../../api/product.json"

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
        {PRODUCT.map((item) => (
          <Box
            width={{ md: "auto", xs: "100%" }}
            ml={{ md: "5px", xs: "0px" }}
            height={{ md: "500px", xs: "400px" }}
            textAlign={{ md: "center", xs: "center" }}
            mt={{ xs: "30px", md: "42px" }}
            // border={{md:"1px solid black",xs:"1px solid black"}}
          >
            <Box
              component="img"
              src={item.img}
              sx={{
                width: { md: "350px", xs: "290px" },
                transition: { md: "all ease 0.3s" },
                "&:hover": { transform: "scale(1.1)" },
              }}
              onClick={() =>
                navigate(`/product/${item.id}`, {
                  state: {
                    name:item.name,
                    title: item.title,
                    description: item.description,
                    img: item.img,
                    price: item.price,
                    category: item.category,
                  },
                })
              }
            />
            <Box>
              <Typography
                component="p"
                sx={{
                  fontSize: { md: "22px", xs: "18" },
                  mt: { md: "22px", xs: "5px" },
                  fontFamily: { md: "Roboto", xs: "Roboto" },
                }}
              
              >{item.name}</Typography>
              <Rating
                name="size-large"
                defaultValue={item.rating}
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
                Rs: {item.price}
              </Typography>
            </Box>
          </Box>
        ))}
      </Stack>
    </div>
  )
}

export default Items
