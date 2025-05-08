import styled from "styled-components";
import { Box, Container } from "@mui/material";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

export const SectionOrder = styled.section`
  padding: 50px 0;
  background-color: #1C1C1C;
  text-align: center;
`;

export const ContainerBox = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    
`;

export const OrderText = styled(Box)`
  max-width: 600px;
  text-align: center;
`;

export const Autor = styled.h3`
    font-style: normal;
    font-weight: 500;
    color: #fff;
    font-size: 24px;
    margin-bottom: 0;
`;

export const Description = styled(Box)`
  font-size: 16px;
  color: #fff;
  margin: 30px 0;
  opacity: 0.7;
`;

export const Subautor = styled.span`
    font-weight: 500;
    font-size: 12px;
    opacity: 0.7;
    display: block;
    color: #fff;
    `;

export const FeedbackImage = styled(Box).attrs({
  as: "img",
})`
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
`;
export const StyledQuoteIcon = styled(FormatQuoteIcon)`
    &.MuiSvgIcon-root {
        font-size: 50px;
        color: #f6762c;
    }
`;