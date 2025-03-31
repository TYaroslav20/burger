import { Box, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { CardList } from "../elements/CardList/CardList";
import foodlist1 from '../../assets/food-list-1.jpg'
import foodlist2 from '../../assets/food-list-2.jpg'
import foodlist3 from '../../assets/food-list-3.jpg'
import foodlist4 from '../../assets/food-list-4.jpg'
import { FC } from "react";

 export const FoodList : FC =()=>{
    
  return(
  <>
  
  <Box sx={{
        display: "flex",
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '40px 10px',
        backgroundColor:' #1C1C1C;',
  }}>
  <CardList sx={{ maxWidth: 260 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="175"
          image={foodlist1}
        />
        <CardContent>
          <Typography>
          Chicken Paella
          </Typography>
          <Typography>
          We just don't make and sell food. Good food warms.
          </Typography>
        </CardContent>
      </CardActionArea>
    </CardList>
  <CardList sx={{ maxWidth: 260 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="175"
          image={foodlist2}
        />
        <CardContent>
          <Typography >
          Taco Del Mar
          </Typography>
          <Typography>
          Taco Del Mar brings the best out of Mexican cuisine with fresh.
          </Typography>
        </CardContent>
      </CardActionArea>
    </CardList>
  <CardList sx={{ maxWidth: 260 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="175"
          image={foodlist3}
        />
        <CardContent>
          <Typography>
          Bon Au Pain
          </Typography>
          <Typography>
          Bon Au Pain is a pioneer in the healthy fast food scene.
          </Typography>
        </CardContent>
      </CardActionArea>
    </CardList>
  <CardList sx={{ maxWidth: 260}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="175"
          image={foodlist4}
          alt="green iguana"
        />
        <CardContent>
          <Typography>
          Pizza Hut.
          </Typography>
          <Typography>
          Although the Pizza Hut Menu Prices have tumbled over the years.
          </Typography>
        </CardContent>
      </CardActionArea>
    </CardList>
  </Box>
  </>
  )}