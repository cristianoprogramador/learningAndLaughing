import { Header } from "../../components/Header";
import {
  Container,
  ImageContainer,
  OptionContainer,
  SelectionContainer,
  TitleSelection,
} from "./styles";
import SuperMarketImage from "../../assets/images/supermarket.jpg";
import StudyingImage from "../../assets/images/studying.jpg";
import callmusic from "../../assets/images/callmusic.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Home() {
  const [optionSelected, setOptionSelected] = useState("0");
  const navigate = useNavigate();

  function handleSelection(selection: string) {
    setOptionSelected(selection);
  }

  return (
    <Container>
      {/* <Header open /> */}
      <TitleSelection>
        <SelectionContainer>
          <h1>Selecione o tipo de Conteúdo:</h1>
          <ImageContainer>
            <OptionContainer onClick={() => navigate("/SuperMarket")}>
              <img src={SuperMarketImage} alt="logo" />
              <h3>Supermercado</h3>
            </OptionContainer>
            <OptionContainer onClick={() => navigate("/Educational")}>
              <img src={StudyingImage} alt="logo" />
              <h3>Programação & Educação</h3>
            </OptionContainer>
            <OptionContainer onClick={() => navigate("/CallMusic/MainPage")}>
              <img src={callmusic} alt="logo" />
              <h3>CallMusic</h3>
            </OptionContainer>
          </ImageContainer>
        </SelectionContainer>
      </TitleSelection>
    </Container>
  );
}
