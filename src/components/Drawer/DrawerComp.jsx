import React, { useState } from 'react'
import { Drawer, List, ListItem, ListItemIcon, ListItemText, ListItemButton, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';

import {

  Link
} from "react-router-dom";


const DrawerComp = () => {

  const [openDrawer, setOpenDrawer] = useState(false)

  return (
    <>
      <Drawer open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>

       
        <ListItemButton>
            <ListItemIcon>
              <ListItemText >
                <Button href="/" sx={{textTransform:"capitalize"}} >Home</Button>
              </ListItemText>

            </ListItemIcon>
          
          </ListItemButton> 
          <ListItemButton>
            <ListItemIcon>
              <ListItemText >
              <Button href="/accessories" sx={{textTransform:"capitalize"}}>Accessories</Button>

              </ListItemText>

            </ListItemIcon>
          
          </ListItemButton> 

          <ListItemButton>
            <ListItemIcon>
              <ListItemText >
              <Button href="/mobile" sx={{textTransform:"capitalize"}}>Mobile</Button>

              </ListItemText>

            </ListItemIcon>
          
          </ListItemButton> 

          <ListItemButton>
            <ListItemIcon>
              <ListItemText >
              <Button href="/contact" sx={{textTransform:"capitalize"}} >Contact Us</Button>

              </ListItemText>

            </ListItemIcon>
          
          </ListItemButton> 

          <ListItemButton>
            <ListItemIcon>
              <ListItemText >
              <Button href="/product" sx={{textTransform:"capitalize"}} >Product</Button>

              </ListItemText>

            </ListItemIcon>
          
          </ListItemButton> 


          <ListItemButton>
            <ListItemIcon>
              <ListItemText >
              <Button href="/login" sx={{textTransform:"capitalize"}} >Login</Button>

              </ListItemText>

            </ListItemIcon>
          
          </ListItemButton> 

          <ListItemButton>
            <ListItemIcon>
              <ListItemText >
              <Button href="/signup" sx={{textTransform:"capitalize"}} >Signup</Button>

              </ListItemText>

            </ListItemIcon>
          
          </ListItemButton> 

        </List>

      </Drawer>
      <IconButton sx={{ color: "black", marginLeft: "auto" }} onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
    </>
  )
}

export default DrawerComp
