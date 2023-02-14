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
import { useState } from "react";
import { SuperMarket } from "../Supermarket";

export function Home() {
  const [optionSelected, setOptionSelected] = useState("0");

  function handleSelection(selection: string) {
    setOptionSelected(selection);
  }

  return (
    <Container>
      <Header />
      <TitleSelection>
        {optionSelected === "0" ? (
          <SelectionContainer>
            <h1>Selecione o tipo de Conteúdo:</h1>
            <ImageContainer>
              <OptionContainer onClick={() => handleSelection("super")}>
                <img src={SuperMarketImage} alt="logo" />
                <h3>Supermercado</h3>
              </OptionContainer>
              <OptionContainer>
                <img src={StudyingImage} alt="logo" />
                <h3>Videos de Cursos</h3>
              </OptionContainer>
            </ImageContainer>
          </SelectionContainer>
        ) : (
          <SuperMarket />
        )}
      </TitleSelection>
    </Container>
  );
}
