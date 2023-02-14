import {
  BestSellers,
  Categories,
  Container,
  DailyOffers,
  GeneralInfo,
  InfoAndIcon,
} from "./styles";

import { FaHandshake, FaRegCreditCard, FaMobileAlt } from "react-icons/fa";
import { useCallback, useEffect, useState } from "react";
import { products } from "../../services/productsData.js";

export function SuperMarket() {
  const produtosMapeados = products.map((produto) => {
    return {
      name: produto.name,
      price: produto.price,
    };
  });

  console.log(produtosMapeados);

  return (
    <Container>
      <GeneralInfo>
        <InfoAndIcon>
          <FaHandshake size={40} />
          <h3>Pagamento seguro e rápido!</h3>
        </InfoAndIcon>
        <InfoAndIcon>
          <FaRegCreditCard size={40} />
          <h3>Até 8 parcelas sem juros!</h3>
        </InfoAndIcon>
        <InfoAndIcon>
          <FaMobileAlt size={40} />
          <h3>Você pode pagar com PIX!</h3>
        </InfoAndIcon>
      </GeneralInfo>

      <DailyOffers>
        {/*
        {
          produtosMapeados.map()
        } */}
      </DailyOffers>

      <BestSellers></BestSellers>
      <Categories></Categories>
    </Container>
  );
}
