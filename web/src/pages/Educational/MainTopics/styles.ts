import styled from "styled-components";
import { SwiperSlide } from "swiper/react";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
`;

export const MainMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 4rem;
`;

export const Title = styled.div`
  font-size: x-large;
  font-weight: bold;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

export const TopicImage = styled.img`
  align-self: center;
  height: 150px;
  width: 100%;
  object-fit: contain;
  border-radius: 10px;
  cursor: pointer;
`;

export const TopicTitle = styled.div`
  font-size: x-large;
  font-weight: bold;
  display: flex;
  margin-top: 1rem;
  max-width: 150px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  text-align: center;
`;

export const TopicTitleQuiz = styled.div`
  font-size: x-large;
  font-weight: bold;
  display: flex;
  margin-top: 1rem;
  margin-bottom: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  text-align: center;
`;

export const ContainerTopic = styled.div`
  display: flex;
  flex-direction: row;
  width: 1300px;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-top: 2rem;
`;

export const ContainerTopicQuiz = styled.div`
  display: flex;
  flex-direction: row;
  width: 1300px;
  justify-content: center;
  align-self: center;
  margin-top: 5rem;
  gap: 4rem;
`;

export const TypeTopic = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Topics = styled(SwiperSlide)`
  margin-top: 3rem;
  cursor: pointer;
`;

export const TopicTitleVideo = styled.div`
  font-size: large;
  text-align: center;
  margin-bottom: 0.5rem;
  min-height: 44px;
  padding: 0 1rem;
`;

export const TopicResumeVideo = styled.div`
  font-size: medium;
  text-align: justify;
  margin-bottom: 0.5rem;
  min-height: 44px;
  padding: 0 1rem;
`;

export const TopicThumb = styled.img`
  height: 200px;
  width: 100%;
  object-fit: contain;
`;
