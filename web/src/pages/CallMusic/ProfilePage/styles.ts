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
  margin: 1.5rem 0 1.5rem 0;
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
  justify-content: space-between;
  text-align: justify;
  width: 700px;
  padding: 1rem;
  border: 1px solid ${(props) => props.theme["gray-900"]};
  margin-bottom: 1rem;
  border-radius: 1rem;
`;

export const TitleOption = styled.div`
  font-size: large;
  font-weight: 600;
  padding: 1rem;
  background-color: ${(props) => props.theme["gray-700"]};
  border-radius: 1rem;
  display: flex;
  align-self: center;
  margin: 0 0 1rem 0;
`;

export const PlacesToPlay = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-content: center;
  gap: 1rem;
`;

export const Places = styled.div`
  font-size: medium;
  display: flex;
  text-align: center;
  align-self: center;
  justify-content: center;
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

export const BandsToPlay = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  gap: 1rem;
`;

export const Bands = styled.div`
  display: flex;
  font-size: medium;
  height: 40px;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  padding: 10px 10px;
  background-color: ${(props) => props.theme["gray-700"]};
  border-radius: 1rem;
  align-self: center;
  transition: 0.3s;

  :hover {
    background-color: ${(props) => props.theme["gray-500"]};
  }
`;

export const SignUpIcons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 1.5rem;
  width: 100%;

  img {
    height: 80px;
    width: 80px;
    cursor: pointer;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ContactButton = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  background-color: ${(props) => props.theme["green-700"]};
  border-radius: 10px;
  padding: 1.5rem;
  gap: 1rem;

  cursor: pointer;
  transition: 0.3s;

  font-size: larger;

  :hover {
    background-color: ${(props) => props.theme["green-500"]};
  }
`;

export const PriceButton = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.theme["blue-700"]};
  border-radius: 10px;
  padding: 1.5rem;
  gap: 1rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: 0.3s;

  font-size: xx-large;

  :hover {
    background-color: ${(props) => props.theme["blue-500"]};
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

export const LessonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  background-color: ${(props) => props.theme["blue-700"]};
  border-radius: 10px;
  padding: 1rem;
  cursor: pointer;
`;
