import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LoginIcon from '@mui/icons-material/Login';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from '@mui/material/Button';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied';
import {

    Link
} from "react-router-dom";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Tab, Tabs, useMediaQuery, useTheme } from '@mui/material';
import DrawerComp from '../Drawer/DrawerComp';


 
export default function ButtonAppBar() {

    const [value, setValue] = React.useState()

    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));


    return (
        <>
            <AppBar elevation={0} position='static' sx={{backgroundColor:"#fff"}} >
                <Toolbar >
                    <img src="https://flone.jamstacktemplates.dev/assets/img/logo/logo.png"  alt="" />
                    {
                        isMatch ? (
                            <>
                             
                                <DrawerComp />

                            </>
                        ) : (
                            <>
                                <Tabs textColor="inherit" sx={{marginLeft:"500px"}} value={value} onChange={(e, value) => setValue(value)} indicatorColor="secondary">
                                   
                               

                                    <Tab label="Home " sx={{color:"black",fontSize:"20px"}} component={Link} to="/" />
                                    <Tab label="Accessories" sx={{color:"black",fontSize:"20px"}}  component={Link} to="/accessories" />

                                    <Tab label="Mobile " sx={{color:"black",fontSize:"20px"}} component={Link} to="/mobile" />
                                    <Tab label="Contact Us " sx={{color:"black",fontSize:"20px"}} component={Link} to="/contact" />
                                    {/* <Tab label="Product " sx={{color:"black",fontSize:"20px"}} component={Link} to="/product" /> */}
                                    {/* <Tab label="Cart " sx={{color:"black",fontSize:"20px"}} component={Link} to="/cartsection" /> */}

                                </Tabs>

                                {/* <Button   sx={{marginLeft:"auto"}} component={Link} to="/login" variant="contained"><LoginIcon/></Button> */}
   
                                <Typography component={Link} to='/login' sx={{color:"black",ml:"auto" ,px:"5px",cursor:"pointer",display:"inline-block", width:"50px",height:"30px"}}><LoginIcon sx={{fontSize:"35px","&:hover":{color:"#6610f2"}}}/></Typography>
                                <Typography component={Link} to='/signup' sx={{color:"black",ml:"10px" ,px:"5px",cursor:"pointer",display:"inline-block", width:"50px",height:"30px"}}><VpnKeyIcon sx={{fontSize:"35px","&:hover":{color:"#6610f2"}}}/></Typography>
                            </>
                        )
                    }


                </Toolbar>

            </AppBar>
        </>
    );
}