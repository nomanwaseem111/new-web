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
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import MenuItem from "@mui/material/MenuItem"
import Button from "@mui/material/Button"

import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import { Link } from "react-router-dom"
import { height } from "@mui/system"
const Product = () => {
  
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
      <Container maxWidth="xl" sx={{ mb: { xs: "100px", md: "100px" } }}>
        <Stack
          direction="row"
          sx={{
            width: { md: "auto", xs: "auto" },
            height: { md: "800px", xs: "400px" },
            mt: { md: "100px", xs: "0px" },
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
            />
          </Stack>
          <Stack
            sx={{
              width: { md: "50%" },
              height: { md: "800px" },
            }}
          >
            <Box
              height={{ md: "680px" }}
              mt={{ md: "50px" }}
            >
              <Typography variant="h3">Apple iPhone 13 128GB</Typography>
              <Rating
                    name="size-large"
                    defaultValue={2}
                    size="large"
                    sx={{ mt: "20px"}}
                  />
                  <Typography variant="h3" mt="20px" mb="10px">$129.00</Typography>
                  <hr/>
                  <Typography variant="h5" mt="15px">Product Description </Typography>
                  <Typography variant="h6" mt="10px" mb="10px">Apple iphone 13 128GB is available on affordable installment in Karachi.</Typography>
                  <hr/>
                  <Typography variant="h5" mt="15px">Product Features</Typography>
                  <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <KeyboardArrowRightIcon />
              </ListItemIcon>
              <ListItemText primary="ROM 128GB" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <KeyboardArrowRightIcon />
              </ListItemIcon>
              <ListItemText primary="Rear Camera 12.0 MP+12.0 MP" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <KeyboardArrowRightIcon />
              </ListItemIcon>
              <ListItemText primary="Front Camera 12.0 MP" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <KeyboardArrowRightIcon />
              </ListItemIcon>
              <ListItemText primary="A15 Bionic chip" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <KeyboardArrowRightIcon />
              </ListItemIcon>
              <ListItemText primary="Single Sim & eSim" />
            </ListItemButton>
          </ListItem>
         
        </List>
      </nav>
      <Stack direction="row" justifyContent="space-between" padding="10px">
       <Typography variant="h6"   width="100px" padding="10px">Quantity</Typography>
       <FormControl
                  sx={{ width: { md: "80px"},height:{} }}
                  ml={{ md: "20px"}}
                 
                  
                >
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={price}
                    onChange={handleChange}
                    sx={{height:{md:"50px"}}}
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
      <Button variant="contained"  sx={{background:{md:"orange"},marginLeft:{md:"20px"},width:{md:"220px"},height:{md:"50px"},fontSize:{md:"18px"},mt:{md:"20px"},border:{md:"none"},borderRadius:{md:"0px"}}}>Add to Cart</Button>

            </Box>
          </Stack>
        </Stack>
      </Container>
    </Grid>
  )
}

export default Product
