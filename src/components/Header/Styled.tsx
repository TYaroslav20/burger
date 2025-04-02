import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import styled from "styled-components";

export const MenuItems = [  
    { name: "HOME", href: "#" },  
    { name: "PAGES", href: "#" },  
    { name: "OUR OFFER", href: "#" },  
    { name: "PRICING", href: "#" },  
    ]; 


export const SlyledAppBar = styled(AppBar)`
  &.MuiPaper-root{
    background: none;
    box-shadow: none;
  }`;
export const StyledToolbar = styled(Toolbar)`
display: flex;
justify-content: space-between;
align-items: center;
`;
export const BoxMenu = styled(Box)`
  display: flex;  
  typography: body1;  
  justify-content: center;  
  align-items: center;  
`;
export const StyledLink = styled(Typography)`  
  color: white;  // Устанавливаем цвет текста в белый  
  text-decoration: none; // Убираем подчеркивание  

  &:hover {  
    text-decoration: none; // Убираем подчеркивание при наведении  
  } 
`;  