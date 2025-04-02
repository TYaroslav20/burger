import { CardActionArea, CardMedia } from "@mui/material";
import {
  BoxContainer,
  BoxCard,
  foodItems,
  CardList,
  CardContentStyle,
  Title,
  Desc
 } from "./Styled";
import { FC } from "react";
export const FoodList : FC =()=>{
  return(
  <>
  <BoxContainer>
    <BoxCard >
          {foodItems.map((item)=>(
      <CardList key={item.id} sx={{ maxWidth: 260 }}>
        <CardActionArea>
          <CardMedia
            component='img'
            height='175'
            image={item.image}
            alt={item.name}
          />
          <CardContentStyle>
            <Title>{item.name}</Title>  
            <Desc>{item.description}</Desc> 
          </CardContentStyle>
        </CardActionArea>
      </CardList>
    ))}
    </BoxCard>
  </BoxContainer>
  </>
  )}