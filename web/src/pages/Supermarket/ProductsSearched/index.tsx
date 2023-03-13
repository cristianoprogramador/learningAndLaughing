import {
  BestSellers,
  Container,
  ContainerDailyOffers,
  DailyOffers,
  GeneralInfo,
  InfoAndIcon,
  LowText,
  Products,
  SectionTitle,
  SectionTitleSecond,
  TextContainer,
  Title,
} from "./styles";

import { FaHandshake, FaRegCreditCard, FaMobileAlt } from "react-icons/fa";

import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { useLocation, useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import { ProductsProps } from "../../../types/Products";
import { api } from "../../../utils/api";

export function ProductsSearched() {
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    if (!state) {
      navigate("/SuperMarket");
    }
  }, []);

  if (!state) return <></>;

  const [productsData, setProductsData] = useState<ProductsProps[]>([]);
  const [filter, setFilter] = useState(productsData);

  const nameCategory = "Pesquisa por:";

  const filtro = state;
  const capitalizedString2 = filtro.charAt(0).toUpperCase() + filtro.slice(1);
  const combinedString = nameCategory + " " + capitalizedString2;

  console.log("OQ VEM NO FILTRO" + filtro);

  function showProducts(state: string) {
    let FilteredItems;
    FilteredItems = productsData.filter(
      (item) =>
        item.name.toLowerCase().includes(state.toLowerCase()) ||
        item.description.toLowerCase().includes(state.toLowerCase()) ||
        item.brand.toLowerCase().includes(state.toLowerCase())
    );
    setFilter(FilteredItems);
  }

  async function fetchProducts() {
    try {
      const { data } = await api.get("/products");
      setProductsData(data.result);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    showProducts(state);
  }, [filtro, productsData]);

  return (
    <Container>
      <Header />
      <Title>SUPERMARKET</Title>
      <LowText>MELHORES PRODUTOS & MELHORES PREÇOS</LowText>
      <GeneralInfo>
        <InfoAndIcon>
          <FaHandshake size={40} />
          <h3>Pagamento seguro e rápido!</h3>
        </InfoAndIcon>
        <InfoAndIcon>
          <FaRegCreditCard size={40} />
          <h3>Até 10 parcelas sem juros!</h3>
        </InfoAndIcon>
        <InfoAndIcon>
          <FaMobileAlt size={40} />
          <h3>Você pode pagar com PIX!</h3>
        </InfoAndIcon>
      </GeneralInfo>

      <SectionTitle>{combinedString}</SectionTitle>

      <Products>
        {filter.map((product, index) => {
          return (
            <ContainerDailyOffers
              key={product.id}
              onClick={() =>
                navigate("/SuperMarket/ProductInfo", {
                  state: product,
                })
              }
            >
              <img src={product.image} alt="" />
              <TextContainer>
                <h3>{product.name}</h3>
                <h2>
                  R$ {"\n"}
                  {Number(product.price).toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </h2>
                <h4>{product.type}</h4>
                <h4>{product.brand}</h4>
              </TextContainer>
            </ContainerDailyOffers>
          );
        })}
      </Products>

      <Footer />
    </Container>
  );
}
