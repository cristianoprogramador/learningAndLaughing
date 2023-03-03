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
  margin-top: 1rem;
  margin-bottom: 4rem;
  min-height: 650px;
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

export const SectionTitle = styled.div`
  margin-top: 2rem;
  justify-content: center;
  align-items: center;
  align-self: center;
  font-size: x-large;
  font-weight: bold;
`;

export const GridContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-top: 1rem;

  border-radius: 1rem;
`;

export const ContainerProfile = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 3rem;
`;

export const ProfileContaine = styled.div`
  width: 340px;
  height: 340px;
  border-radius: 30px;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  background-position: center;
  background-size: cover;
  cursor: pointer;
`;

export const BandInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  margin-bottom: 1rem;
  margin-left: 1rem;
  gap: 0.5rem;
  background-color: transparent;
`;

export const NameOfBand = styled.div`
  color: white;
  font-size: 26px;
  text-shadow: black 1px 1px 2px;
`;

export const MusicStyle = styled.div`
  font-size: medium;
  color: white;
  text-shadow: black 1px 1px 2px;
`;

export const PriceInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  margin-bottom: 1rem;
  margin-left: 0.7rem;
  margin-right: 0.4rem;
`;

export const Price = styled.pre`
  font-size: x-large;
  text-align: center;
  font-family: "Roboto", sans-serif;
  text-shadow: black 1px 1px 2px;
`;
