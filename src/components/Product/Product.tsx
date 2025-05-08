import { FC } from "react";
import {
    products,
    ProductSection,
    ProductContainer,
    ProductCard,
    ProductTitle,
    ProductDesc,
    PriceContainer,
    ProductPrice,
    StyledButton,
} from './Style'

export const Product: FC = () => {

  return (
    <ProductSection>
      <ProductContainer>
        {products.map((product, index) => (
          <ProductCard key={index} $backgroundImage={product.image}>
          <ProductTitle variant="h4">{product.title}</ProductTitle>
          <ProductDesc>{product.desc}</ProductDesc>
          <PriceContainer>
            <ProductPrice>{product.price}</ProductPrice>
            <ProductPrice className="old">{product.oldPrice}</ProductPrice>
          </PriceContainer>
          <StyledButton variant="contained" size="small">
            Order now
          </StyledButton>
        </ProductCard>
        ))}
      </ProductContainer>
    </ProductSection>
  );
};