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

import { products } from "../../../services/productsData.js";

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

const cartProducts = products.filter((product) => product.special === "cart");

interface CartCardProps {
  product: CartItem;
}

export function Cart({ product }: CartCardProps) {
  const { cartItems, cartItemsTotal, cartQuantity } = useCart();
  console.log(cartItems);

  const formattedItemsTotal = Number(cartItemsTotal).toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  console.log(formattedItemsTotal);

  const navigate = useNavigate();
  const initialValues = {
    zipCode: "",
    street: "",
    addressNumber: "",
    district: "",
    city: "",
    stateCode: "",
    paymentMethod: "",
  };
  const [quantity, setQuantity] = useState(1);

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
  });

  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <Container>
      <Header />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
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
                    <label htmlFor="money">Dinheiro</label>
                  </InputOption>
                </InputRadio>
                <div style={{ color: "red", marginTop: 5 }}>
                  <ErrorMessage name="paymentMethod" />
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
                <p>R$: 0</p>
              </TotalText>
              <TotalText>
                <h2>Total</h2>
                <h2>R$: {formattedItemsTotal}</h2>
              </TotalText>

              <Button type="submit" text="Finalizar Compra" />
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
