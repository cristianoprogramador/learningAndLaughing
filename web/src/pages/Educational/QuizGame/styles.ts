import styled from "styled-components";
import { SwiperSlide } from "swiper/react";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
`;

export const MainMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  align-self: center;
  width: 70%;
  margin-bottom: 4rem;
  min-height: 715px;
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

export const Description = styled.div`
  font-size: large;
  font-weight: bold;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

export const Explanations = styled.div`
  width: 490px;
  text-align: justify;
  line-height: 30px;
  font-size: large;
  font-weight: bold;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

export const TitleQuiz = styled.div`
  font-size: x-large;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

export const QuizContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-self: center;
  margin-top: 1.5rem;
  gap: 0.2rem;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
`;

export const OptionsContainer = styled.button``;

export const ScoreView = styled.div`
  font-size: x-large;
  font-weight: bold;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
`;
