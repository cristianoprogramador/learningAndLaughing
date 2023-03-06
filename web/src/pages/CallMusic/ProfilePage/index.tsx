import { FooterEducational } from "../../../components/FooterEducational";
import {
  AddButton,
  Bands,
  BandsToPlay,
  Buttons,
  ContactButton,
  Container,
  Description,
  ImageProfile,
  InformationContainer,
  LessonsContainer,
  MainMenu,
  MidiaContainer,
  Places,
  PlacesAndDetails,
  PlacesToPlay,
  Playlist,
  PriceButton,
  SignUpIcons,
  Style,
  Title,
  TitleOption,
} from "./styles";

import facebookSVG from "../../../assets/svg/facebook.svg";
import instagramSVG from "../../../assets/svg/instagram.svg";

import { useLocation, useNavigate } from "react-router-dom";

import band1 from "../../../assets/musicProfile/band1.jpg";
import band2 from "../../../assets/musicProfile/band2.jpg";
import band3 from "../../../assets/musicProfile/band3.jpg";
import band4 from "../../../assets/musicProfile/band4.jpg";
import { MdOutlinePermMedia } from "react-icons/md";
import { IoIosListBox } from "react-icons/io";
import { GrContact } from "react-icons/gr";
import { HeaderCallMusic } from "../../../components/HeaderCallMusic";

export function ProfilePage() {
  const navigate = useNavigate();
  const { state } = useLocation();

  return (
    <Container>
      <HeaderCallMusic />
      <MainMenu>
        <MidiaContainer>
          <PriceButton>
            <div>Valor:</div>
            <strong>
              R$:{" "}
              {Number(state.priceByHour).toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </strong>
          </PriceButton>
          (Por Hora)
          <ImageProfile src={state.image} alt="" />
          <ImageProfile src={band2} alt="" />
          <ImageProfile src={band3} alt="" />
          <ImageProfile src={band4} alt="" />
          <AddButton>
            <MdOutlinePermMedia size={20} />
            <div>Ver Fotos/Vídeos</div>
          </AddButton>
        </MidiaContainer>
        <InformationContainer>
          <Title>{state.nameOfTheGroup}</Title>
          <PlacesAndDetails>
            <PlacesToPlay>
              {state.typeOfMusicianData.map((place: any, index) => {
                return <Places key={index}>{place}</Places>;
              })}
            </PlacesToPlay>
          </PlacesAndDetails>
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
          <PlacesAndDetails>
            <TitleOption>Repertório:</TitleOption>
            <BandsToPlay>
              {state.playlistItems.map((place: any, index) => {
                return <Bands key={index}>{place.bandName}</Bands>;
              })}
            </BandsToPlay>
          </PlacesAndDetails>
          <AddButton>
            <IoIosListBox size={20} />
            <div>Ver Lista de Músicas</div>
          </AddButton>
          <SignUpIcons>
            <div style={{ cursor: "pointer" }}>
              <img src={facebookSVG} alt="facebook" />
              <div>{state.nameOfTheGroup}</div>
            </div>
            <div style={{ cursor: "pointer" }}>
              <img src={instagramSVG} alt="instagram" />
              <div>@{state.nameOfTheGroup}</div>
            </div>
          </SignUpIcons>
          <Buttons>
            <ContactButton
              onClick={() =>
                navigate("/CallMusic/FormPage", {
                  state: state,
                })
              }
            >
              <div>Entrar em Contato</div>
              <GrContact size={35} />
            </ContactButton>
            {state.teach && (
              <LessonsContainer>
                <div>Aulas de</div>
                <div>
                  {state.teachWhat.map((teach, index) => {
                    return (
                      <div style={{ margin: 5, fontSize: 18 }} key={index}>
                        <strong>{teach}</strong>{" "}
                      </div>
                    );
                  })}
                </div>
              </LessonsContainer>
            )}
          </Buttons>
        </InformationContainer>
      </MainMenu>
      <FooterEducational />
    </Container>
  );
}
