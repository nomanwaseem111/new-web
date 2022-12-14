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



export default function ButtonAppBar() {
    return (

        <AppBar position="static"  >
            <Toolbar sx={{background:"white"}}>
                <Stack direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    width="100%"
                    background="yellow" 
                    pb="25px"
                    pt="25px"
                    >
                    <Box sx={{ml:"60px", width:"180px",padding:"5px"}}>
                     <img src="https://flone.jamstacktemplates.dev/assets/img/logo/logo.png" alt="logo" width="130px"/>
                    </Box>
                    <Box sx={{ pl:"200px",width:"900px"}}>
                    <Box>
          
                        <Button sx={{color:"#555252",  fontSize:"18px",ml:"30px", fontFamily:"sans-serif",width:"auto","&:hover":{color:"#6610f2",fontWeight:"bold"}}} component={Link} to='/'>Home</Button>
                        <Button sx={{color:"#555252",  fontSize:"18px",ml:"30px", fontFamily:"sans-serif", width:"auto","&:hover":{color:"#6610f2",fontWeight:"bold"}}} component={Link} to='/accessories'>Accessories <KeyboardArrowDownIcon/></Button>

                        <Button sx={{color:"#555252", fontSize:"18px", width:"auto",ml:"30px",fontFamily:"sans-serif","&:hover":{color:"#6610f2",fontWeight:"bold"}}} component={Link} to='/mobile'>Mobile <KeyboardArrowDownIcon/></Button>
                        <Button sx={{color:"#555252", fontSize:"18px", width:"auto",ml:"30px",fontFamily:"sans-serif","&:hover":{color:"#6610f2",fontWeight:"bold"}}} component={Link} to='/contact'>Contact Us</Button>

       
             </Box>
                    </Box>
                    <Box >
                        <SearchIcon  sx={{color:"black",cursor:"pointer" ,fontSize:"10px", ml:"10px" ,width:"auto",height:"35px","&:hover":{color:"#6610f2"}}}/>
                        <PersonOutlineIcon  sx={{color:"black",ml:"10px" ,cursor:"pointer",fontSize:"15px", width:"50px",height:"35px","&:hover":{color:"#6610f2"}}}/>
                        <FavoriteBorderIcon  sx={{color:"black",ml:"10px" ,cursor:"pointer",fontSize:"35px", width:"50px",height:"35px","&:hover":{color:"#6610f2"}}}/>
                        <Typography component={Link} to='/login' sx={{color:"black",ml:"10px" ,px:"5px",cursor:"pointer",display:"inline-block", width:"60px",height:"30px"}}><LoginIcon sx={{fontSize:"35px","&:hover":{color:"#6610f2"}}}/></Typography>
                        <Typography component={Link} to='/signup' sx={{color:"black",ml:"10px" ,px:"5px",cursor:"pointer",display:"inline-block", width:"60px",height:"30px"}}><VpnKeyIcon sx={{fontSize:"35px","&:hover":{color:"#6610f2"}}}/></Typography>

                    </Box>
                   
                </Stack>
            </Toolbar>
        </AppBar>

    );
}