import {
  ConfirmationView,
  Container,
  DeliveryContainer,
  DeliveryIMG,
  InformationContainer,
} from "./styles";

import { useLocation, useNavigate } from "react-router-dom";
import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import delivery from "../../../assets/images/deliverguy.png";
import { useState } from "react";
import { AddressFormProps } from "../Cart";

export function Delivery() {
  const navigate = useNavigate();
  const { state } = useLocation();

  console.log(state);

  const [data, setData] = useState<AddressFormProps>(state);

  console.log("QUE ISSO", data);

  return (
    <Container>
      <Header />
      <ConfirmationView>
        <DeliveryContainer>
          <DeliveryIMG src={delivery} alt="logo" />
          <InformationContainer>
            <p>{data.city}</p>
            <p>{data.district}</p>
            <p>{data.stateCode}</p>
            <p>
              {data.street}, {data.addressNumber}
            </p>
            <p>{data.zipCode}</p>
          </InformationContainer>
        </DeliveryContainer>
      </ConfirmationView>
      <Footer />
    </Container>
  );
}
