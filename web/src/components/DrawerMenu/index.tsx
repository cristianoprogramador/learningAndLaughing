import {
  Categories,
  CloseButton,
  Container,
  ImageLogo,
  OptionsContainer,
  TitleDrawer,
  TitleSelection,
} from "./styles";
import market from "../../assets/images/market.png";
import { typeOfProduct } from "../../services/typeOfProductData.js";
import { useNavigate } from "react-router-dom";

export function DrawerMenu(props: any) {
  const navigate = useNavigate();

  return (
    <Container>
      <TitleDrawer>
        <ImageLogo src={market} alt="logo" />
        <CloseButton onClick={() => props.closeDrawer(false)}>X</CloseButton>
        <h1 style={{ marginTop: 10 }}>MarketPlace</h1>
      </TitleDrawer>
      <TitleSelection onClick={() => navigate("/Home")}>Início</TitleSelection>

      <OptionsContainer>
        <TitleSelection>Categorias</TitleSelection>

        {typeOfProduct.map((product, index) => {
          return (
            <Categories key={product.id}>
              <h3 style={{ marginLeft: 25, color: "gray", cursor: "pointer" }}>
                {product.type.toLowerCase()}
              </h3>
            </Categories>
          );
        })}
      </OptionsContainer>
      <TitleSelection>Ver Todos</TitleSelection>
      <TitleSelection>Ofertas do Dia</TitleSelection>
      <TitleSelection>Produtos mais Vendidos</TitleSelection>
    </Container>
  );
}
