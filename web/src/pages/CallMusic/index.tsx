import { Header } from "../../components/Header";
import {
  Container,
  ImageContainer,
  OptionContainer,
  SelectionContainer,
  TitleSelection,
} from "./styles";

import musicien from "../../assets/images/musicien.jpg";
import company from "../../assets/images/company.jpg";

import { useNavigate } from "react-router-dom";

export function CallMusic() {
  const navigate = useNavigate();

  return (
    <Container>
      {/* <Header open /> */}
      <TitleSelection>
        <SelectionContainer>
          <h1>Selecione o Perfil:</h1>
          <ImageContainer>
            <OptionContainer onClick={() => navigate("/CallMusic/SignUpMusic")}>
              <img src={musicien} alt="logo" />
              <h3>Músico</h3>
            </OptionContainer>
            <OptionContainer onClick={() => navigate("/CallMusic/MainPage")}>
              <img src={company} alt="logo" />
              <h3>Contratante ou Empresário</h3>
            </OptionContainer>
          </ImageContainer>
        </SelectionContainer>
      </TitleSelection>
    </Container>
  );
}
