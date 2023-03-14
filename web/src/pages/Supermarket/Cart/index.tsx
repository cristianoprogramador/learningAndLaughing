import {
  AddressContainer,
  Container,
  InfoAndImage,
  Information,
  InputContainer,
  InputOption,
  InputRadio,
  InputView,
  ListProducts,
  ProductContainer,
  ProductImage,
  ProductInfo,
  QuantityView,
  Title,
  TotalText,
} from "./styles";

import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";

import { useNavigate } from "react-router-dom";
import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { Input } from "../../../components/InputFormik";
import { Button } from "../../../components/Button";
import { QuantityInput } from "../../../components/QuantityInput";
import { useEffect, useState } from "react";
import { useCart } from "../../../hooks/useCart";
import { CartItem } from "../../../contexts/Context";
import { CartCard } from "../../../components/CartCard";
import { AddressFormProps } from "../../../types/Products";
import axios from "axios";
import { api } from "../../../utils/api";

export function Cart() {
  const [deliveryPrice, setDeliveryPrice] = useState(0);
  const { cartItems, cartItemsTotal, cartQuantity, clearCart } = useCart();

  // console.log(cartItems);

  const formattedItemsTotal = Number(cartItemsTotal).toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const formattedDelivery = Number(deliveryPrice).toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  // console.log(formattedItemsTotal);

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

  const handleSubmit = async (value) => {
    console.log("OQ RAIOS VEM", value);
    console.log("Items", cartItems);

    try {
      const response = await api.post("/orders", {
        zipCode: value.zipCode,
        street: value.street,
        addressNumber: value.addressNumber,
        district: value.district,
        city: value.city,
        stateCode: value.stateCode,
        paymentMethod: value.paymentMethod,
        deliverSystem: value.deliverSystem,
        items: cartItems.map((item) => {
          return {
            id: item.id,
            name: item.name,
            brand: item.brand,
            type: item.type,
            price: item.price,
            quantity: item.quantity,
            image: item.image,
            special: item.special,
          };
        }),
      });

      console.log("OQ TA TECENU", response.data);
    } catch (error) {
      console.error(error);
    } finally {
      clearCart();
      navigate("/SuperMarket/Delivery", {
        state: value,
      });
    }
  };

  return (
    <Container>
      <Header />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          actions.setSubmitting(false);
          console.log(values);
          handleSubmit(values);
          clearCart();
          navigate("/SuperMarket/Delivery", {
            state: values,
          });
        }}
      >
        {({ values, errors, touched, handleChange }) => (
          <Information>
            <AddressContainer>
              <Title>Endereço de Entrega:</Title>
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
                    <label htmlFor="credit">Crédito</label>
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
                    <label htmlFor="debit">Débito</label>
                  </InputOption>
                  <InputOption>
                    <input
                      type="radio"
                      id="money"
                      name="paymentMethod"
                      value="money"
                      checked={values.paymentMethod === "money"}
                      onChange={handleChange}
                    />
                    <label htmlFor="money">Boleto</label>
                  </InputOption>
                </InputRadio>
                <div style={{ color: "red", marginTop: 5 }}>
                  <ErrorMessage name="paymentMethod" />
                </div>
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
              </InputView>
            </AddressContainer>
            <ProductContainer>
              <Title>Carrinho de Compras:</Title>

              {cartItems.map((product, index) => {
                return <CartCard key={product.id} product={product} />;
              })}

              <TotalText>
                <p>Total de Itens</p>
                <p>R$: {formattedItemsTotal}</p>
              </TotalText>
              <TotalText>
                <p>Entrega</p>
                <p>R$: {formattedDelivery}</p>
              </TotalText>
              <TotalText>
                <h2>Total</h2>
                <h2>R$: {formattedItemsTotal}</h2>
              </TotalText>

              <Button
                type="submit"
                text="Finalizar Compra"
                disabled={cartQuantity <= 0}
              />
              <Button
                differentColor
                text="Continuar Comprando"
                onClick={() => navigate("/SuperMarket")}
              />
            </ProductContainer>
          </Information>
        )}
      </Formik>
      <Footer />
    </Container>
  );
}
