import React from "react"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import TextField from "@mui/material/TextField"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';


import { useNavigate } from "react-router-dom"
const CheckOut = () => {


  const navigate = useNavigate()

  return (
    <Grid
      sx={{
        height: { md: "auto" },
      }}
     
      
    >
      <Container maxWidth="xl" sx={{mb:{xs:"100px",md:"100px"}}}  height={{md:'600px'}}>
       
        <Stack  mt={{md:'100px',xs:"50px"}}  height={{md:'530px'}} direction={{md:"row",xs:"column"}}>
          <Stack   width={{md:"60%"}} height={{md:'600px'}}>
            <Typography variant="h4" fontSize={{xs:"20px",md:"30px"}} marginLeft={{md:"30px"}} fontFamily={{md:"Roboto",xs:"Roboto"}}>Billing Details</Typography>
            <Stack direction={{md:"row",xs:"row"}}  padding={{md:"30px"}}>
            <TextField id="outlined-basic" label="First Name"  variant="outlined" sx={{width:{md:"400px",xs:"150px"},mt:{md:"0px",xs:"20px"}}} />
            <TextField id="outlined-basic" label="Last Name"  variant="outlined" sx={{width:{md:"400px",xs:"150px"}, marginLeft:{md:"40px",xs:"30px"}, mt:{md:"0px",xs:"20px"}}} />
        </Stack>
        <TextField  id="outlined-basic" label="Street Address"  variant="outlined" sx={{width:{md:"93% "}, marginLeft:{md:"32px"},mt:{md:"0px",xs:"20px"}}} />
        <Stack direction={{md:"row",xs:"column"}}  padding={{md:"30px"}}>
        
            <TextField id="outlined-basic" label="Phone Number" variant="outlined" sx={{width:{md:"400px"},mt:{md:"0px",xs:"20px"}}} />
            <TextField id="outlined-basic" label="Email Address"  variant="outlined" sx={{width:{md:"400px"}, marginLeft:{md:"40px"},mt:{md:"0px",xs:"20px"}}} />
        </Stack>
        <TextField placeholder='Notes about your Order, e.g special notes for delivery'
              variant='outlined'
              label="Additional information"
              multiline
              rows={7}

              sx={{ width: { md: "93%", xs: "100%" }, mb: { md: "0px", xs: "20px" }, mt: { md: "0px", xs: "20px" }, mx: { md: "32px" } }}


            />
          </Stack>
          <Stack  backgroundColor={{md:"#f6f6f8",xs:"#f6f6f8"}}  p={{md:"20px",xs:'20px'}} pt={{md:"20px",xs:"30px"}} mt={{md:'0px',xs:"30px"}} borderRadius={{md:"0px",xs:"0px"}} height={{md:"520px"}} width={{md:'38%'}}> 
         <Typography variant="h5" marginLeft={{md:"30px"}} fontSize={{md:"30px",xs:"16px"}} fontFamily={{md:"Roboto",xs:"Roboto"}}>Payment Method</Typography>
        
         <FormControlLabel value="Cash" control={<Radio />} label="Cash" fontFamily={{md:"Roboto",xs:"Roboto"}} sx={{marginLeft:{md:"20px"},mt:{md:"20px",xs:"20px"}}} />
      
         <Stack  backgroundColor={{md:"#f6f6f8"}} width={{md:"100%"}} height={{md:"500px",xs:"350px"}}>
          <Stack direction={{md:"row",xs:"row"}} justifyContent={{md:"space-between",xs:"space-between"}}> 
          <FormControlLabel value="card" control={<Radio />} label="Debit/Credit Card"  sx={{marginLeft:{md:"20px"},mt:{md:"20px",xs:"10px"}}} />
          {/* <CreditCardIcon sx={{fontSize:{md:"50px"},marginRight:{md:"60px"}}}/>
            */}
            <Box component="img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXwAAACECAMAAACkj2A4AAACMVBMVEX29vb9mADLAQEAHqT////+rAD29vUAHqX39fbKAQHDAAD+/v/u8f/FAAC/AAD9mQDsbBAAAJMAFaD4+v9FUawAAI/h5/u6AAD2dRIiM5kAEZ37+Os6S6j5+//5gA////pmdLv2lgDQLgIAAJn/9/fe3vUAAED/7u7mlJMAAEP89+j3qQD/5ubw9P8ACZf8kwAAAE8AAELzwlb0lwD83aoAADD88NEAAEm9x+sAAFb/+OBUADn4zYrrpaX+3t4AEZMAGpKdqdoAFpPO1vX957/BODj/1tZOTHWKiq6rqsbc2uoAADYcADyWCCWnAABISoTXPwb74KD5xsbZcG/QWlu8LS26HyDAMzLIRkf91Zb6x334vWn1s1fzq0bzubryoizdgoS/FxfQYmLtiA99icw2RI+utN+VnMpaYqsuPJuGksgVK5wAAHpeabTeWglOXrJidcq+x+X5tExtermqQE2aABjMfxnq07J5ACFsXoJRO2CxchXTuZ8lABNXAC5mACFgAACIVBk8AC9tQS14dJOurs0yLFvTiZG3oporF09vNFN9AACIWy4pBii+uMhBKz7Po7O0h0zjuHiScmG/gpRLAAyFIDgwMG2bintjTlKXqu7Lc3MhAB0xAEArAEhCQ3xRLCZ6do7Lij+xmq13T2yfYnCNOEt+ACY+ABgAABtWIwBBHihRQ1ZkZZqpaxkeI2x/b3XjdzCQaoavg1WFVzRkBDtvRzsiACzDQxD4ymv1tzCnFwfkAAActklEQVR4nO1di18bx52XZXX1liItSEFCFQrCwoqEqCULLMTLkmUgBmzAAiRAiFIc4FxKHEjc9OzErzRN7KRNU5q6xL6mjXuXI/SurXP4r7v5zexjVg8eikXwp/ttHaSd2ZX0nd/8XvObXYVChgwZMmTIkCFDhgwZMmTIkCFDhgwZMmTIkKFgyh/XlG8tAY1wpgZOYw5w6r8gNLu27s6dhpGczhR0l5nfC3sTtEsPaZNGoWGF0WAUxaMhowCM9I3X5/MFAgGfz+sVD+6HQsbpj8Wi0VjM73SLV5bJ3xUCPRpfYKSzeXRs4nI6nR6fGBtt7hwJeHGHXSlEut0fjUxmslPTOYTp6Ww2HknGnLLS2RtEPr1dM7NjabvdZDQqCYxGk91+eawZD8Aupzujkcx0Lhz2HAuFjnHwhHPT2Xgy5j6k3/ACg2ECM6OXEe/KYqARODc74itjlRl3LJLNId5LwROeziT9svzvCm9X87hdpy3BPIHWZJ/oDAD9GqlvxDiTmVy4JPEC/29EYjL75aDxds3mTeWZ5+Tfnm4OaArUvzOZLSPzEv5zkzFGIw8ABV6GvYFZu24P5jnxzzdLlI87miVCb96b/ohfJl8Ew3Hv60yb9kU9/LNPzIjeZyye21PoRfqnks7v78ceMXAS7E3N2YmR1e6i8WnlMxsgpzqTU7zC2VPwMcLxGCOHXBS8nWmdlN09YZoYAeH3Tx5A7AXhZ3ZPZPzLAGynb9auLRDtPWVfacx3ehWx7K4uThnkIlVXPYzkT+EvLtGzsPdhiUdgzl5E7V7Uw1v7bHKqAuoRwpP+Kv84nvy99VuZ6GOX78dlaEufVz6YKXVFTdfEvixticGw/3h/ar4E+xk/9VOqAg13ceTcSlHYkWoRmoWujORyADaIwQpNpeZLQQa9bEK9a2JfDmYJ7nU/NO/XyhbBk+Flv5qWV2MoRlDCg0bBsNJGOBqkjmg0/JfUKFhbe+/8CsZ8b7uN5ZY4in9C4WeWmUffkfuKgWW/yi4PY/vJYn19jQT1V1zSTq6FeqqRUPc6dYTlwkJGb2hvqOu2tFitDofV2mLpXmxYsLkKPxN6Kmz1Eiz26kt9PY2vYp2DuCeolP24v9Q3eo7QMMFEe++KpdFKwbJUwJdtUWh39CQw0e21Dv6Ipd2lIELCLtR3t1jV6uMA9EetRq11800uiX7BuUnXvMUq+cwGttT3881VyL3SePElgpcrZn+yuj4PmeouNlHTQhjDcFyVsKVwLTXyrWoyMMAd39u6aOM6Gxpqeeb57tDe0jNv0BdO4ESPpONxx0qwxPfzztor5F6pNeoARp3ppYrZT1Y70iI5csOKyL7aWkNLoYYmylpvwONiqLHyhxqvubC/5ErUN0oJ5a+ntiwvsNJPZBtaYGaInaw1JcjXzGDuDxJbFQ9C5bo/lItWl3vMBqLDViewiaSQVjsM2yAKfu0CVs1M4qxwqGWB9LPVt5SiHjPs+LcmqRCtni0YJ2udDXtSkl5dl43flXsE4yuhSmU/W3W1j//pFyyUeItyiuhorxVaHCu4hdH3Cr2ty1jrMMGG0nLPjRlL08oEr7ZI5B6TL/1a6IMrVvicyuFh/2ml5HsizGGEkoxBFH31so36yGCNQ9AftQmOvBUHZ1WxgUCHXNQQYUPrEAwv4n7JJf0JQme1OIYJ6fdB/zorVPha48WXJfhhhdwfO5aLHkYYz7DXROXSI0ohCLlAaksD0UdM0zI/UmoL9hEZNESi0Wg5W7+yUt9TSw6pLfMsIxX8FQevkpb5UehuL8xiBM6VWizcF/khsxQVk+/JOA9jdcW10MgrAvVZSgUYlq3CoJxtgiMopOoFySXMdmPXU5MQBV9dO5+AALdpYQXoVzdeNUiUOaNfqFXj89WOn/3MUZp8RuFttleo7nUV+zfFCCerTz3oDUHCEaECEfp5UZWDm4ljWfaqg1fZjhqideYtggap7VWRzIPe1V5jUTvqbdL0EROs51SSurad95rULb16qbntylfIvfaVY+ZiVCr6U9W2udhiJs6KamNVcHcS3aIdXrSRnoxtWXQ0l7D7wy4KR5CvJJCoNyx11yUK1KZemDfWGgN/HgogpLGAd7by8OrlYlSm9s2HJPpIjwvkW1b5g+zVFvHogous8DCicUUmGI+HrVtwXhol8bGrfbUgXOZMuxrPkaBAfktBWN2VFkVZItd7Twfk65h0Upiwu1mJ+HuyzuqvajGip6+2tHOJFj3QzOkTx+tBhuSJXfON4mwI4rzmqmiVOfeHv6yL5hRSbC7ipqLrIvdSkHx0WlBilDtN39nBlwxIxVm23CGIPnJBBPJbiC5RaAyCm4ktIunIBMVhapkn3K6KUcJxmCHlP0YcZNA0NPks7VL7JkpRuA+xL0f+xYq1frz67g4KfDjPECgl5IOQ8qS2XGP5gCNBaR1uRBIWIWhSq7tp9gtz9q6lRr7fchPyUHnykf6nzfII5eNrAXvzqyVThQuwjEac2RHCLVPFYe50rPq+Piukz0AksUcJQsof60nwhUgCfVxSABCk8mQoFpu3uRSa0l850SNo+XkXwwrTTRriemd1NKsHEvGXSqNi8sORqnNPkw+0IFLZeUGZqEUzyrBiUs3BJ4JdDXRaVN242M7yMi+t62YF1xU7tMhp5clfpMkPnKtQwRQHWCV8zVBZokvBk6m+3oEoi7BCUjgMQ7uZvIiDT9ojap0Fnl8qyIIGa8u1JlfBd8Zv8clqkpdgYdCE3AW3UEC6jpiwtjGZ7CY7qVPT4Ze71qyBbkJO/q4wh0LhXA4KZvczAh6PB3Wb9le9WMC1IAgvIZ+92kKx7GK4rQeuXlHrLDfxpLLXLBL21Y11C6ykYJJ0a2gRLgnmQnScuFCZwNuJSTbNNgNGjUibjDULr3eD7qdlBJ+TfU8uE4nGosnJ7D7qed6Ix+OZcCiXZKtewMxJtBp7i5ybyRHjqBH8QEpTSFZAbPUOSaJSba1tsBUuDbrECWJdhAF2XRMkHw8GX6CGOc6/6VUB0DQwraXwS1Vn6dALFwnmz42Pj7/0w3JASt8czkTdKpUeXch9ybPrDEHjtP4W6hfNHfNEqr5lC0VZPPnWlSByKMEL5HQEJoZT4TYhRsJJNf5baRJ1juMSqBvrEy5pYoG9yqffYC7BaMy3cJ+JLiZ2JSr/7et6nvy1n7OE/Nnykm/v9Hq9qbyuDEwXzeF3fsFRj/4T2UPvmHP//gB1TKIxqr7SZwz1gvuONDyJhUj+q6VBTMfrF8QcUI+QBtaAVC+28Ok2fsIsJ1w0+a72WqGtDk8apMOE0egV8wupPEjyjT4VT/5N7qV3zIh8STuAL9OHXSkIxvy7A9CXlHSig3l+C4XWiKDUmnTh9x4Q5gHuTOhYKOQJI5BtKqEQ/A3h+RACXb9+wabSu9EYhXB+p6oDwIhLg+D28bGQWrCF+NMh9cyxhdcUBfLRxLRdleh9UD3L7XTARWWALL24gVqVaZkXR3gGlIvp1l2e/PytJvLSN65LzzWPpFKpkeZxiIGN+dFO9HZkZnZt04Y6pGZHdUqjfWwm1ZWaGYWR0I7Pzs6O2s91dt6+g6/hGrh7tynongqFp+KRJEIki6j2TGUymelw9tIbodA0Oj45/c29ICI/jsifjlW7ioRhBc/DWmeQLpqzHMOgdRaLwltyOvoXXDrrkNCvdtDeu2tB1Phk/YteQHOI08uLNXt6M4H1g2pEt/Zz9EKPXneZ8iledgOjJqVuIsXJcmrtngvLdcquzXcSY6GfyWuVQ+/D+L0ZUPW1GeDgwPnTp0+0bbyVy8VjbnKuMxL2rEfdbmdm0hnLeTJw3B375Xl0QWc2BEsqVWUeIMj08ePLNirTQ4U/sKiIFwCxyu9uL/TAWMghS7yexqvikmRwkUqGshLy1SS/wJPfDM7O2gcgykiXpExvI60zoAESh37F8uSrfBO6ywH+zcyHW9wLu32GvNLDG9O7/XBelyq4jVWX76P19fVvbp9e/+j+AxXfzz25/jG6vPMtpyry47gTztSr2AH0xz997DAymwx7hSdfvWy7Qi2ag4bgzT0L4a2anx9FF3EZls6KDqpgq0kbb0XgA5o4LSa6VEiJ4aHU8PHtk0dBxAxiLJX+K9I6/UgJqDp5ijFnnUOfCO863+XMQjMWdaRdcJcJ+61VMg6rJwbQ7PFnPeB1htdz988MCCerYr8+z8IgqNy/+dStohCDKmcU42qq7OkLURZS8u31YhRbT3FMGQZhUVGMQOAvm1jB61THSWmI2vE6L9BUgUTjNZZYESZBky94mg/BVN68jn48i8hODSKtE7wDamf23aXVvq3h4eE+mABdN2Bu6Pu3trZ+O/EZWAh2YGDsd16sXLbvQJfOoU2O474NuEDSw/sybdur/XfQlbZQu979+zvcXPkcdzfcvUtmWBT6e6qeYNAo2rsFyf+DoIGQ6Oopa4OjXuIDWaCMRFLTSeBa6KGcTnUPDsQYxrUkJN+QBdcrXAgKVUJYkKSCaEw+cXYGhhHHN5HmuAvvvGM3Wy/c6ui41fYaKJOBeyCuD/54a3Nzjdjk1dM3P4QW340bX7TBi9TQvSBms/9RHxJ8ZyZEgi3z+okL9x8/fny/rfUR0PwfZN6s9uG/Ax+cPnEepg44pGZEvqvqjj5VHLXMpdyR5F6lqz5cvHeiFpfZGVwLS81KfUKcN8gyLJAmcdH9uLWmncPqH7o5lX9cfTYhIT+PnZ0Hj5Bl/Rbxeh1zenkojdzK9PibH4DCHtjG8n/OrjMp0x+AOf3k3bUOAxZ409rpO2ChPzwPVthw7wQei9g0592bf/xODnmZuam/bSOFo9Kfx57V3dMnQPCdv17/08dtqyri7ByG5DN8lMWzQdR2bRN9bxShZgSNygpbQhqIGU1QV+KcSpYvMMQtLRaLBf8T5wiVX8DkE2en/xGoEL3K9wGw0oVi3XPNqYDPFwS5vHvSBpoiMJtGYRhwqJrVDZ0H9dE1MzPzAJ9BTMEnH/7uJOj+aI4PrdAECGcj0Zg3CDMjeA86az7/FE8DpJvMfzrdD+RnD4d8pM9Fb0SAZV6yMmITk2oWoa6YZQtuHEFFskJtCaSSxRERIQwIinm5KzCY/EHs7NwB8hENn3wB70bs9lmfaA2/fO0KedE1Z1oDS6yfM77dR9tL1chnwKF+TDl4gpB/jFtNNIenkk7BdBs2DLj1vTu8uOfuw4nOaZ78au9UMawUkQ/1UxRcKLwVihSauIP6hdcTQgYT15HAwgwv46SckBETb+Xq2tAoSch/cg+E8M+I/KBB5f4LVt2dQ816itnfXjizSl5557CE+ya0N/ol5H/yR+jhyysHf8STz+n8pz4h3NWrBrDET4b/0afiffuv7/LOzmEYXMYlBq+C4PdKBF/MAOOaQlwSgsKuRlyHzFOn4HN0hHxsGiivRl2KfTU9lRgvZHCws+P91SPMUBd+p3r4lRcU+JWtR9j8zj1pPdNHvJLUX4GrQN54C8h3DTQRdD28QJIOHPm8zjev/ycettWt8+dB5h/AvHFnw49B3P1TmHww4NjZOYzlFEgxilqAY9gg0euGZZ46WF0h21VhycXauLzUxOoZsllIb1sRVTmOnRgX1kNFJkVk/jgd4kKQZcTOTtfNDex0NH8G7/RfAbOGW3/tOIHlfFz35IvW7bsurLRXMcmmb7EbdILDu0MbeMYA+ViHZ0LE0fx6G9j+5X99fGYbyO8HifdPh7/u5yTfvP7fLHZ2zIcSZEky9bwmkKRm6JpZtSVBDpHMs9pq6WnobbcZgkGDbWGRqje3tMOItNeW0zYiGud55QXpfOLsjLy9ARx4J27AOy+2ujNDpvSFVSznSu3aP1t/BAPBnh/AJJs28bB8NQh4MmhfA/uL7LBy7SQOz4jFNb9zYgvPg/Df2/DhO3dxW/hrGARIppm/AXfKPYnHCio2q53YdPUWJMYKyzlc8wKr1kUSeoGV5qaLw9Jdt7iyUl9nsYrcO3CtP0tNBatDAurTBPdJM4NcR/AvVZ2E/NQQjlMN2BGcsWuHroO0p+wmk9E0eBroDp4P4nGxbw6DDp/J64xGoy499/Yd4HZMq8x/gf1SdzILDuZbG4R8820c5+qH4b/JcPhrPBSxbHj6FyrB2TmWi1WZeUC7uG7IZTMlGp8RkzPqxnmy1U1PrfOq1bBLyGqlLgLZBTQ7xIwa0mQNEtRRLcJQp5CaOAnqYHQQq43ZIZyyHHgNOPK+P/Y+5HlUM3OpztmHD7+EHjawmHp9auR6mw1edHW+P9s5Ehj5DPwh77hSaexou4ttqz8ajfqD21vAbfI3f8MBLYudnYgn/LQVJ9+c0Zgb8jtubCJCVS8ZBHKpRVuiBwr2SSXEmYG0CVhYvVSfCGZW6AaqREOqkvnyTJaGxIQHeaMdGFcO3oNfPzEIKtk3voadnU9OkySzlzgpX34peCuqL/EgIfzlpJj9QTMHOzsBqEMZbN0OkowZDOOZDfjjdhOHx7ABoXI8ZP7oNYmzFMt5crkwLKZUvXqEsS3TzJEVWr4N2Vb9krgRCzKdSBHaUCzL7+8p1urqlhpQTvTGC8eKVJPpqdR1D96+gvf7z2lvAoe+y5j8EdMgVt0PXxt2EVZwZHTnrsBS1+/OkIy/b2Kz9YrI3uhrnLOjVJo6WreEjOjqmVYu36aC3OUAXB7pGHPuAncdlR4mV9STy2Zznkn4plV39Km9QTg0lVqZoKRmBLetLlIKXpR+nvtF2AdKLQHQSU4CajVF3S3sHfI2m25cAS1iX9s26PWjsJKl1yOz27qFBXxgY1WvZ89zTr4q+OXQGteSyq+1tm4NcB68bwJLO97aZfyfj9s2VsnguX9x8sx2AiucPuTDuh/A5cENDX/UhkcFDceqyoWcnVz2jRx2dqot+lTF4HFsUgssfJPgvasbF7iBMSzVSekXba3VchVPHdcVSvBrgtKL0uTXigtmI+lbPxke/vOEce3M8PBXJuWN7eHhR2/q0siz7Ovvu36jbePRo6++2B7e6kPY+uBDZb6jdQO1/O85o3Jws/XMcF9/f3/f1pO11uHh4b+kIU+nDeUen2xDnfr77vw994+2M2fQyb///Efbjz6d+nxjePj6b8Lgg94+2Trc13f989PoEz5FIVkuh0tHqr+K63qd2o/L7X2T8CQ0LgtCqrf11oibbwXyEfXLS8QhstU5xO22RRddaqQ+UVxBf/NmR0fHoE6Z7ui4MaQ0PkHvbiD5Tf9z88LmjbX0P9Hb/M2OTYRbHW/Dim+644sLm7fQGVpt/knH5oULF769dTO/hs7rWINFXOPFY+bwn55+/O3pb7++vW4O//rjb+8/fi/3zdOnt98Jf/T06dP3wiTr8M3j+3+8/c70P6CB5J8zh3DnQUbhWlqu47HcUJg3Y69RjZQA6w3t84vdFnBzOFgdLbV18zZsrjXsFfGidT8p2PamUCyIjcvtwkW9D41cfSb5I5RravP5vJG8xzf0yuft3I5FXT6d18Griwj/h3BRCtgMbQ7ncuu5cJh7GRZKesLoGFfTRjcco+Lbqsu+wSbCUPhxGrpRw30hcucL1pDobaip66nF6KlbmV+wCZ6STXLRQgSpVmor7sxBN8Px5YXaV8rXTMH/hbpBc9ly/YJtLLB8frA7ZFcG/rYixbceIVtS6DaxEhMvrLvYoCHRnkBoTxiCLrFWjSk4r/gzURcNTlVQHoXvXJnKKMlbrfQthrjn+fnszOJLNQ9hX1wBxEx+UROjKTjO8euWVsjubwmoyJdA/s4+ZF3kXiwiN3K7bs37EXJB2MsP12FsjiiFfQ928SyRHN3HdYrY32U/XKlifS1/XKs1hkrgWHl2JWNT2MF8LOs8CBOVg573xZ8nLfmWsFX+ZlXCnXjKXVWcGtImSYX+3nNAHAGl8ZUSqHBXkPlQqvMPB2UjlRINKXsRufseDM5BUvJ/Krz9Apwz5X+B7vJIvqmETA3DCIdK29yiUxTfZS9o8VhUvi06HHnhbm8t3EetoNZIoxE3C2kkb6TnYYibQQ++S0UrgfGVim+1lnW+aNxTxgEIxg6s2+l2Ov0FcCK4yX3zNJJNXDBo3kpvfIHwfDQ+LKNEoy/Y7X01eDsdIt1Nno+RjCQj8fhkfOdUAXbiCKgxSZ6hUSBkvrEK722nNL78XDb/mz2T0Ugk+gLJPhZ1RDqiHDF+6tSzZ89exfjBD9D/C4CO4jbUCQ2F6FGT35tKV7otrvL7G0kw5fcnky/IXfWBdyewfimzgykvQfcueDVesH+3csVjvAjibt5HeLUbclEF44+9EGoH8Q60n8KsV4S4eC1ifL2jlXk8Wq3ppe8u9+GIW/F9pBX2Bv1cDJfCHYtGJneA98poLySfh4/c0lQrBLD7l33e2FbuZcaPnMxTOQPu2SRI4C99Z94BrxaTrwiMGysjn8wApH9CFZpbT+YQls0rBc5sup8X8Zj8S4WfgYY2ddkoMHlwVH5nQY9wZ8EjqHeQc+4nxD8P3suQD2GayH6F3FfEvifL1eocPeoZEPn485J4kfzCW/ritFzqXEXuPpoopouVyz3mntlvSvzwgNyayM5zJp6QX/LjKr2BvtY++taBn9lBEM74+fWiI8U944xeKifyrwp4VgSxbRfyS99wXBEYrcDfN9qbfUz0DU8l3Ff5FtaVgfEj5ovo4+hGIWrmUgRSBdFozO904swNBz88hBOF6pH4zg4EvSVHoVjt8B/rbbbvrfil3pAuPeNFWiuWkTw0pawWoho801W/gfXBAc913JHYV450xHkyGos5nW53mXVafDq3zuh2OmMoCr4U3+EGQbxc+QU778iEneN2H0+tQf+zz3WRM52RaU+oBMXlxT4b+74WbYvAPzOK6Hma92fPdnYQ637Cudhf/G85aPBjQtB8oMZgV/IZRhNozu/f7poud/oU3A1nmGjmIA8pm67+k4IOAAYyNv5kXNTziPdTO5ORKP0cWclaIMNnh/cWHjQTYAgyO288e/XZrkvV3tSofX8uvyk/20V/vDM5Fd6f3Hty8aOSRuMXpZCJFYQeEb8TjyBxL1FaIlnLZcSjewGnQVG0dqnsXaM1eGp5R+bsez+rzGQfTdGPxQXh90emwnsqnpAnl4m6j4K2UQh8+pMZjnkg/hI8N7n8Kczu5UW071Zc9lvepeafSuQdGR3a9XllRnt6NlXiicSI/mxO1P0ldf10HNZN+GqwIzAIbvBuCPOEeAUrcqbhHwNU8D2ZXcvZ+c5Fa7r7qgP2dnWOlX4WsVKLmJ+bCXgls0+8vDMZnyr7XNZwLoufhsuI5B/aM9hKg3GCpsfEn5pMRve/mllVoWG8qc7Rc3aTjq/mhAVbo86Un3g40+Ut89l4lzyaxJPZ6aIBCOemMpED/LrqQSgkQF+VuDcg8tGYu+r33dg/GIU3kJppfgjPn8/b8+nLE3MPm2dSPu9uBUTcqci6R+L4+fNhuMvgdDaDPYdD+ublv5e0DCqGo6lXnx0RoSiG1+sLdBEEfN5yIl8CjNMPMV+UCwaPRPKGKuNg3NHJN8CT38HmlXqg3lEBVwhX4rmOe0QYBW/pCr2j8fOcUeTfIOYjiHl6A2r1N6PuD2W+BVPmBsIUSvfQMEUPrP9+oEFWdgeiqEtIEX7/X6csNCVfKvY/PY+EMymAVHz7gfpTk7ye1xR3OTqga7MqO5WLBEvV/h46mFjkFCh6f8F9118UlM/qHXkg3/IUUjdimCfj8MBEkI31v7Cy82KDiSadpaqFZRwCDphlkVEdMDL/hw/hTl2H8TxAGRLIjMuQIUOGDBkyZMiQIUOGDBkyZMiQIUPGvx7+H9nnd1b2EV7dAAAAAElFTkSuQmCC" sx={{width:{md:"150px",xs:"120px"}}} />

               </Stack>

         <TextField id="outlined-basic" label="Card Holder Name" sx={{width:{md:"85%"},marginLeft:{md:"30px"},mt:{md:"30px",xs:"30px"},height:{md:"30px",xs:"15px"}}}  variant="outlined" />
         
         <TextField id="outlined-basic"  label="Card Number" sx={{width:{md:"85%"},marginLeft:{md:"30px"},mt:{md:"50px",xs:"60px"},height:{md:"30px",xs:"15px"}}}  variant="outlined" />
         <Stack direction={{md:"row",xs:"row"}} mt={{md:'50px',xs:"60px"}} >
        
         <TextField id="outlined-basic" label="Expiry Date" sx={{width:{md:"25%",xs:"80%"},marginLeft:{md:"30px"},height:{md:"30px",xs:"15px"}}}  variant="outlined" />
         
         <TextField id="outlined-basic" label="Year"sx={{width:{md:"25%"},marginLeft:{md:"30px",xs:"10px"},height:{md:"30px",xs:"15px"}}}  variant="outlined" />
         
         <TextField id="outlined-basic" label="CVC" sx={{width:{md:"25%"},marginLeft:{md:"30px",xs:"10px"},height:{md:"30px",xs:"15px"}}}  variant="outlined" />
         </Stack>
         <Button
            sx={{
              "&:hover": {
                backgroundColor: "#64dd17",
                color: "#fff",
              },
              backgroundColor: { md: "#64dd17", xs:"#64dd17" },
              padding: { md: "10px", xs: "5px" },
              width: { md: "80%", xs: "280px" },
              borderRadius: { md: "50px", xs: "25px" },
              fontSize: { md: "14px", xs: "10px" },
              color: { md: "#fff", xs: "#fff" },
              fontFamily:{md:"Roboto",xs:"Roboto"}    ,          marginLeft:{md:"50px",xs:"0px"},
              fontWeight:{md:"bold",xs:"bold"},
             
              mt:{md:"50px",xs:"70px"}
            }}
            onClick={() => navigate("/checkout")}
          >
            Pay Now
          </Button>
         </Stack>
        </Stack>

       
       
        </Stack>
     



        <Stack  width={{md:"38%",xs:"100%"}}  borderRadius={{md:"0px",xs:"0px"}} padding={{md:"30px",xs:"30px"}} backgroundColor={{md:"#f6f6f8",xs:"#f6f6f8"}} height={{md:'550px',xs:"350px"}}  pt={{md:"30px",xs:"30px"}}   marginLeft={{md:"890px",xs:"0px"}} mt={{md:"30px",xs:"30px"}}>
          <Typography variant="h5" fontSize={{md:"30px",xs:"20px"}} fontFamily={{md:"Roboto",xs:"Roboto"}}>Your Order</Typography>
          <Stack   mt={{md:"20px",xs:"20px"}} height={{md:"auto"}} >
           <Stack  mb={{md:"10px",xs:"10px"}}  direction={{md:'row',xs:"row"}} justifyContent={{md:"space-between",xs:"space-between"}} marginLeft={{md:"30px"}} mt={{md:"30px"}} width={{md:"90%"}} height={{md:'50px'}}>
             <Typography fontSize={{md:"22px",xs:"16px"}} fontFamily={{md:"Roboto",xs:"Roboto"}} >Product</Typography>
             <Typography fontSize={{md:"22px",xs:"16px"}} fontFamily={{md:"Roboto",xs:"Roboto"}} >Total</Typography>
             

           </Stack>
           <hr/>
           <Stack   mb={{md:"10px",xs:"10px"}} direction={{md:'row',xs:"row"}} justifyContent={{md:"space-between",xs:"space-between"}} marginLeft={{md:"30px"}} mt={{md:"30px",xs:"20px"}} width={{md:"90%"}} height={{md:'50px'}}>
             <Typography fontSize={{md:"22px",xs:"16px"}} fontFamily={{md:"Roboto",xs:"Roboto"}} >Lorem ipsum jacket X 3</Typography>
             <Typography fontSize={{md:"22px",xs:"16px"}}  fontFamily={{md:"Roboto",xs:"Roboto"}}>€33.60</Typography>
             

           </Stack>
           <hr/>
           <Stack   mb={{md:"10px",xs:"10px"}} direction={{md:'row',xs:"row"}} justifyContent={{md:"space-between",xs:"space-between"}} marginLeft={{md:"30px"}} mt={{md:"30px",xs:"20px"}} width={{md:"90%"}} height={{md:'50px'}}>
             <Typography fontSize={{md:"22px",xs:"16px"}}fontFamily={{md:"Roboto",xs:"Roboto"}}>Shipping</Typography>
             <Typography fontSize={{md:"22px",xs:"16px"}} fontFamily={{md:"Roboto",xs:"Roboto"}}>Free shipping</Typography>
             

           </Stack>
           <hr/>
           <Stack   mb={{md:"10px",xs:"10px"}} direction={{md:'row',xs:"row"}} justifyContent={{md:"space-between",xs:"space-between"}} marginLeft={{md:"30px"}} mt={{md:"30px",xs:"20px"}} width={{md:"90%"}} height={{md:'50px'}}>
             <Typography fontSize={{md:"22px",xs:"16px"}} fontFamily={{md:"Roboto",xs:"Roboto"}} fontWeight={{md:"bold",xs:"bold"}}>Total</Typography>
             <Typography fontSize={{md:"22px",xs:"16px"}} fontFamily={{md:"Roboto",xs:"Roboto"}} color={{md:"#6610f2"}}>€33.60</Typography>
             

           </Stack>
           <hr/>
           <Button
            sx={{
              "&:hover": {
                backgroundColor: "#6610f2",
                color: "#fff",
              },
              backgroundColor: { md: " #6610f2", xs: " #6610f2" },
              padding: { md: "10px", xs: "5px" },
              width: { md: "80%", xs: "280px" },
              borderRadius: { md: "25px", xs: "25px" },
              fontSize: { md: "18px", xs: "10px" },
              color: { md: "#fff", xs: "#fff" },
              fontFamily:{md:"Roboto",xs:"Roboto"}     ,         marginLeft:{md:"60px",xs:"0px"},
              mb:{md:"20px"},
              mt:{md:"20px",xs:"20px"},
              fontWeight:{md:"bold",xs:"bold"},

            }}
            onClick={() => navigate("/checkout")}
          >
            Order Place
          </Button>

           </Stack>
          <Stack>

          

          </Stack>

          </Stack>


      </Container>
    </Grid>
  )
}

export default CheckOut