import {
  BestSellers,
  Container,
  ContainerDailyOffers,
  DailyOffers,
  GeneralInfo,
  InfoAndIcon,
  LowText,
  SectionTitle,
  SectionTitleSecond,
  TextContainer,
  Title,
} from "./styles";

import { FaHandshake, FaRegCreditCard, FaMobileAlt } from "react-icons/fa";

import { typeOfProduct } from "../../services/typeOfProductData.js";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Footer } from "../../components/Footer";
import { HeaderMarket } from "../../components/HeaderMarket";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../utils/api";
import { ProductsProps } from "../../types/Products";

export function SuperMarket() {
  const navigate = useNavigate();
  const [filtered, setFiltered] = useState();

  const [productsData, setProductsData] = useState<ProductsProps[]>([]);

  // console.log("Vindo da API", productsData);
  // console.log("Vindo da Javascript", products);

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

  const dailyOfferProducts = productsData.filter(
    (product) => product.special === "dailyoffer"
  );

  const bestSellersProducts = productsData.filter(
    (product) => product.special === "bestsellers"
  );

  return (
    <Container>
      <HeaderMarket />
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

      <SectionTitle>Melhores ofertas do dia</SectionTitle>
      <Swiper
        style={{
          height: "400px",
          width: "80%",
          paddingBottom: 20,
        }}
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={5}
        navigation
      >
        {dailyOfferProducts.map((product, index) => {
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
                  R$
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
      </Swiper>

      <SectionTitleSecond>Produtos mais vendidos</SectionTitleSecond>

      <Swiper
        style={{
          height: "400px",
          width: "80%",
          paddingBottom: 20,
        }}
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={5}
        navigation
      >
        {bestSellersProducts.map((product, index) => {
          return (
            <BestSellers
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
            </BestSellers>
          );
        })}
      </Swiper>

      <SectionTitleSecond>
        Selecione uma das categorias abaixo:
      </SectionTitleSecond>

      <Swiper
        style={{
          height: "320px",
          width: "80%",
          paddingBottom: 20,
          marginBottom: 50,
        }}
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={5}
        navigation
      >
        {typeOfProduct.map((product, index) => {
          return (
            <BestSellers
              key={product.id}
              // onClick={() => handleFilter(product.type)}
              onClick={() =>
                navigate("/SuperMarket/ProductsFiltered", {
                  state: product.type,
                })
              }
            >
              <img src={product.image} alt="" />
              <h1> {product.type.toUpperCase()} </h1>
            </BestSellers>
          );
        })}
      </Swiper>

      <Footer />
    </Container>
  );
}
