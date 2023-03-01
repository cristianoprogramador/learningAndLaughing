import { FooterEducational } from "../../../components/FooterEducational";
import {
  Container,
  ContainerTopic,
  ContainerTopicQuiz,
  MainMenu,
  Title,
  TopicImage,
  TopicResumeVideo,
  Topics,
  TopicThumb,
  TopicTitle,
  TopicTitleQuiz,
  TopicTitleVideo,
  TypeTopic,
} from "./styles";

import watchingvideo from "../../../assets/svg/watchingvideo.svg";
import videoproject from "../../../assets/svg/videoproject.svg";
import quiz from "../../../assets/svg/quiz.svg";
import articles from "../../../assets/svg/articles.svg";

import { Navigation, Pagination } from "swiper";

import { Swiper } from "swiper/react";
import { useState, useEffect } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { HeaderEducational } from "../../../components/HeaderEducational";
import { useLocation, useNavigate } from "react-router-dom";

export interface TopicDetailsProps {
  id: number;
  type: string;
  link: string;
  title: string;
  resume: string;
  image: string;
}

export function MainTopics() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [data, setData] = useState(state);
  const [filter, setFilter] = useState<TopicDetailsProps[]>(data.topics);

  const [videosData, setVideosData] = useState(filter);
  const [videosProject, setVideosProject] = useState(filter);
  const [articlesData, setArticlesData] = useState(filter);

  function showTopics() {
    setVideosData(filter.filter((topic) => topic.type === "video"));
    setVideosProject(filter.filter((topic) => topic.type === "videoproject"));
    setArticlesData(filter.filter((topic) => topic.type === "article"));
  }

  useEffect(() => {
    showTopics();
  }, [state]);

  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <Container>
      <HeaderEducational />
      <MainMenu>
        <Title>Principais Linguagens/Tópicos:</Title>

        <ContainerTopic>
          <TypeTopic>
            <TopicImage src={watchingvideo} />
            <TopicTitle>Videos Gerais</TopicTitle>
          </TypeTopic>
          <Swiper
            style={{
              width: "80%",
            }}
            modules={[Navigation, Pagination]}
            slidesPerView={3}
            navigation
          >
            {videosData.map((topic, index) => {
              return (
                <Topics
                  key={topic.id}
                  onClick={() => openInNewTab(`${topic.link}`)}
                >
                  <TopicTitleVideo>{topic.title}</TopicTitleVideo>
                  <TopicThumb
                    src={`https://img.youtube.com/vi/${topic.image}/0.jpg`}
                    alt=""
                  />
                </Topics>
              );
            })}
          </Swiper>
        </ContainerTopic>

        <ContainerTopic>
          <TypeTopic>
            <TopicImage src={videoproject} />
            <TopicTitle>Videos de Projetos</TopicTitle>
          </TypeTopic>
          <Swiper
            style={{
              width: "80%",
            }}
            modules={[Navigation, Pagination]}
            slidesPerView={3}
            navigation
          >
            {videosProject.map((topic, index) => {
              return (
                <Topics
                  key={topic.id}
                  onClick={() => openInNewTab(`${topic.link}`)}
                >
                  <TopicTitleVideo>{topic.title}</TopicTitleVideo>
                  <TopicThumb
                    src={`https://img.youtube.com/vi/${topic.image}/0.jpg`}
                    alt=""
                  />
                </Topics>
              );
            })}
          </Swiper>
        </ContainerTopic>

        <ContainerTopic>
          <TypeTopic>
            <TopicImage src={articles} />
            <TopicTitle>Artigos</TopicTitle>
          </TypeTopic>
          <Swiper
            style={{
              width: "80%",
            }}
            modules={[Navigation, Pagination]}
            slidesPerView={3}
            navigation
          >
            {articlesData.map((topic, index) => {
              return (
                <Topics
                  key={topic.id}
                  onClick={() => openInNewTab(`${topic.link}`)}
                >
                  <TopicTitleVideo>{topic.title}</TopicTitleVideo>
                  <TopicResumeVideo>{topic.resume}</TopicResumeVideo>
                </Topics>
              );
            })}
          </Swiper>
        </ContainerTopic>

        <ContainerTopicQuiz>
          <TypeTopic onClick={() => navigate("/Educational/QuizGame")}>
            <TopicImage src={quiz} />
            <TopicTitleQuiz>Quiz - (Mais de 80 perguntas)</TopicTitleQuiz>
            <TopicResumeVideo>
              Tente fazer a maior pontuação em 10 perguntas que serão sorteadas
              para você, você pode fazer quantas vezes quiser!
            </TopicResumeVideo>
          </TypeTopic>
        </ContainerTopicQuiz>
      </MainMenu>
      <FooterEducational />
    </Container>
  );
}
