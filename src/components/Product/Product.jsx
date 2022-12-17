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
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import Divider from "@mui/material/Divider"
import InboxIcon from "@mui/icons-material/Inbox"
import DraftsIcon from "@mui/icons-material/Drafts"
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight"
import MenuItem from "@mui/material/MenuItem"
import Button from "@mui/material/Button"

import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import { Link, useNavigate } from "react-router-dom"
import { height } from "@mui/system"
const Product = () => {
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
      <Container maxWidth="xl" sx={{ mb: { xs: "100px", md: "100px" } }}>
        <Stack
          direction={{ md: "row", xs: "column" }}
          sx={{
            width: { md: "auto", xs: "auto" },
            height: { md: "850px", xs: "auto" },
            mt: { md: "100px", xs: "50px" },
            // border:{md:"1px solid black",xs:"1px solid black"}
          }}
        >
          <Stack
            sx={{
              width: { md: "50%" },
              height: { md: "800px" },
            }}
          >
            <Box
              component="img"
              src="https://www.i4u.com.pk/upload_new/Iphone-13-128GB.webp"
              mt={{ md: "50px" }}
              mb={{ md: "30px", xs: "20px" }}
              ml={{ md: "75px" }}
              sx={{
                width: { md: "600px", xs: "325px" },
                height: { md: "auto", xs: "auto" },
              }}
            />
            <Stack direction={{ md: "row", xs: "row" }}>
              <Box
                component="img"
                src="data:image/jpeg;base64,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"
                src="https://imageio.forbes.com/specials-images/imageserve/60a91f9a5f6002a4c8174108/Apple--iPhone--iPhone-13--new-iPhone--iPhone-upgrade--pink-iPhone--iPhone-13-release-/0x0.jpg?format=jpg&crop=1077,1013,x139,y0,safe&width=960"
                height={{ md: "195px", xs: "100px" }}
                width={{ md: "170px", xs: "80px" }}
              />
              <Box
                component="img"
                ml={{ md: "10px", xs: "5px" }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQekCxWprTMaejwBRmWbEs2kXyYhRHVrW0u9w&usqp=CAU"
                height={{ md: "195px", xs: "100px" }}
                width={{ md: "200px", xs: "80px" }}
              />
              <Box
                component="img"
                ml={{ md: "10px", xs: "5px" }}
                src="data:image/jpeg;base64,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"
                height={{ md: "195px", xs: "100px" }}
                width={{ md: "200px", xs: "70px" }}
              />

              <Box
                component="img"
                ml={{ md: "10px", xs: "5px" }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgGY2vxHM2gdCtTllDL4TV5eCMBDU3rLiXTw&usqp=CAU"
                height={{ md: "195px", xs: "100px" }}
                width={{ md: "200px", xs: "80px" }}
              />
            </Stack>
          </Stack>
          <Stack
            sx={{
              width: { md: "700px" },
              height: { md: "850px", xs: "auto" },
              // border:{md:"1px solid red",xs:"1px solid red"},
              mt: { xs: "50px", md: "0px" },
              mb: { xs: "100px", md: "0px" },
              ml: { md: "45px" },
            }}
          >
            <Box height={{ md: "680px" }} mt={{ md: "50px" }}>
              <Typography
                variant="h3"
                pl={{ md: "50px" }}
                sx={{ fontSize: { xs: "28px", md: "50px" } }}
              >
                Apple iPhone 13 128GB
              </Typography>
              <Rating
                name="size-large"
                defaultValue={2}
                size="large"
                sx={{ mt: { md: "20px", xs: "20px" }, ml: { md: "30px" } }}
              />
              <Typography
                variant="h3"
                mt="20px"
                mb="10px"
                pl={{ md: "50px" }}
                sx={{ fontSize: { xs: "28px", md: "50px" } }}
              >
                $129.00
              </Typography>
              <hr />
              <Typography
                variant="h5"
                mt="15px"
                pl={{ md: "50px" }}
                sx={{ fontSize: { xs: "18px", md: "24px" } }}
              >
                Product Description{" "}
              </Typography>
              <Typography
                variant="h6"
                mt="10px"
                mb="10px"
                pl={{ md: "50px" }}
                sx={{ fontSize: { xs: "14px", md: "22px" } }}
              >
                Apple iphone 13 128GB is available on affordable installment in
                Karachi.
              </Typography>
              <hr />
              <Typography
                variant="h5"
                mt="15px"
                pl={{ md: "50px" }}
                sx={{ fontSize: { xs: "16px", md: "24px" } }}
              >
                Product Features
              </Typography>
              <nav aria-label="main mailbox folders">
                <List>
                  <ListItem disablePadding sx={{ pl: { md: "50px" } }}>
                    <ListItemButton>
                      <ListItemIcon>
                        <KeyboardArrowRightIcon />
                      </ListItemIcon>
                      <ListItemText
                        sx={{ fontSize: { md: "normal", xs: "10px" } }}
                        primary="ROM 128GB"
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding sx={{ pl: { md: "50px" } }}>
                    <ListItemButton>
                      <ListItemIcon>
                        <KeyboardArrowRightIcon />
                      </ListItemIcon>
                      <ListItemText primary="Rear Camera 12.0 MP+12.0 MP" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding sx={{ pl: { md: "50px" } }}>
                    <ListItemButton>
                      <ListItemIcon>
                        <KeyboardArrowRightIcon />
                      </ListItemIcon>
                      <ListItemText primary="Front Camera 12.0 MP" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding sx={{ pl: { md: "50px" } }}>
                    <ListItemButton>
                      <ListItemIcon>
                        <KeyboardArrowRightIcon />
                      </ListItemIcon>
                      <ListItemText primary="A15 Bionic chip" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding sx={{ pl: { md: "50px" } }}>
                    <ListItemButton>
                      <ListItemIcon>
                        <KeyboardArrowRightIcon />
                      </ListItemIcon>
                      <ListItemText primary="Single Sim & eSim" />
                    </ListItemButton>
                  </ListItem>
                </List>
              </nav>
              <Stack
                direction="row"
                justifyContent="space-between"
                padding="10px"
                marginLeft={{ md: "50px", xs: "0px" }}
              >
                <Typography variant="h6" width="100px" padding="10px">
                  Quantity
                </Typography>
                <FormControl
                  sx={{ width: { md: "80px" }, height: {} }}
                  ml={{ md: "20px" }}
                >
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={price}
                    onChange={handleChange}
                    sx={{ height: { md: "50px", xs: "40px" } }}
                    label="0"
                  >
                    <MenuItem
                      value={10}
                      textAlign="center"
                      sx={{ fontSize: "22px" }}
                    >
                      1
                    </MenuItem>
                    <MenuItem value={20} sx={{ fontSize: "22px" }}>
                      2
                    </MenuItem>
                    <MenuItem value={30} sx={{ fontSize: "22px" }}>
                      3
                    </MenuItem>
                  </Select>
                </FormControl>
              </Stack>
              <Button
                variant="contained"
                onClick={() => navigate("/cartsection")}
                sx={{    "&:hover": {
                backgroundColor: "#fff",
                color: "orange",
                border:"2px solid orange",
                fontWeight:"bold"
              },
                  backgroundColor: { md: "orange", xs: "orange" },
                  marginLeft: { md: "50px", xs: "10px" },
                  width: { md: "220px", xs: "120px" },
                  height: { md: "50px", xs: "40px" },
                  fontSize: { md: "18px", xs: "12px" },
                  mt: { md: "20px" },
                  mb: { xs: "10px", md: "0px" },
                  border: { md: "none", xs: "none" },
                  borderRadius: { md: "0px", xs: "0px" },
                }}
              >
                Add to Cart
              </Button>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Grid>
  )
}

export default Product
