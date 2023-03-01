import {
  AddressContainer,
  Container,
  Information,
  InputContainer,
  InputOption,
  InputRadio,
  InputView,
  Title,
} from "./styles";

import { ErrorMessage, Formik } from "formik";
import * as Yup from "yup";

import { products } from "../../../services/productsData.js";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/InputFormik";
import { useCart } from "../../../hooks/useCart";

const cartProducts = products.filter((product) => product.special === "cart");

export interface AddressFormProps {
  zipCode: string;
  street: string;
  addressNumber: string;
  district: string;
  city: string;
  stateCode: string;
  paymentMethod: string;
  deliverSystem: string;
}

export interface MusicianFormProps {
  sizeOfTheGroup: string;
  teach: boolean;
  nameOfTheGroup: string;
  placesToPlay: string;
  howFarToPlay: string;
  priceByHour: string;
  typeOfMusic: string;
}

export function SignUpMusic() {
  const [deliveryPrice, setDeliveryPrice] = useState(0);
  const { cartItems, cartItemsTotal, cartQuantity, clearCart } = useCart();

  const navigate = useNavigate();

  const initialValues: AddressFormProps = {
    zipCode: "",
    street: "",
    addressNumber: "",
    district: "",
    city: "",
    stateCode: "",
    paymentMethod: "",
    deliverSystem: "",
  };

  const initialValuesMusic: MusicianFormProps = {
    sizeOfTheGroup: "",
    teach: false,
    nameOfTheGroup: "",
    placesToPlay: "",
    howFarToPlay: "",
    priceByHour: "",
    typeOfMusic: "",
  };

  const validationSchema = Yup.object({
    zipCode: Yup.string()
      .required("CEP é obrigatório")
      .matches(/^\d{5}-\d{3}$/, "CEP inválido (00000-000)"),
    street: Yup.string().required("Rua é obrigatória"),
    addressNumber: Yup.string().required("Número é obrigatório"),
    district: Yup.string().required("Bairro é obrigatório"),
    city: Yup.string().required("Cidade é obrigatória"),
    stateCode: Yup.string()
      .required("Estado é obrigatório")
      .min(1, "Informe a UF"),
    paymentMethod: Yup.string()
      .oneOf(["credit", "debit", "money"], "Método de pagamento inválido")
      .required("Método de pagamento é obrigatório"),
    deliverSystem: Yup.string()
      .oneOf(["sedexHoje", "sedex", "pac"], "Tipo de entrega inválido")
      .required("Tipo de entrega é obrigatório"),
  });

  const validationSchemaMusic = Yup.object({
    zipCode: Yup.string()
      .required("CEP é obrigatório")
      .matches(/^\d{5}-\d{3}$/, "CEP inválido (00000-000)"),
    street: Yup.string().required("Rua é obrigatória"),
    addressNumber: Yup.string().required("Número é obrigatório"),
    district: Yup.string().required("Bairro é obrigatório"),
    city: Yup.string().required("Cidade é obrigatória"),
    stateCode: Yup.string()
      .required("Estado é obrigatório")
      .min(1, "Informe a UF"),
    paymentMethod: Yup.string()
      .oneOf(["credit", "debit", "money"], "Método de pagamento inválido")
      .required("Método de pagamento é obrigatório"),
    deliverSystem: Yup.string()
      .oneOf(["sedexHoje", "sedex", "pac"], "Tipo de entrega inválido")
      .required("Tipo de entrega é obrigatório"),
  });

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          actions.setSubmitting(false);
          // clearCart();
          // navigate("/SuperMarket/Delivery", {
          //   state: values,
          // });
        }}
      >
        {({ values, errors, touched, handleChange }) => (
          <Information>
            <AddressContainer>
              <Title>Perfil de Cadastro</Title>
              <Title>Tipo de Perfil:</Title>

              <InputRadio>
                <InputOption>
                  <input
                    type="radio"
                    id="credit"
                    name="paymentMethod"
                    value="credit"
                    checked={values.paymentMethod === "credit"}
                    onChange={handleChange}
                  />
                  <label htmlFor="credit">Individual</label>
                </InputOption>
                <InputOption>
                  <input
                    type="radio"
                    id="debit"
                    name="paymentMethod"
                    value="debit"
                    checked={values.paymentMethod === "debit"}
                    onChange={handleChange}
                  />
                  <label htmlFor="debit">Grupo Musical</label>
                </InputOption>
              </InputRadio>
              <div style={{ color: "red", marginTop: 5 }}>
                <ErrorMessage name="paymentMethod" />
              </div>
              <InputView>
                <InputContainer>
                  <Input name="zipCode" label="Código Postal" type="text" />
                  <Input name="street" label="Rua" type="text" />
                  <Input name="addressNumber" label="Número" type="text" />
                  <Input name="district" label="Bairro" type="text" />
                  <Input name="city" label="Cidade" type="text" />
                  <Input name="stateCode" label="UF" type="text" />
                </InputContainer>
                <Title>Método de Pagamento:</Title>

                <Title>Tipo de Entrega:</Title>
                <InputRadio>
                  <InputOption>
                    <input
                      type="radio"
                      id="sedexHoje"
                      name="deliverSystem"
                      value="sedexHoje"
                      checked={values.deliverSystem === "sedexHoje"}
                      onChange={handleChange}
                      onInput={() => setDeliveryPrice(35)}
                    />
                    <label htmlFor="sedexHoje">Sedex Hoje</label>
                  </InputOption>
                  <InputOption>
                    <input
                      type="radio"
                      id="sedex"
                      name="deliverSystem"
                      value="sedex"
                      checked={values.deliverSystem === "sedex"}
                      onChange={handleChange}
                      onInput={() => setDeliveryPrice(20)}
                    />
                    <label htmlFor="sedex">Sedex</label>
                  </InputOption>
                  <InputOption>
                    <input
                      type="radio"
                      id="pac"
                      name="deliverSystem"
                      value="pac"
                      checked={values.deliverSystem === "pac"}
                      onChange={handleChange}
                      onInput={() => setDeliveryPrice(10)}
                    />
                    <label htmlFor="pac">PAC</label>
                  </InputOption>
                </InputRadio>
                <div style={{ color: "red", marginTop: 5 }}>
                  <ErrorMessage name="deliverSystem" />
                </div>
                <Button
                  type="submit"
                  text="Finalizar Compra"
                  disabled={cartQuantity <= 0}
                />
              </InputView>
            </AddressContainer>
          </Information>
        )}
      </Formik>
    </Container>
  );
}
