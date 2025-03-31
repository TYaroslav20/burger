import { AppBar, Box, Container, Link, Toolbar } from "@mui/material";
import { OrderButton } from "../elements/OrderButton/OrderButton";
import { FC } from "react";
 export const Header : FC =()=>{
  return(
    <>
    <Container>
    <AppBar position="static" >
      <Toolbar sx={{
        display:'flex',
        justifyContent:"space-between"
      }}>       
        <Box sx={{
          //   как парвило такое выносится в отдельный стилизованный компонент
          //   что то типпа HeaderWrapper
          display: 'flex',
          typography: 'body1',
          justifyContent: 'center',
          alignItems: 'center',
          '& > :not(style) ~ :not(style)': {
            ml: 2,   
            },
        }}>
                {/* Вот это всето что ниже с Link - вообще от лукавого :) */}
                <Link href="#" color={"inherit"} underline="none">HOME</Link>
                <Link href="#" color={"inherit"} underline="none">PAGES</Link>
                <Link href="#" color={"inherit"} underline="none">OUR OFFER</Link>
                <Link href="#" color={"inherit"} underline="none">PRICING</Link>
                <Link href="#" color={"inherit"} underline="none">PRICING</Link>
                <Link href="#" color={"inherit"} underline="none">PRICING</Link>
                <Link href="#" color={"inherit"} underline="none">PRICING</Link>
        </Box>
                <OrderButton>Order Now</OrderButton>
                
            </Toolbar>
        </AppBar>
    </Container>
    

    </>
  )
}