import { useState, useEffect } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import {
  ContainerInfo,
  ImageContainer,
  IndexDetails,
  InfoContainer,
  Price,
  Title,
  TitleIndex,
} from "./styles";

interface CartItem {
  image: string;
  name: string;
  brand: string;
  totalprice: string;
  quantity: string;
}

export function ActionsCard({ details }: any) {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen((prevState) => !prevState);
  }

  return (
    <>
      <IndexDetails onClick={handleOpen}>
        <TitleIndex>Detalhes</TitleIndex>
        {open === true ? (
          <MdKeyboardArrowUp size={25} />
        ) : (
          <MdKeyboardArrowDown size={25} />
        )}
      </IndexDetails>
      {open &&
        details.map((action: CartItem, index: any) => {
          return (
            <ContainerInfo>
              <ImageContainer>
                <Title>Produto</Title>
                <img src={action.image} alt="" />
              </ImageContainer>
              <InfoContainer>
                <Title>Informações Principais</Title>
                <div>Nome: {action.name}</div>
                <div>Marca: {action.brand}</div>
                <div>Quantidade: {action.quantity}</div>
              </InfoContainer>
              <InfoContainer>
                <Title>Preço do Produto</Title>
                <Price>
                  R$ {"\n"}
                  {Number(action.totalprice).toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </Price>
              </InfoContainer>
            </ContainerInfo>
          );
        })}
    </>
  );
}
