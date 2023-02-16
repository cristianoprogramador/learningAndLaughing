import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-top: 1rem;
`;

export const TextContainer = styled.div`
  margin-left: 1rem;
  margin-top: 1rem;
`;

export const LowText = styled.h3`
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-top: 1rem;
  padding: 1rem;
  background-color: ${(props) => props.theme["gray-700"]};
  border-radius: 40px;
`;

export const SectionTitle = styled.h1`
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 80%;
`;

export const SectionTitleSecond = styled.h1`
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 80%;
  margin-top: 3rem;
`;

export const GeneralInfo = styled.main`
  background-color: ${(props) => props.theme["gray-700"]};
  border-radius: 0.4rem;
  margin-top: 1rem;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 80rem;
`;

export const InfoAndIcon = styled.main`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
  padding: 1rem;
`;

export const DailyOffers = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ContainerDailyOffers = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 1rem;

  background-color: ${(props) => props.theme["gray-800"]};
  border-radius: 1rem;
  cursor: pointer;

  img {
    align-self: center;
    height: 250px;
    width: 100%;
    object-fit: contain;
    border-radius: 10px;
    cursor: pointer;
  }

  h2 {
    justify-content: flex-start;
    align-items: flex-start;
    align-self: flex-start;
    color: ${(props) => props.theme["green-700"]};
  }

  h3 {
    text-align: left;
  }
`;

export const BestSellers = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 1rem;

  background-color: ${(props) => props.theme["gray-800"]};
  border-radius: 1rem;
  cursor: pointer;

  img {
    align-self: center;
    height: 250px;
    width: 100%;
    object-fit: contain;
    border-radius: 10px;
    cursor: pointer;
    background-color: ${(props) => props.theme["gray-700"]};
  }

  h2 {
    justify-content: flex-start;
    align-items: flex-start;
    align-self: flex-start;
    color: ${(props) => props.theme["green-700"]};
  }

  h3 {
    text-align: left;
  }

  h1 {
    font-size: x-large;
    text-align: center;
    margin-top: 15px;
  }
`;
