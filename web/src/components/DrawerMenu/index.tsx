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

export function DrawerMenu() {
  return (
    <Container>
      <TitleDrawer>
        <ImageLogo src={market} alt="logo" />
        <CloseButton>X</CloseButton>
        <h1>MarketPlace</h1>
      </TitleDrawer>
      <TitleSelection>Início</TitleSelection>

      <OptionsContainer>
        <h2 style={{ marginLeft: 10 }}>Categorias</h2>

        {typeOfProduct.map((product, index) => {
          return (
            <Categories key={product.id}>
              <h3 style={{ marginLeft: 25, color: "gray" }}>
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
