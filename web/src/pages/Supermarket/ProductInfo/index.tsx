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
import { Header } from "../../../components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import { BsPin, BsTruck } from "react-icons/bs";
import { Button } from "../../../components/Button";
import { useEffect } from "react";

export function ProductInfo() {
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!state) {
      navigate("/SuperMarket");
    }
  }, []);

  if (!state) return <></>;

  const teste = Number(state.price.replace(/[^0-9.-]+/g, ""));

  console.log("OQ OURVE", teste);

  const priceWithDescont =
    (Number(state.price.replace(/[^0-9.-]+/g, "")) * 1000) / 10;

  const priceCorret = Math.round(priceWithDescont * 100) / 100;

  const valorFormatado = priceCorret.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const totalStock = Math.floor(Math.random() * 20);

  return (
    <Container>
      <Header />
      <Information>
        <ProductContainer>
          <ProductImages>
            <img src={state.image} alt="" />
          </ProductImages>

          <ProductDetails>
            <text className="title">{state.type}</text>
            <text className="name">
              <b>{state.name}</b>
            </text>
            <text>Por apenas:</text>
            <text className="price">{state.price}</text>
            <text>
              ou em 10 vezes <strong>(SEM JUROS)</strong> por:
            </text>
            <h3 style={{ margin: 10 }}>
              <strong>{valorFormatado}</strong>
            </h3>
            <text className="description">Descrição:</text>
            <text className="description">{state.description}</text>
          </ProductDetails>

          <ProductCheckout>
            <AddressContainer>
              <BsTruck size={25} />
              <AddressDetails>
                <text className="arrive">
                  Chegará grátis entre segunda-feira e sexta-feira 30 de março
                </text>
                <SendTo>
                  <BsPin size={18} />
                  <text className="sendto">Enviar para Rua Alameda 689</text>
                </SendTo>
              </AddressDetails>
            </AddressContainer>

            <StockContainer>
              <text>
                Estoque Disponivel <b>(38 unidades)</b>
              </text>
              <text>
                Quantidade: <b>1 unidade</b>
              </text>
              <text className="howMany">Você pode comprar até 10 unidades</text>
              <Button text="Comprar" style={{ width: "80%" }} />
              <Button
                text="Adicionar ao Carrinho "
                className="buttonDifferent"
              />
              <ImportantInf>
                <div>
                  <text>👀 Devolução grátis</text>
                  <text>✅ Compra Garantida</text>
                </div>
                <div>
                  <text>😎 Pontos no Site</text>
                  <text>😁 Cupom especial</text>
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
