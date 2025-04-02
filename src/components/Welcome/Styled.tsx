import { Box, Typography } from "@mui/material";
import styled from "styled-components";
export const BoxImg = styled(Box)`
    background-image: url(/src/assets/welcome-bg.jpg);
    box-sizing: border-box;
    min-height: 100vh;
    margin-top: -100px;
    padding: 240px 0;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`
export const BoxContent = styled(Box)`
    color: white;
    width: 550px;
`

export const SubTitle = styled(Typography)`
&.MuiTypography-root{
    margin-bottom: 8px;
    font-weight: 400;
    font-size: 15px;
}
`

export const Title = styled(Typography)`
&.MuiTypography-root{
    margin-bottom: 8px;
    font-size: 58px;
    font-weight: 500;
}
`

export const Desc = styled(Typography)`
&.MuiTypography-root{
    margin: 40px 0;
    font-size: 18px;
    color: #fff;
}
`