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

import { typeOfProduct } from "../../../services/typeOfProductData.js";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { useLocation, useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import { api } from "../../../utils/api";
import { ProductsProps } from "../../../types/Products";

export function ProductsFiltered() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [productsData, setProductsData] = useState<ProductsProps[]>([]);
  const [loading, setLoading] = useState(true);

  const [filter, setFilter] = useState(productsData);

  const [nameCategory, setNameCategory] = useState("Todos os produtos");

  async function fetchProducts() {
    try {
      const { data } = await api.get("/products");
      setProductsData(data.result);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (productsData.length > 0) {
      if (state === "dailyoffer") {
        const filteredItems = productsData.filter(
          (product) => product.special === state
        );
        setFilter(filteredItems);
        setNameCategory("Melhores ofertas do dia");
      } else if (state === "bestsellers") {
        const filteredItems = productsData.filter(
          (product) => product.special === state
        );
        setFilter(filteredItems);
        setNameCategory("Produtos mais vendidos");
      } else if (state !== null) {
        const filteredItems = productsData.filter(
          (product) => product.type === state
        );
        setFilter(filteredItems);
        setNameCategory("Categoria: " + state.toUpperCase());
      } else {
        setFilter(productsData);
        setNameCategory("Todos os produtos");
      }
    }
  }, [state, productsData]);

  console.log("OQ TEM AQUI", productsData);

  if (loading) {
    return <p>Carregando...</p>;
  }

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

      <SectionTitle>{nameCategory}</SectionTitle>

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
