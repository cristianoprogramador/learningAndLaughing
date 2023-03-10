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
  PriceButton,
  SignUpIcons,
  Title,
  TitleOption,
} from "./styles";

import facebookSVG from "../../../assets/svg/facebook.svg";
import instagramSVG from "../../../assets/svg/instagram.svg";

import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { GrContact } from "react-icons/gr";
import { MdOutlinePermMedia } from "react-icons/md";
import band2 from "../../../assets/musicProfile/band2.jpg";
import band3 from "../../../assets/musicProfile/band3.jpg";
import band4 from "../../../assets/musicProfile/band4.jpg";
import { FooterCallMusic } from "../../../components/FooterCallMusic";
import { HeaderCallMusic } from "../../../components/HeaderCallMusic";
import { ModalSetList } from "../../../components/ModalSetList";

export function ProfilePage() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const bandNames = state.playlistItems.reduce((nomes: any, item: any) => {
    if (!nomes.includes(item.bandName)) {
      nomes.push(item.bandName);
    }
    return nomes;
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            <div>Ver Fotos/V??deos</div>
          </AddButton>
        </MidiaContainer>
        <InformationContainer>
          <Title>{state.nameOfTheGroup}</Title>
          <PlacesAndDetails>
            <PlacesToPlay>
              {state.typeOfMusicianData.map((place: any, index: any) => {
                return <Places key={index}>{place}</Places>;
              })}
            </PlacesToPlay>
          </PlacesAndDetails>
          <Description>
            <div>
              N??s somos uma banda cover que adora tocar as m??sicas que as
              pessoas amam! Com anos de experi??ncia, nos orgulhamos de nossa
              habilidade em reproduzir o som e a energia dos artistas originais
              que amamos.
            </div>
            <div>
              Desde os cl??ssicos dos anos 80 at?? os hits mais recentes, temos um
              repert??rio variado que agrada a todos. Em nossos shows, adoramos
              ver a rea????o das pessoas quando reconhecem a m??sica que estamos
              tocando e come??am a dan??ar e cantar junto conosco. N??s nos
              divertimos muito tocando e adoramos ver que as pessoas se divertem
              junto conosco!
            </div>
          </Description>
          <PlacesAndDetails>
            <TitleOption>Lugares para Show</TitleOption>
            <PlacesToPlay>
              {state.placesToPlay.map((place: any, index: any) => {
                return <Places key={index}>{place}</Places>;
              })}
            </PlacesToPlay>
          </PlacesAndDetails>
          <PlacesAndDetails>
            <TitleOption>Estilos Musicais</TitleOption>
            <PlacesToPlay>
              {state.musicStyles.map((place: any, index: any) => {
                return <Places key={index}>{place}</Places>;
              })}
            </PlacesToPlay>
          </PlacesAndDetails>
          <PlacesAndDetails>
            <TitleOption>Repert??rio:</TitleOption>
            <BandsToPlay>
              {bandNames.map((place: any, index: any) => {
                return <Bands key={index}>{place}</Bands>;
              })}
            </BandsToPlay>
          </PlacesAndDetails>
          <ModalSetList
            title={"Ver Lista de M??sicas"}
            state={state.playlistItems}
          />
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
              <div>Enviar Proposta para Evento</div>
              <GrContact size={35} />
            </ContactButton>
            {state.teach && (
              <LessonsContainer
                onClick={() =>
                  navigate("/CallMusic/FormPageClass", {
                    state: state,
                  })
                }
              >
                <div>Aulas de</div>
                <div>
                  {state.teachWhat.map((teach: any, index: any) => {
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
      <FooterCallMusic />
    </Container>
  );
}
