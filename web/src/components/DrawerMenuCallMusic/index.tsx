import {
  Categories,
  CloseButton,
  Container,
  ImageLogo,
  OptionsContainer,
  TitleDrawer,
  TitleSelection,
  TitleSelectionCategories,
} from "./styles";
import music from "../../assets/svg/music.svg";
import { typeOfProduct } from "../../services/typeOfProductData.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  topics,
  typeOfActivities,
  typeOfTopics,
} from "../../services/articlesCoding";

export function DrawerMenuCallMusic(props: any) {
  const navigate = useNavigate();
  const [showCategories, setShowCategories] = useState(false);
  const [showAreas, setShowAreas] = useState(false);
  const [showContent, setShowContent] = useState(false);

  function handleCategories() {
    setShowCategories((prevState) => !prevState);
    setShowAreas(false);
    setShowContent(false);
  }
  function handleArea() {
    setShowAreas((prevState) => !prevState);
    setShowCategories(false);
    setShowContent(false);
  }
  function handleContent() {
    setShowContent((prevState) => !prevState);
    setShowCategories(false);
    setShowAreas(false);
  }

  return (
    <Container>
      <TitleDrawer>
        <ImageLogo src={music} alt="logo" />
        <CloseButton onClick={() => props.closeDrawer(false)}>X</CloseButton>
        <h1 style={{ marginTop: 10, textAlign: "center" }}>CallMusic</h1>
      </TitleDrawer>
      <TitleSelection onClick={() => navigate("/CallMusic/MainPage")}>
        Início
      </TitleSelection>
      <TitleSelection onClick={() => navigate("/CallMusic/SignUpMusic")}>
        Crie seu Perfil
      </TitleSelection>

      <TitleSelection onClick={() => navigate("/Home")}>Sair</TitleSelection>
    </Container>
  );
}
