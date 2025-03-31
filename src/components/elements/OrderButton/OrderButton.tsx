import { Button } from "@mui/material";
// import { Button, styled } from "@mui/material";
// styled можно использовать прямо из @mui/material
import styled from "styled-components";

export const OrderButton = styled(Button)`
  &.MuiButton-root {
    margin-top: 8px;
    width: 165px;
    height: 50px;
    font-weight: 500;
    font-size: 16px;
    text-transform: uppercase;
    background: #F6762C;
    border-radius: 5px;
    transition: opacity 0.3s;
    color: white;
    &:hover {
    opacity: 0.8;
  }
  }
`;

export const OrderButtonNew1 = styled(Button)({
    '&.MuiButton-root': {
    marginTop: 8,
    width: 165,
    height: 50,
    fontWeight: 500,
    fontSize: 16,
    textTransform: 'uppercase',
    background: '#F6762C',
    borderRadius: 5,
    transition: 'opacity 0.3s',
    color: 'white',
        '&:hover': {
            opacity: '0.8'
        }
    }
})

