import {
  BestSellers,
  Categories,
  Container,
  ContainerDailyOffers,
  DailyOffers,
  GeneralInfo,
  InfoAndIcon,
  LowText,
  SectionTitle,
  Title,
} from "./styles";

import { FaHandshake, FaRegCreditCard, FaMobileAlt } from "react-icons/fa";
import { products } from "../../services/productsData.js";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export function SuperMarket() {
  const dailyOfferProducts = products.filter(
    (product) => product.special === "dailyoffer"
  );

  const bestSellersProducts = products.filter(
    (product) => product.special === "bestsellers"
  );

  console.log(dailyOfferProducts);
  console.log(products);

  return (
    <Container>
      <Title>MARKETPLACE</Title>
      <LowText>MELHORES PRODUTOS & MELHORES PREÇOS</LowText>
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

      <SectionTitle>Melhores ofertas do dia</SectionTitle>
      <Swiper
        style={{
          height: "400px",
          width: "80%",
        }}
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={5}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {dailyOfferProducts.map((product, index) => {
          return (
            <ContainerDailyOffers key={product.id}>
              <img src={product.image} alt="" />
              <h3>{product.name}</h3>
              <h2>{product.price}</h2>
              <h4>{product.type}</h4>
              <h4>{product.brand}</h4>
            </ContainerDailyOffers>
          );
        })}
      </Swiper>

      <SectionTitle>Produtos mais vendidos</SectionTitle>

      <Swiper
        style={{
          height: "430px",
          width: "80%",
        }}
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={5}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {bestSellersProducts.map((product, index) => {
          return (
            <BestSellers key={product.id}>
              <img src={product.image} alt="" />
              <h3>{product.name}</h3>
              <h2>{product.price}</h2>
              <h4>{product.type}</h4>
              <h4>{product.brand}</h4>
            </BestSellers>
          );
        })}
      </Swiper>
      <Categories></Categories>
    </Container>
  );
}
