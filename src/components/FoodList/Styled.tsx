import { Box,Card, CardContent, Typography } from "@mui/material";
import styled from "styled-components";
import foodlist1 from '../../assets/food-list-1.jpg'
import foodlist2 from '../../assets/food-list-2.jpg'
import foodlist3 from '../../assets/food-list-3.jpg'
import foodlist4 from '../../assets/food-list-4.jpg'

export const BoxContainer = styled(Box)`
    display: flex;
    justify-content: center;
    background-color: #1C1C1C;
`
export const BoxCard = styled(Box)`
    box-sizing: border-box;
    max-width: 1170;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 40px;
    padding: 100px 0;
`
export const foodItems = [  
    {  
      id: 1,  
      name: "Chicken Paella",  
      description: "We just don't make and sell food. Good food warms.",  
      image: foodlist1,  
    },  
    {  
      id: 2,  
      name: "Taco Del Mar",  
      description: "Taco Del Mar brings the best out of Mexican cuisine with fresh.",  
      image: foodlist2,  
    },  
    {  
      id: 3,  
      name: "Bon Au Pain",  
      description: "Bon Au Pain is a pioneer in the healthy fast food scene.",  
      image: foodlist3,  
    },  
    {  
      id: 4,  
      name: "Pizza Hut",  
      description: "Although the Pizza Hut Menu Prices have tumbled over the years.",  
      image: foodlist4,  
    },  
  ];
export const CardList = styled(Card)`
  &.MuiCard-root {
    overflow: hidden;
    text-align: center;
  
    background: #312F30;
    border-radius: 10px;
  }
`;
export const TypographyTitle = styled(Typography)`
    margin-bottom: 15px;
    font-size: 20px;
    color: white
`
export const CardContentStyle = styled(CardContent)`
    padding: 30px 20px;
    color: #fff;
    margin-bottom: 15px;
`
export const Title = styled(Typography)`
&.MuiTypography-root{
    margin-bottom: 15px;
    font-size: 20px;
}`

export const Desc = styled(Typography)`
    font-size: 16px;
    opacity: 0.7;
`