import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import {
  Container,
  ContainerAction,
  ContainerMainInfo,
  IndexDetails,
  IndexTitle,
  IndexTotal,
  InfoContainer,
  InformationContainer,
  ProfileContainer,
  Title,
  TitleIndex,
} from "./styles";

import phone0 from "../../assets/products/phone0.jpg";
import phone1 from "../../assets/products/phone1.jpg";
import phone2 from "../../assets/products/phone2.jpg";

import { MdKeyboardArrowDown } from "react-icons/md";
import { ActionsCard } from "../../components/ActionsCard";

export function HistoryActions() {
  const navigate = useNavigate();

  const data = [
    {
      id: 1,
      action: "Compra - SuperMarket",
      status: "finalizado",
      date: "22/02/2023",
      paymentMethod: "Crédito",
      deliverSystem: "sedex",
      freight: "20",
      totalproducts: "4910.0",
      totalpayed: "4930.0",
      details: [
        {
          image: phone0,
          name: "Vivo X90 Pro+",
          brand: "Vivo",
          totalprice: "1450.20",
          quantity: "1",
        },
        {
          image: phone1,
          name: "iQOO 11",
          brand: "Vivo",
          totalprice: "1150.00",
          quantity: "1",
        },
        {
          image: phone2,
          name: "Legion Y70",
          brand: "Lenovo",
          totalprice: "2330.00",
          quantity: "1",
        },
      ],
    },
    {
      id: 2,
      action: "Compra - SuperMarket",
      status: "finalizado",
      date: "22/02/2023",
      paymentMethod: "Crédito",
      deliverSystem: "sedex",
      freight: "20",
      totalproducts: "4910.0",
      totalpayed: "4930.0",
      details: [
        {
          image: phone0,
          name: "Vivo X90 Pro+",
          brand: "Vivo",
          totalprice: "1450.20",
          quantity: "1",
        },
        {
          image: phone1,
          name: "iQOO 11",
          brand: "Vivo",
          totalprice: "1150.00",
          quantity: "1",
        },
        {
          image: phone2,
          name: "Legion Y70",
          brand: "Lenovo",
          totalprice: "2330.00",
          quantity: "1",
        },
      ],
    },
  ];

  return (
    <Container>
      <Header open />
      <ProfileContainer>
        <InformationContainer>
          <Title>Ações Realizadas</Title>

          <InfoContainer>
            {data.map((action, index) => {
              return (
                <ContainerAction key={action.id}>
                  <ContainerMainInfo>
                    <IndexTitle>
                      <TitleIndex>Código da Ação</TitleIndex> <p>{action.id}</p>
                    </IndexTitle>
                    <IndexTitle>
                      <TitleIndex>Status</TitleIndex> <p>{action.status}</p>
                    </IndexTitle>
                    <IndexTitle>
                      <TitleIndex>Data</TitleIndex> <p>{action.date}</p>
                    </IndexTitle>
                    <IndexTitle>
                      <TitleIndex>Pagamento</TitleIndex>
                      <p>{action.paymentMethod}</p>
                    </IndexTitle>
                    <IndexTotal>
                      <TitleIndex>Total</TitleIndex>
                      <p>
                        Produtos: R$ {"\n"}
                        {Number(action.totalproducts).toLocaleString("pt-BR", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </p>
                      <p>
                        Frete: R$ {"\n"}
                        {Number(action.freight).toLocaleString("pt-BR", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </p>
                      <p>
                        <strong>
                          Valor Total: R$ {"\n"}
                          {Number(action.totalpayed).toLocaleString("pt-BR", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </strong>
                      </p>
                    </IndexTotal>
                  </ContainerMainInfo>

                  <ActionsCard details={action.details} />
                </ContainerAction>
              );
            })}
          </InfoContainer>
        </InformationContainer>
      </ProfileContainer>
      <Footer />
    </Container>
  );
}
