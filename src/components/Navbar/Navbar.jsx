import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import LoginIcon from '@mui/icons-material/Login';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import {

    Link,useNavigate
} from "react-router-dom";
import { Tab, Tabs, useMediaQuery, useTheme } from '@mui/material';
import DrawerComp from '../Drawer/DrawerComp';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



export default function ButtonAppBar() {

    const [value, setValue] = React.useState()

    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));

    const navigate = useNavigate()




    return (
        <>
            <AppBar elevation={0} position='static' sx={{backgroundColor:"#fff"}} >
                <Toolbar >
                    <Box component="img" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/logo_new_6616946a-089b-4ed7-9d17-17ffeb96abda_small.png?v=1671016750" sx={{width:{md:"120px",xs:"80px"}}} alt="Logo" width={{md:"65px",xs:"40px"}} marginLeft={{md:"80px"}}  onClick={() => navigate("/")} />
                    {
                        isMatch ? (
                            <>
                             
                                <DrawerComp />

                            </>
                        ) : (
                            <>
                                <Tabs textColor="inherit"  sx={{margin:"auto",}} value={value} onChange={(e, value) => setValue(value)} indicatorColor="secondary">
                                   
                               

                                    <Tab label="Home " sx={{color:"black",fontSize:{md:"14px"},fontFamily:"Roboto"}} component={Link} to="/" />
                                    <Tab label="Accessories" sx={{color:"black",fontSize:{md:"14px"},fontFamily:"Roboto"}}  component={Link} to="/accessories" />

                                    <Tab label="Mobile " sx={{color:"black",fontSize:{md:"14px",sm:"10px",lg:"16px"},fontFamily:"Roboto"}} component={Link} to="/mobile" />
                                    <Tab label="Contact Us "  sx={{color:"black",fontSize:{md:"14px"},fontFamily:"Roboto"}} component={Link} to="/contact" />
                                    {/* <Tab label="Product " sx={{color:"black",fontSize:"20px"}} component={Link} to="/product" /> */}
                                    {/* <Tab label="Cart " sx={{color:"black",fontSize:"20px"}} component={Link} to="/cartsection" /> */}

                                </Tabs>

                                {/* <Button   sx={{marginLeft:"auto"}} component={Link} to="/login" variant="contained"><LoginIcon/></Button> */}
   
                                <Typography component={Link} to='/login' sx={{color:"black",ml:"auto" ,cursor:"pointer",display:"inline-block", width:"50px",height:"30px"}}><LoginIcon sx={{fontSize:"35px","&:hover":{color:"#6610f2"}}}/></Typography>
                                <Typography component={Link} to='/signup'  sx={{color:"black",ml:"10px" ,cursor:"pointer",display:"inline-block", width:"50px",height:"30px"}}><VpnKeyIcon sx={{fontSize:"35px","&:hover":{color:"#6610f2"}}}/></Typography>
                                <Typography  component={Link} to='/carts' marginRight={{md:"30px"}} sx={{color:"black",ml:"10px" ,cursor:"pointer",display:"inline-block", width:"50px",height:"30px"}}><ShoppingCartIcon sx={{fontSize:"35px","&:hover":{color:"#6610f2"}}}/></Typography>

                               
                               
                            </>
                        )
                    }


                </Toolbar>

            </AppBar>
          {/* {showCart && <Cart setShowCart={setShowCart}/>} */}
         </>
    );
}