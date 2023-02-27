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

export const Introduction = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  text-align: center;
  margin-top: 1rem;
  border: 2px solid gray;
  padding: 1rem;
  border-radius: 0.5rem;
  font-size: medium;
  gap: 1rem;
  width: 900px;
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

export const Topics = styled(SwiperSlide)`
  margin-top: 3rem;
`;

export const TopicsType = styled(SwiperSlide)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 40%;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

export const TopicsPrincipal = styled(SwiperSlide)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 65%;
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
`;
