import { FC } from "react";
import feedback from '../../assets/feedback.png';
import {
    SectionOrder,
    ContainerBox,
    OrderText,
    Autor,
    Description,
    Subautor,
    FeedbackImage,
    StyledQuoteIcon
} from './Styled';

export const Feedback: FC = () => {
    return (
        <>
            <SectionOrder>  
                <ContainerBox>  
                    <FeedbackImage src={feedback} alt="Burger" />
                    <OrderText>  
                        <StyledQuoteIcon/>
                        <Description>
                            Thanks a lot for the prompt service. Really appreciate. Excellence taste in Every Bite. Add a joy of best Taste. Foodie Moments.
                        </Description>
                        <Autor>Adele A. McNeill</Autor>
                        <Subautor>AMIRICAN</Subautor>  
                    </OrderText>  
                </ContainerBox>  
            </SectionOrder>  
        </>
    );
};