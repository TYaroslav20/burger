import { Box, Container } from "@mui/material";  
import styled from "styled-components";  

// Стили для секции заказа  
export const SectionOrder = styled(Box)`  
    background: #312F30;  
    padding: 60px 0;  
`;  

// Стили для контейнера  
export const ContainerBox = styled(Container)`  
    display: flex;  
    justify-content: space-between;  
    align-items: center;  
    padding-right: 90px;  
`;  

// Стили для текста  
export const OrderText = styled(Box)`  
    max-width: 360px;  
`;  

export const Title = styled.h3`  
    margin-bottom: 25px;  
    font-size: 44px;  
    color: white;  
`;  

export const Description = styled.p`  
    margin-bottom: 15px;  
    opacity: 0.7;  
    color: white;  
`;  

export const Price = styled.span`  
    font-weight: 500;  
    letter-spacing: 0.1em;  
    color: #F6762C;  
    font-size: 20px;  
`;  

export const OldPrice = styled.span`  
    font-size: 16px;  
    text-decoration-line: line-through;  
    opacity: 0.5;  
    margin-left: 3px;  
    padding-right: 30px;
    color: #F6762C;
`;  
