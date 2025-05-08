import styled from "styled-components";
import { Button, Typography, Box } from "@mui/material";
import product1 from "../../assets/product-1.jpg";
import product2 from "../../assets/product-2.jpg";
import product3 from "../../assets/product-3.jpg";
import product4 from "../../assets/product-4.jpg";
export const products = [
    {
      title: "Dairy Queen",
      desc: "Dairy Queen is one of the biggest fast-food.",
      price: "$4",
      oldPrice: "$6",
      image: product1,
    },
    {
      title: "Pizza Hut",
      desc: "Although the Pizza Hut Menu Prices.",
      price: "$3",
      oldPrice: "$7",
      image: product2,
    },
    {
      title: "Burger King",
      desc: "Together with McDonald’s, Burger King.",
      price: "$4",
      oldPrice: "$6",
      image: product3,
    },
    {
      title: "Papa John’s",
      desc: "Papa John’s is one of the most popular fast-food.",
      price: "$4",
      oldPrice: "$6",
      image: product4,
    },
  ];

export const ProductSection = styled.section`
  padding: 150px 0;
  background-color: #1C1C1C;
  color: #fff;

`;

export const ProductContainer = styled(Box)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
`;

export const ProductCard = styled(Box)<{ $backgroundImage: string }>`
  box-sizing: border-box;
  max-width: 555px;
  min-height: 300px;
  padding: 60px 30px 60px 290px;
  background-color: #4b3a3a;
  background-image: url(${(props) => props.$backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  &:nth-child(even) {
    padding-left: 30px;
    padding-right: 290px;
  }
`;

export const ProductTitle = styled(Typography)`
  margin-bottom: 20px;
  font-size: 30px;
`;

export const ProductDesc = styled(Typography)`
  margin-bottom: 10px;
  opacity: 0.7;
`;
export const PriceContainer = styled(Box)`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 10px;

`;
export const ProductPrice = styled(Typography)`
  font-weight: 500;
  letter-spacing: 0.1em;
  color: #f6762c;
  & + & {
    margin-left: 5px;
  }

  &.old {
    text-decoration-line: line-through;
    opacity: 0.5;
  }
`;

export const StyledButton = styled(Button)`
  &.MuiButton-root {
    background: #F6762C;
    margin-top: 10px;
  }
    
`;