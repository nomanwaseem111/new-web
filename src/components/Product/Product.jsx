import React, { useState } from "react"
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import FacebookIcon from "@mui/icons-material/Facebook"
import { Typography } from "@mui/material"
import InstagramIcon from "@mui/icons-material/Instagram"
import TwitterIcon from "@mui/icons-material/Twitter"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import { useNavigate, useLocation } from "react-router-dom"

const Product = () => {
  const navigate = useNavigate()

  const { state } = useLocation()

  console.log(state)
  const [num, setNum] = useState(0)

  return (
    <>
      <Stack marginTop={{ md: "80px", xs: "80px" }}>
        <Stack
          direction={{ md: "row", xs: "column" }}
          sx={{
            width: { md: "80%", xs: "90%" },
            height: { md: "700px", xs: "auto" },
            margin: { md: "auto", xs: "auto" },
          }}
        >
          <Stack
            className="left"
            sx={{ width: { md: "50%" }, height: { md: "700px" } }}
          >
            <Box
              component="img"
              src={state.img}
              alt="img"
              sx={{
                width: { md: "650px", xs: "320px" },
                height: { md: "auto" },
              }}
            />
          </Stack>
          <Stack
            className="right"
            sx={{
              pt: { md: "50px", xs: "30px" },
              width: { md: "50%" },
              height: { md: "700px" },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontSize: { md: "25px", xs: "16px" },
                fontFamily: { md: "Roboto", xs: "Roboto" },
                fontWeight: { md: "bold", xs: "bold" },
              }}
            >
              {state.title}
            </Typography>

            <Typography
              variant="h5"
              sx={{
                fontSize: { md: "40px", xs: "30px" },
                fontFamily: { md: "Roboto", xs: "Roboto" },
                mt: { md: "20px", xs: "15px" },
              }}
            >
              Rs: {state.price}
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontSize: { md: "18px", xs: "12px" },
                lineHeight: { xs: "20px", md: "25px" },
                mt: { md: "20px", xs: "15px" },
                fontFamily: { md: "Roboto", xs: "Roboto" },
              }}
            >
              {state.description}{" "}
            </Typography>
            <Stack
              direction={{ md: "row", xs: "row" }}
              mt={{ md: "70px", xs: "40px" }}
              alignItems="center"
            >
              <Stack direction={{ md: "row", xs: "row" }}>
                {/* <Typography
                  sx={{
                    border: {
                      md: "1px solid #b4b8b5",
                      xs: "1px solid #b4b8b5",
                    },
                    pt: { md: "6px", xs: "5px" },
                    fontSize: { md: "25px" },
                    textAlign: { md: "center", xs: "center" },
                    width: { md: "60px", xs: "30px" },
                    height: { md: "60px", xs: "40px" },
                  }}
                >
                  -
                </Typography>
                <Typography
                  sx={{
                    border: {
                      md: "1px solid #b4b8b5",
                      xs: "1px solid #b4b8b5",
                    },
                    pt: { md: "6px", xs: "5px" },
                    fontSize: { md: "25px" },
                    textAlign: { md: "center", xs: "center" },
                    width: { md: "80px", xs: "50px" },
                    height: { md: "60px", xs: "40px" },
                  }}
                >
                  5
                </Typography>
                <Typography
                  sx={{
                    border: {
                      md: "1px solid #b4b8b5",
                      xs: "1px solid #b4b8b5",
                    },
                    pt: { md: "6px", xs: "5px" },
                    fontSize: { md: "25px" },
                    textAlign: { md: "center", xs: "center" },
                    width: { md: "60px", xs: "30px" },
                    height: { md: "60px", xs: "40px" },
                  }}
                >
                  +
                </Typography> */}
                <Button
                  sx={{
                    width: { md: "60px", xs: "5px" },
                    height: { md: "60px", xs: "40px" },
                    border: {
                      md: "1px solid #b4b8b5",
                      xs: "1px solid #b4b8b5",
                    },
                    fontSize: { md: "30px", xs: "20px" },
                    fontWeight: { md: "500", xs: "500" },
                  }}
                  fontFamily={{ md: "Roboto", xs: "Roboto" }}
                  onClick={() => setNum(num - 1)}
                >
                  -
                </Button>
                <Typography
                  variant="span"
                  sx={{
                    height: { md: "60px", xs: "40px" },
                    border: {
                      md: "1px solid #b4b8b5",
                      xs: "1px solid #b4b8b5",
                    },
                    width: { md: "100px", xs: "60px" },
                    textAlign: { md: "center", xs: "center" },
                    pt: { md: "10px", xs: "10px" },
                    fontSize: { md: "25px", xs: "16px" },
                    fontWeight: { md: "500", xs: "500" },
                  }}
                  fontFamily={{ md: "Roboto", xs: "Roboto" }}
                >
                  {num}
                </Typography>
                <Button
                  sx={{
                    width: { md: "60px", xs: "5px" },
                    height: { md: "60px", xs: "40px" },
                    border: {
                      md: "1px solid #b4b8b5",
                      xs: "1px solid #b4b8b5",
                    },
                    fontSize: { md: "30px", xs: "15px" },
                    fontWeight: { md: "500", xs: "500" },
                  }}
                  fontFamily={{ md: "Roboto", xs: "Roboto" }}
                  onClick={() => setNum(num + 1)}
                >
                  +
                </Button>
              </Stack>
              <Button
                onClick={() => navigate("/cartS")}
                sx={{
                  marginLeft: { md: "30px", xs: "20px" },
                  width: { md: "180px", xs: "150" },
                  backgroundColor: { md: "#6610f2", xs: "#6610f2" },
                  color: { md: "#fff", xs: "#fff" },
                  // mt: { md: "50px", xs: "50px" },
                  fontFamily: { md: "Roboto", xs: "Roboto" },
                  fontSize: { md: "16px", xs: "10px" },
                  height: { md: "60px", xs: "40px" },
                  "&:hover": {
                    backgroundColor: "#6610f2",

                    color: "#fff",
                    border: "none",
                  },
                }}
              >
                <ShoppingCartIcon
                  sx={{
                    fontSize: { md: "30px", xs: "20px" },
                    mr: { md: "5px", xs: "5px" },
                  }}
                />{" "}
                Add to Cart
              </Button>
            </Stack>
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: "14px", md: "20px" },
                mt: { md: "30px", xs: "25px" },
                mb: { md: "30px", xs: "20px" },
              }}
            >
              Category : {state.category}
            </Typography>
            <stack>
              <Typography
                variant="span"
                sx={{ fontSize: { md: "22px", xs: "16px" } }}
              >
                Share:
              </Typography>
              <FacebookIcon
                sx={{
                  marginLeft: { md: "20px", xs: "20px" },
                  fontSize: { xs: "16px", md: "20px" },
                }}
              />
              <InstagramIcon
                sx={{
                  marginLeft: { md: "10px", xs: "10px" },
                  fontSize: { xs: "16px", md: "20px" },
                }}
              />
              <TwitterIcon
                sx={{
                  marginLeft: { md: "10px", xs: "10px" },
                  fontSize: { xs: "16px", md: "20px" },
                }}
              />
              <LinkedInIcon
                sx={{
                  marginLeft: { md: "10px", xs: "10px" },
                  fontSize: { xs: "16px", md: "20px" },
                }}
              />
            </stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  )
}
export default Product
