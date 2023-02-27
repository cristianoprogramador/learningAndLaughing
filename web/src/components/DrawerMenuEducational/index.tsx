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
import code from "../../assets/svg/code.svg";
import { typeOfProduct } from "../../services/typeOfProductData.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  topics,
  typeOfActivities,
  typeOfTopics,
} from "../../services/articlesCoding";

export function DrawerMenuEducational(props: any) {
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
        <ImageLogo src={code} alt="logo" />
        <CloseButton onClick={() => props.closeDrawer(false)}>X</CloseButton>
        <h1 style={{ marginTop: 10, textAlign: "center" }}>
          Programação & Educação
        </h1>
      </TitleDrawer>
      <TitleSelection onClick={() => navigate("/Educational")}>
        Início
      </TitleSelection>

      <OptionsContainer>
        <TitleSelectionCategories onClick={handleCategories}>
          Linguagens
        </TitleSelectionCategories>

        {topics.map((product, index) => {
          if (showCategories) {
            return (
              <Categories
                key={product.id}
                onClick={() =>
                  navigate("/Educational/MainTopics", { state: product })
                }
              >
                <h3
                  style={{ marginLeft: 25, color: "gray", cursor: "pointer" }}
                >
                  {product.name.toUpperCase()}
                </h3>
              </Categories>
            );
          }
        })}
      </OptionsContainer>
      <OptionsContainer>
        <TitleSelectionCategories onClick={handleArea}>
          Áreas
        </TitleSelectionCategories>

        {typeOfTopics.map((product, index) => {
          if (showAreas) {
            return (
              <Categories key={product.id}>
                <h3
                  style={{ marginLeft: 25, color: "gray", cursor: "pointer" }}
                >
                  {product.name}
                </h3>
              </Categories>
            );
          }
        })}
      </OptionsContainer>
      <OptionsContainer>
        <TitleSelectionCategories onClick={handleContent}>
          Contéudo
        </TitleSelectionCategories>

        {typeOfActivities.map((product, index) => {
          if (showContent) {
            return (
              <Categories key={product.id}>
                <h3
                  style={{ marginLeft: 25, color: "gray", cursor: "pointer" }}
                >
                  {product.name}
                </h3>
              </Categories>
            );
          }
        })}
      </OptionsContainer>

      <TitleSelection onClick={() => navigate("/Home")}>Sair</TitleSelection>
    </Container>
  );
}
