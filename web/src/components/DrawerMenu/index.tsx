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
import market from "../../assets/images/market.png";
import { typeOfProduct } from "../../services/typeOfProductData.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function DrawerMenu(props: any) {
  const navigate = useNavigate();
  const [showCategories, setShowCategories] = useState(false);

  function handleCategories() {
    setShowCategories((prevState) => !prevState);
  }

  return (
    <Container>
      <TitleDrawer>
        <ImageLogo src={market} alt="logo" />
        <CloseButton onClick={() => props.closeDrawer(false)}>X</CloseButton>
        <h1 style={{ marginTop: 10 }}>SuperMarket</h1>
      </TitleDrawer>
      <TitleSelection onClick={() => navigate("/SuperMarket")}>
        Início
      </TitleSelection>

      <OptionsContainer>
        <TitleSelectionCategories onClick={handleCategories}>
          Categorias
        </TitleSelectionCategories>

        {typeOfProduct.map((product, index) => {
          if (showCategories) {
            return (
              <Categories
                key={product.id}
                onClick={() =>
                  navigate("/SuperMarket/ProductsFiltered", {
                    state: product.type,
                  })
                }
              >
                <h3
                  style={{ marginLeft: 25, color: "gray", cursor: "pointer" }}
                >
                  {product.type.toLowerCase()}
                </h3>
              </Categories>
            );
          }
        })}
      </OptionsContainer>
      <TitleSelection onClick={() => navigate("/SuperMarket/ProductsFiltered")}>
        Ver Todos
      </TitleSelection>
      <TitleSelection
        onClick={() =>
          navigate("/SuperMarket/ProductsFiltered", {
            state: "dailyoffer",
          })
        }
      >
        Ofertas do Dia
      </TitleSelection>
      <TitleSelection
        onClick={() =>
          navigate("/SuperMarket/ProductsFiltered", {
            state: "bestsellers",
          })
        }
      >
        Produtos mais Vendidos
      </TitleSelection>
      <TitleSelection onClick={() => navigate("/Home")}>Sair</TitleSelection>
    </Container>
  );
}
