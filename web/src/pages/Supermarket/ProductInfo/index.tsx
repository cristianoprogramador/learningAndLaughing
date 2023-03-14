import {
  AddressContainer,
  AddressDetails,
  Container,
  ImportantInf,
  Information,
  ProductCheckout,
  ProductContainer,
  ProductDetails,
  ProductImages,
  SendTo,
  StockContainer,
} from "./styles";

import { Footer } from "../../../components/Footer";
import { HeaderMarket } from "../../../components/HeaderMarket";
import { useLocation, useNavigate } from "react-router-dom";
import { BsPin, BsTruck } from "react-icons/bs";
import { Button } from "../../../components/Button";
import { useEffect } from "react";
import { useCart } from "../../../hooks/useCart";

export function ProductInfo() {
  const { state } = useLocation();
  const navigate = useNavigate();

  console.log(state);

  useEffect(() => {
    if (!state) {
      navigate("/SuperMarket");
    }
  }, []);

  if (!state) return <></>;

  const priceWithDescont = state.price / 10;

  const priceCorret = Math.round(priceWithDescont * 100) / 100;

  const valorFormatado = priceCorret.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const number = Number(state.price);

  const formattedNumber = number.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const { addProductToCart } = useCart();

  function handleAddToCart() {
    const productToAdd = {
      ...state,
      quantity: 1,
    };
    addProductToCart(productToAdd);
  }

  function handleGoToCart() {
    const productToAdd = {
      ...state,
      quantity: 1,
    };
    addProductToCart(productToAdd);
    navigate("/SuperMarket/Cart");
  }

  return (
    <Container>
      <HeaderMarket />
      <Information>
        <ProductContainer>
          <ProductImages>
            <img src={state.image} alt="" />
          </ProductImages>

          <ProductDetails>
            <p className="title">{state.type}</p>
            <p className="name">
              <b>{state.name}</b>
            </p>
            <p>Por apenas:</p>
            <p className="price">{formattedNumber}</p>
            <p>
              ou em 10 vezes <strong>(SEM JUROS)</strong> por:
            </p>
            <h3 style={{ margin: 10 }}>
              <strong>{valorFormatado}</strong>
            </h3>
            <p className="description">Descrição:</p>
            <p className="description">{state.description}</p>
          </ProductDetails>

          <ProductCheckout>
            <AddressContainer>
              <BsTruck size={25} />
              <AddressDetails>
                <p className="arrive">Frete grátis para todo o Brasil</p>
                <p style={{ textAlign: "center" }}>
                  <strong>(Promoção Especial)</strong>
                </p>
                <SendTo>
                  <BsPin size={18} />
                  <p className="sendto">Disponível apenas para Brasil</p>
                </SendTo>
              </AddressDetails>
            </AddressContainer>

            <StockContainer>
              <p>
                Estoque Disponivel <b>(38 unidades)</b>
              </p>
              <p>
                Quantidade: <b>1 unidade</b>
              </p>
              <p className="howMany">Você pode comprar até 10 unidades</p>
              <Button
                text="Comprar"
                style={{ width: "80%" }}
                onClick={handleGoToCart}
              />
              <Button
                text="Adicionar ao Carrinho"
                className="buttonDifferent"
                onClick={handleAddToCart}
              />
              <ImportantInf>
                <div>
                  <p>👀 Devolução grátis</p>
                  <p>✅ Compra Garantida</p>
                </div>
                <div>
                  <p>😎 Pontos no Site</p>
                  <p>😁 Cupom especial</p>
                </div>
              </ImportantInf>
            </StockContainer>
          </ProductCheckout>
        </ProductContainer>
      </Information>
      <Footer />
    </Container>
  );
}
