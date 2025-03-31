import { Box, Container, Typography } from "@mui/material";
import { OrderButton } from "../elements/OrderButton/OrderButton";
import BgImage from '../../assets/welcome-bg.jpg'
import { FC } from "react";
 export const Welcome : FC =()=>{
  return(
    <>
        <Box sx={{
            //   как парвило такое выносится в отдельный стилизованный компонент
            //   что то типпа WelcomeWrapper
            backgroundImage:`url(${BgImage})`,
            boxSizing:'border-box',
            minHeight:'100vh',
            mt:'-100px',
            padding:'240px 0',
            backgroundRepeat:'no-repeat',
            backgroundSize:'cover',
            backgroundPosition:'center'
        }}>
            <Container>
               <Box sx={{
                   color:'white',
                   width:'550px',
               }}>
                   <Typography sx={{
                       typography:'h4',
                       fontSize:'15px',
                       mb:'8px'
                   }} >FAST FOOD BURGERS</Typography>
                   <Typography sx={{
                       typography:'hh14',
                       fontSize:'58px',
                       mb:'8px'
                   }}>The fastest food, for instant hunger.</Typography>
                   <Typography typography={'p'}>Some food has looked so awful that it's looked like something that the dog's brought home, yet after one mouthful I've been left eating my thoughts, my words & my food and gone back for seconds.</Typography>
                   <OrderButton>Order Now</OrderButton>
               </Box>
            </Container>
        </Box>
        

    </>
  )
}