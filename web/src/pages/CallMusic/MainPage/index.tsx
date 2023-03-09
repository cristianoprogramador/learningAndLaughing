import {
  BandInfo,
  Container,
  ContainerProfile,
  DateEvent,
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
  SearchButton,
  SectionTitle,
  TextFilter,
} from "./styles";

import { useNavigate } from "react-router-dom";
import { musicProfile } from "../../../services/musicData";

import { useEffect, useState } from "react";
import { MdPersonSearch } from "react-icons/md";
import headerIMAGE from "../../../assets/images/headerimage.jpg";
import { FooterCallMusic } from "../../../components/FooterCallMusic";
import { HeaderCallMusic } from "../../../components/HeaderCallMusic";
import SearchBarCity from "../../../components/SearchBarCity";

export function MainPage() {
  const navigate = useNavigate();
  const [citySelected, setCitySelected] = useState("");
  const [filter, setFilter] = useState(musicProfile);

  function handleClick(e) {
    e.target.setAttribute("type", "date");
  }

  const cities = [
    { value: "Ribeirão Preto", label: "Ribeirão Preto" },
    { value: "São Paulo", label: "São Paulo" },
    { value: "Campinas", label: "Campinas" },
  ];

  const today = new Date();
  const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
  const minDate = tomorrow.toISOString().split("T")[0];

  const handleCitySelected = (city: string) => {
    setCitySelected(city);
  };

  function showArtists(state: string) {
    if (state !== "") {
      console.log(state);
      let FilteredItems;
      FilteredItems = musicProfile.filter((item) =>
        item.mainCity.includes(state)
      );
      setFilter(FilteredItems);
      // setCitySelected("");
    } else {
      setFilter(musicProfile);
    }
  }

  useEffect(() => {
    showArtists(citySelected);
  }, []);

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
          {/* <input placeholder="Em qual cidade será?" /> */}
          <SearchBarCity
            placeholder="Em qual cidade será?"
            data={cities}
            onCitySelected={handleCitySelected}
          />
          <DateEvent
            placeholder="Data do evento"
            type="text"
            onClick={handleClick}
            min={minDate}
          />
          <SearchButton onClick={() => showArtists(citySelected)}>
            <MdPersonSearch size={30} />
            Pesquisar
          </SearchButton>
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
          {filter.map((profile, index) => {
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
      <FooterCallMusic />
    </Container>
  );
}
