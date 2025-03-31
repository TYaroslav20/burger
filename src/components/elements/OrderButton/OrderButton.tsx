import { Button } from "@mui/material";
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