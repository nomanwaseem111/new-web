import React, { useState } from 'react'
import { Drawer, List, ListItem, ListItemIcon, ListItemText, ListItemButton, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
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
              <ListItemText >Home</ListItemText>

            </ListItemIcon>
          
          </ListItemButton> 
          <ListItemButton>
            <ListItemIcon>
              <ListItemText >Accessories</ListItemText>

            </ListItemIcon>
          
          </ListItemButton> 

          <ListItemButton>
            <ListItemIcon>
              <ListItemText >Mobile</ListItemText>

            </ListItemIcon>
          
          </ListItemButton> 

          <ListItemButton>
            <ListItemIcon>
              <ListItemText >Contact Us</ListItemText>

            </ListItemIcon>
          
          </ListItemButton> 

          <ListItemButton>
            <ListItemIcon>
              <ListItemText >Login</ListItemText>

            </ListItemIcon>
          
          </ListItemButton> 

          <ListItemButton>
            <ListItemIcon>
              <ListItemText >Signup</ListItemText>

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
