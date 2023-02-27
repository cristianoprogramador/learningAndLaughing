import { FooterEducational } from "../../components/FooterEducational";
import {
  Container,
  Introduction,
  MainMenu,
  Title,
  TopicImage,
  Topics,
  TopicsPrincipal,
  TopicsType,
  TopicTitle,
} from "./styles";
import {
  topics,
  typeOfActivities,
  typeOfTopics,
} from "../../services/articlesCoding";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { HeaderEducational } from "../../components/HeaderEducational";
import { useNavigate } from "react-router-dom";

export function Educational() {
  const navigate = useNavigate();

  return (
    <Container>
      <HeaderEducational />
      <MainMenu>
        <Introduction>
          <div>
            O nosso site educacional é um recurso online que fornece informações
            e recursos valiosos sobre linguagens de programação, incluindo
            React, JavaScript, Java e muitas outras.{" "}
            <strong>
              Não estamos recebendo nada para promover o contéudo abaixo.
            </strong>
          </div>
          <div>
            Além dos artigos, também oferecemos quiz para testar seu
            conhecimento e verificar se você está compreendendo as informações
            apresentadas nos artigos. E, para complementar a sua aprendizagem,
            disponibilizamos links para vídeos tutoriais que cobrem diversos
            tópicos sobre as principais linguagens de programação.
          </div>
        </Introduction>

        <Title>Principais Linguagens/Tópicos:</Title>

        <Swiper
          style={{
            width: "80%",
          }}
          modules={[Navigation, Pagination]}
          slidesPerView={5}
          navigation
        >
          {topics.map((topic, index) => {
            return (
              <Topics
                key={topic.id}
                onClick={() =>
                  navigate("/Educational/MainTopics", { state: topic })
                }
              >
                <TopicImage src={topic.image} />
                <TopicTitle>{topic.name}</TopicTitle>
              </Topics>
            );
          })}
        </Swiper>
        <Title>Áreas:</Title>

        <TopicsType>
          {typeOfTopics.map((topic, index) => {
            return (
              <Topics key={topic.id}>
                <TopicImage src={topic.image} />
                <TopicTitle>{topic.name}</TopicTitle>
              </Topics>
            );
          })}
        </TopicsType>
        <Title>Contéudo:</Title>

        <TopicsPrincipal>
          {typeOfActivities.map((topic, index) => {
            return (
              <Topics key={topic.id}>
                <TopicImage src={topic.image} />
                <TopicTitle>{topic.name}</TopicTitle>
              </Topics>
            );
          })}
        </TopicsPrincipal>
      </MainMenu>
      <FooterEducational />
    </Container>
  );
}
