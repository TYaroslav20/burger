import { 
  Container,
  Link,
} from "@mui/material";
import { OrderButton } from "../elements/OrderButton/OrderButton";
import { FC } from "react";
import {
  SlyledAppBar,
  StyledToolbar,
  BoxMenu,
  StyledLink,
  MenuItems
} from './Styled'
 export const Header : FC =()=>{
  return(
    <>
    <Container>
    <SlyledAppBar position="static" >
      <StyledToolbar>       
        <BoxMenu sx={{
          '& > :not(style) ~ :not(style)': {
            ml: 2,   
            },
        }}>
          {MenuItems.map((item, index)=>(
            <Link href={item.href} key={index}
            >
              <StyledLink variant="body1"
              >{item.name}</StyledLink>
            </Link>
          ))}
        </BoxMenu>
                <OrderButton>Order Now</OrderButton>
            </StyledToolbar>
        </SlyledAppBar>
    </Container>
    

    </>
  )
}