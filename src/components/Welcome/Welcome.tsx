import { Container } from "@mui/material";
import { OrderButton } from "../elements/OrderButton/OrderButton";
import {
    BoxImg,
    BoxContent,
    Title,
    SubTitle,
    Desc
} from './Styled'
import { FC } from "react";
 export const Welcome : FC =()=>{
  return(
    <>
        <BoxImg>
            <Container>
               <BoxContent>
                   <SubTitle >FAST FOOD BURGERS</SubTitle>
                   <Title>The fastest food, for instant hunger.</Title>
                   <Desc>Some food has looked so awful that it's looked like something that the dog's brought home, yet after one mouthful I've been left eating my thoughts, my words & my food and gone back for seconds.</Desc>
                   <OrderButton>Order Now</OrderButton>
               </BoxContent>
            </Container>
        </BoxImg>
        

    </>
  )
}