import { SectionOrder, OrderText, Title, Description, Price, OldPrice,ContainerBox } from "./Style";
import { OrderButton } from "../elements/OrderButton/OrderButton";
import burger from '../../assets/burger.png'; 
import { FC } from "react";
export const Order: FC = () => {  
    return (  
        <SectionOrder>  
            <ContainerBox>  
                <img src={burger} alt="Burger"/> 
                <OrderText>  
                    <Title>Burger King</Title>  
                    <Description>Together with McDonald’s, Burger King has grown to become synonymous with burgers in the US.</Description>  
                    <Price>$6</Price>  
                    <OldPrice>$8</OldPrice>  
                    <OrderButton href="#!">Order now</OrderButton>
                </OrderText>  
            </ContainerBox>  
        </SectionOrder>  
    );  
}  