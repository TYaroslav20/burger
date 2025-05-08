import { Container, Typography } from "@mui/material";
import { OrderButton } from "../elements/OrderButton/OrderButton";
import styled from "styled-components";


export const SectionDownload = styled.section`
  padding: 60px 0;
    background: #312F30;  text-align: center;
`;
export const ContainerBox = styled(Container)`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const DownloadText = styled(Typography)`
    &.MuiTypography-root{
        font-weight: 500;
        font-size: 40px;
        color: #fff;
    }
`

export const StyledButton = styled(OrderButton)`

`;