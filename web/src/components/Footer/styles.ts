import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export const Container = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) => props.theme["gray-800"]};
  margin-top: 40px;
  padding-bottom: 1rem;
  padding-top: 1rem;
`;

export const LogoView = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ImageLogo = styled.img`
  height: 4em;
  justify-content: center;
  align-items: center;
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const IconView = styled.div`
  display: flex;
  height: 3em;
  width: 3em;
  border-radius: 30px;
  align-items: center;
  justify-content: center;

  align-self: center;
  cursor: pointer;

  transition: 300ms;

  :hover {
    background-color: #626262;
  }
`;
