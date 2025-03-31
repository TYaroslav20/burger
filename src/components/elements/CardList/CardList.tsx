import { Card, Typography } from "@mui/material";
import styled from "styled-components";
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