import React, { useEffect,useState } from 'react'
import Stack from "@mui/material/Stack"
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const BottomBtn = () => {

    const [isVisible, setIsVisible] = useState(false);


     const goToBtn = () => {
        window.scrollTo({top:0,left:0,behavior:"smooth"})
     }

     const listenToScroll = () => {
        let heightToHidden = 20;
        const winScroll =
          document.body.scrollTop || document.documentElement.scrollTop;
    
        if (winScroll > heightToHidden) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };

    useEffect(() => {
      window.addEventListener("scroll",listenToScroll)
    },[])
     
    return (
     <Stack width={{xs:"100%"}}>
        {isVisible && (
        <Stack className="topBtn"  sx={{fontSize:{md:"2.4",xs:"1.8"},width:{md:"5rem",xs:"3.5rem"},height:{md:"5rem",xs:"3.5rem"},color:{md:"#fff",xs:"#fff"},right:{md:"3rem",xs:"1rem"}}}  onClick={goToBtn}>
          <ArrowUpwardIcon className="top-btn--icon" />
        </Stack>
      )}
     </Stack>
  )
}

export default BottomBtn