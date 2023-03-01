import styled from "styled-components";
import { Form, Formik } from "formik";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
`;

export const Information = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  min-height: 45.55rem;
  margin-bottom: 3rem;
`;

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  width: 500px;
  background-color: ${(props) => props.theme["gray-700"]};
  border-radius: 1rem;
  padding: 1rem;
`;

export const Title = styled.p`
  display: flex;
  justify-content: center;
  font-size: x-large;
  font-weight: 500;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const InputView = styled.div``;

export const InputContainer = styled.div`
  display: grid;
  flex-direction: row;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

export const InputRadio = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  border: 1px solid ${(props) => props.theme["gray-500"]};
  border-radius: 1rem;
`;
export const InputOption = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 1rem;
  padding: 1rem;
  align-items: center;
  align-self: center;

  input {
    opacity: 0;
    position: fixed;
    width: 0;
  }

  label {
    padding: 1rem;
    border-radius: 0.5rem;
  }

  input[type="radio"]:checked + label {
    background-color: ${(props) => props.theme["green-500"]};
    color: white;

    padding: 1rem;
  }

  label:hover {
    background-color: ${(props) => props.theme["green-700"]};
    color: white;
    padding: 1rem;
  }
`;

//////////////////////

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  width: 500px;
  background-color: ${(props) => props.theme["gray-700"]};
  border-radius: 1rem;
  padding: 1rem;
`;

export const ListProducts = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const InfoAndImage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const ProductImage = styled.img`
  height: 125px;
  width: 125px;
  border-radius: 5px;
  object-fit: contain;
  cursor: pointer;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const QuantityView = styled.div`
  margin-top: 0.5rem;
  height: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > div {
    max-width: 4.5rem;
    height: 100%;
  }
`;

export const TotalText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 0.7rem;
`;
