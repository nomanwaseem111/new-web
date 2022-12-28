import React, { useEffect } from "react"
import Rating from "@mui/material/Rating"
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import img1 from "../../assets/accessories/acc1.webp"
import img2 from "../../assets/accessories/acc2.webp"
import img3 from "../../assets/accessories/acc3.webp"
import img4 from "../../assets/accessories/acc4.webp"
import img5 from "../../assets/accessories/acc5.webp"
import img6 from "../../assets/accessories/acc6.webp"

import { useNavigate } from "react-router-dom"
import Product from "../CartSection/cartsection"
import PRODUCT from "../../api/product.json"
import { element } from "prop-types"

const Items = () => {
  const navigate = useNavigate()

  useEffect(() => {})

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
              ></Typography>
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
