import { FooterEducational } from "../../../components/FooterEducational";
import {
  AddButton,
  Container,
  Description,
  ImageProfile,
  InformationContainer,
  MainMenu,
  MidiaContainer,
  Places,
  PlacesAndDetails,
  PlacesToPlay,
  Playlist,
  Style,
  Title,
  TitleOption,
} from "./styles";

import { useLocation, useNavigate } from "react-router-dom";

import { HeaderEducational } from "../../../components/HeaderEducational";

import band1 from "../../../assets/musicProfile/band1.jpg";
import band2 from "../../../assets/musicProfile/band2.jpg";
import band3 from "../../../assets/musicProfile/band3.jpg";
import { MdOutlinePermMedia } from "react-icons/md";

export function ProfilePage() {
  const navigate = useNavigate();
  const { state } = useLocation();

  return (
    <Container>
      <HeaderEducational />
      <MainMenu>
        <MidiaContainer>
          <ImageProfile src={state.image} alt="" />
          <ImageProfile src={band2} alt="" />
          <ImageProfile src={band3} alt="" />
          <AddButton>
            <MdOutlinePermMedia size={20} />
            <div>Ver Fotos/Vídeos</div>
          </AddButton>
        </MidiaContainer>
        <InformationContainer>
          <Title>{state.nameOfTheGroup}</Title>
          <PlacesToPlay>
            {state.typeOfMusicianData.map((place: any, index) => {
              return <Style key={index}>{place}</Style>;
            })}
          </PlacesToPlay>
          <Description>
            <div>
              Nós somos uma banda cover que adora tocar as músicas que as
              pessoas amam! Com anos de experiência, nos orgulhamos de nossa
              habilidade em reproduzir o som e a energia dos artistas originais
              que amamos.
            </div>
            <div>
              Desde os clássicos dos anos 80 até os hits mais recentes, temos um
              repertório variado que agrada a todos. Em nossos shows, adoramos
              ver a reação das pessoas quando reconhecem a música que estamos
              tocando e começam a dançar e cantar junto conosco. Nós nos
              divertimos muito tocando e adoramos ver que as pessoas se divertem
              junto conosco!
            </div>
          </Description>
          <PlacesAndDetails>
            <TitleOption>Lugares para Show</TitleOption>
            <PlacesToPlay>
              {state.placesToPlay.map((place: any, index) => {
                return <Places key={index}>{place}</Places>;
              })}
            </PlacesToPlay>
          </PlacesAndDetails>
          <PlacesAndDetails>
            <TitleOption>Estilos Musicais</TitleOption>
            <PlacesToPlay>
              {state.musicStyles.map((place: any, index) => {
                return <Places key={index}>{place}</Places>;
              })}
            </PlacesToPlay>
          </PlacesAndDetails>
          <Playlist>
            <TitleOption>Repertório:</TitleOption>
          </Playlist>
        </InformationContainer>
      </MainMenu>
      <FooterEducational />
    </Container>
  );
}
