import styled from "styled-components";
import { SwiperSlide } from "swiper/react";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
`;

export const MainMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  margin-top: 3rem;
  margin-bottom: 4rem;
  min-height: 750px;
  width: 1250px;
  border-radius: 1rem;
  gap: 0.8rem;
`;

export const MidiaContainer = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  background-color: ${(props) => props.theme["gray-800"]};
`;

export const ImageProfile = styled.img`
  width: 320px;
  border-radius: 10px;
  object-fit: contain;
  border: 1px solid gray;
  margin-top: 2rem;
`;

export const AddButton = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${(props) => props.theme["blue-700"]};
  border-radius: 10px;
  padding: 1rem;
  gap: 1rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: 0.3s;

  :hover {
    background-color: ${(props) => props.theme["blue-300"]};
  }
`;

export const InformationContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  background-color: ${(props) => props.theme["gray-800"]};
`;

export const Title = styled.div`
  font-size: xx-large;
  margin: 1.5rem 0 0 0;
  font-weight: 600;
  padding: 1rem;
  background-color: ${(props) => props.theme["gray-700"]};
  border-radius: 1rem;
`;

export const Style = styled.div`
  font-weight: 600;
  padding: 0.5rem;
  border: 3px solid;
  border-color: ${(props) => props.theme["gray-700"]};
  border-radius: 1rem;
  transition: 0.5s;

  :hover {
    background-color: ${(props) => props.theme["gray-500"]};
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  text-align: justify;
  margin-top: 0.5rem;
  gap: 1rem;
  padding: 1rem;
  width: 700px;
`;

export const PlacesAndDetails = styled.div`
  display: flex;
  flex-direction: column;
  text-align: justify;
  padding: 1rem;
  width: 700px;
`;

export const TitleOption = styled.div`
  font-size: large;
  margin: 0.5rem 0;
  font-weight: 600;
  padding: 1rem;
  background-color: ${(props) => props.theme["gray-700"]};
  border-radius: 1rem;
  display: flex;
  align-self: center;
`;

export const PlacesToPlay = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: justify;
  gap: 1rem;
  padding: 1rem;
`;

export const Places = styled.div`
  font-size: medium;
  font-weight: 600;
  padding: 10px 10px;
  background-color: ${(props) => props.theme["gray-700"]};
  border-radius: 1rem;
  display: flex;
  align-self: center;
  transition: 0.3s;

  :hover {
    background-color: ${(props) => props.theme["gray-500"]};
  }
`;

export const Playlist = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: justify;
  gap: 1rem;
  padding: 1rem;
`;
