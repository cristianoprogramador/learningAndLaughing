import styled from "styled-components";
import { Field, Form } from "formik";
import { NumericFormat } from "react-number-format";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
`;

export const MainMenu = styled.div``;

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

export const TitleMinor = styled.p`
  display: flex;
  justify-content: center;
  font-size: large;
  font-weight: 500;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const InputView = styled.div``;

export const PriceByHour = styled.div``;

export const NumericFormatInput = styled(NumericFormat)`
  padding: 8px;
  border-radius: 5px;
  border: 1px solid;
  outline: none;
  font-size: 18px;
`;

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

export const SelectionAndImage = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImageSoloBand = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50px;
  margin-top: 1rem;
`;

export const StyledCheckbox = styled(Field)`
  width: 20px;
  height: 20px;
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
    cursor: pointer;
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

export const DescriptionEvent = styled(Field)`
  width: 97%;
  height: 150px;
  padding: 10px;
  font-size: medium;
  border-radius: 3px;
  border: 0;
`;

export const ModalContainer = styled.div`
  align-self: center;
`;

export const ButtonModal = styled.button`
  display: flex;
  flex-direction: row;
  background-color: ${(props) => props.theme["blue-700"]};
  border-radius: 10px;
  padding: 1rem;
  gap: 1rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
  cursor: pointer;
  transition: 0.3s;
  color: lightgray;
  border: 0;

  :hover {
    background-color: ${(props) => props.theme["blue-300"]};
  }
`;

export const Panel = styled.main`
  display: flex;
  flex-direction: row;
  color: black;
  gap: 2rem;
`;

export const InsertPlayListContainer = styled.div`
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerMusic = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ContainerMusicInsert = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-bottom: 8px;
  gap: 5px;
`;

export const ContainerMusicClose = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const OptionModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  label {
    color: black;
  }
`;

export const AddNameBandSong = styled(Field)`
  border: 1px gray solid;
  border-radius: 5px;
  text-align: left;
  padding: 10px;
`;

export const ButtonAdd = styled.button`
  padding: 8px;
  border: 0;
  border-radius: 4px;
  background-color: darkgreen;
  color: white;
`;

export const ButtonRemove = styled.button`
  padding: 8px;
  border: 0;
  border-radius: 4px;
  background-color: darkred;
  color: white;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;
