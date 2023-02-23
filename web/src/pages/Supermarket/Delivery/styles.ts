import styled from "styled-components";
import { Form, Formik } from "formik";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
`;

export const ConfirmationView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  min-height: 45.55rem;
  margin-bottom: 3rem;
`;

export const DeliveryContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  border: 2px solid white;
  width: 60%;
`;

export const InformationContainer = styled.div``;

export const DeliveryIMG = styled.img`
  height: 500px;
`;
