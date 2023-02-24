import {
  ConfirmationView,
  Container,
  DeliveryContainer,
  DeliveryIMG,
  InformationContainer,
  InfoView,
  Title,
  WhereContainer,
} from "./styles";

import { useLocation, useNavigate } from "react-router-dom";
import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import delivery from "../../../assets/images/deliverguy.png";
import { useState, useEffect } from "react";
import { AddressFormProps } from "../Cart";
import { BsPin } from "react-icons/bs";
import { GiPayMoney } from "react-icons/gi";
import { AiOutlineClockCircle } from "react-icons/ai";

export function Delivery() {
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    if (!state) {
      navigate("/SuperMarket");
    }
  }, []);

  if (!state) return <></>;

  const [data, setData] = useState<AddressFormProps>(state);
  const [timeDeliver, setTimeDeliver] = useState("");
  const [paymento, setPaymento] = useState("");

  console.log("QUE ISSO", data);

  const timeInfoDeliver = () => {
    if (data.deliverSystem === "sedex") {
      setTimeDeliver("1 a 2 dias úteis");
    } else if (data.deliverSystem === "sedexHoje") {
      setTimeDeliver("Hoje até o final do dia!");
    } else {
      setTimeDeliver("5 a 10 dias úteis");
    }
  };

  const paymentoMethod = () => {
    if (data.paymentMethod === "credit") {
      setPaymento("Cartão de Crédito");
    } else if (data.paymentMethod === "debit") {
      setPaymento("Cartão de Débito");
    } else {
      setPaymento("Boleto");
    }
  };

  useEffect(() => {
    timeInfoDeliver();
    paymentoMethod();
  }, []);

  return (
    <Container>
      <Header />
      <ConfirmationView>
        <DeliveryContainer>
          <DeliveryIMG src={delivery} alt="logo" />
          <InformationContainer>
            <Title>Pedido Confirmado!</Title>
            <WhereContainer>
              <BsPin size={25} />
              <InfoView>
                <p>
                  Entrega em:{" "}
                  <strong>
                    {data.street}, {data.addressNumber}
                  </strong>
                </p>
                <p>
                  <strong>
                    {data.district} - {data.city}
                  </strong>
                </p>
              </InfoView>
            </WhereContainer>
            <WhereContainer>
              <AiOutlineClockCircle size={25} />
              <InfoView>
                <p>Previsão de entrega:</p>
                <p>
                  <strong>{timeDeliver}</strong>
                </p>
              </InfoView>
            </WhereContainer>
            <WhereContainer>
              <GiPayMoney size={25} />
              <InfoView>
                <p>Tipo de Pagamento:</p>
                <p>
                  <strong>{paymento}</strong>
                </p>
              </InfoView>
            </WhereContainer>
          </InformationContainer>
        </DeliveryContainer>
      </ConfirmationView>
      <Footer />
    </Container>
  );
}
