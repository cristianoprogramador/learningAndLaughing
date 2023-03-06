import { FooterEducational } from "../../../components/FooterEducational";
import {
  BandInfo,
  Container,
  ContainerProfile,
  FilterSelection,
  GridContainer,
  InputsSearch,
  Introduction,
  MainMenu,
  MusicStyle,
  NameOfBand,
  Price,
  PriceInfo,
  ProfileContainer,
  SectionTitle,
  TextFilter,
} from "./styles";

import { useNavigate } from "react-router-dom";
import { musicProfile } from "../../../services/musicData";

import { HeaderEducational } from "../../../components/HeaderEducational";
import { HeaderCallMusic } from "../../../components/HeaderCallMusic";
import headerIMAGE from "../../../assets/images/headerimage.jpg";

export function MainPage() {
  const navigate = useNavigate();

  return (
    <Container>
      <HeaderCallMusic />
      <FilterSelection
        style={{
          backgroundImage: `url(${headerIMAGE})`,
        }}
      >
        <TextFilter>Encontre o artista perfeito para seu evento!</TextFilter>
        <InputsSearch>
          <input name="teste" />
          <input name="teste" />
        </InputsSearch>
      </FilterSelection>

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
                <ProfileContainer
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
                </ProfileContainer>
              </GridContainer>
            );
          })}
        </ContainerProfile>
      </MainMenu>
      <FooterEducational />
    </Container>
  );
}
