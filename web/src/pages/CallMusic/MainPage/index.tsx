import { FooterEducational } from "../../../components/FooterEducational";
import {
  BandInfo,
  Container,
  ContainerProfile,
  GridContainer,
  Introduction,
  MainMenu,
  MusicStyle,
  NameOfBand,
  Price,
  PriceInfo,
  ProfileContaine,
  SectionTitle,
} from "./styles";

import { useNavigate } from "react-router-dom";
import { musicProfile } from "../../../services/musicData";

import { HeaderEducational } from "../../../components/HeaderEducational";

export function MainPage() {
  const navigate = useNavigate();

  return (
    <Container>
      <HeaderEducational />
      <MainMenu>
        <Introduction>
          <div>
            Clique no perfil do artista (ou grupo) e veja os detalhes, como as
            principais caracteristicas e serviços que ele pode te fornecer.
            {"\n"}
            <strong>
              Participe do site! Faça seu cadastro e aumente sua rede de
              network!
            </strong>
          </div>
        </Introduction>
        <SectionTitle>Artistas da sua Região!</SectionTitle>

        <ContainerProfile>
          {musicProfile.map((profile, index) => {
            return (
              <GridContainer
                key={profile.id}
                onClick={() =>
                  navigate("/CallMusic/ProfilePage", {
                    state: profile,
                  })
                }
              >
                <ProfileContaine
                  style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6)), url(${profile.image})`,
                  }}
                >
                  <BandInfo>
                    <NameOfBand>{profile.nameOfTheGroup}</NameOfBand>
                    <MusicStyle>
                      {profile.typeOfMusicianData.length > 1 ? (
                        <div>
                          {profile.typeOfMusicianData[0]},{" "}
                          {profile.typeOfMusicianData[1]}
                        </div>
                      ) : (
                        <div>{profile.typeOfMusicianData[0]}</div>
                      )}
                    </MusicStyle>
                  </BandInfo>
                  <PriceInfo>
                    <Price>
                      Valor{"\n"}
                      <strong>
                        R$:{" "}
                        {Number(profile.priceByHour).toLocaleString("pt-BR", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </strong>
                    </Price>
                  </PriceInfo>
                </ProfileContaine>
              </GridContainer>
            );
          })}
        </ContainerProfile>
      </MainMenu>
      <FooterEducational />
    </Container>
  );
}
