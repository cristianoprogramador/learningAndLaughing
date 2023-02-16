import {
  Container,
  ProductCheckout,
  ProductContainer,
  ProductDetails,
  ProductImages,
} from "./styles";

import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { useLocation } from "react-router-dom";

export function ProductInfo() {
  const { state } = useLocation();

  console.log(state);

  return (
    <Container>
      <Header />
      <ProductContainer>
        <ProductImages>
          <img src={state.image} alt="" />
        </ProductImages>

        <ProductDetails></ProductDetails>

        <ProductCheckout></ProductCheckout>
      </ProductContainer>
      <Footer />
    </Container>
  );
}
