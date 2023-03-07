import styled from "styled-components";
import { Field, Form } from "formik";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
`;

export const MainMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  margin-top: 3rem;
  margin-bottom: 4rem;
  width: 1250px;
  border-radius: 1rem;
  gap: 0.8rem;
`;

export const MidiaContainer = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  background-color: ${(props) => props.theme["gray-800"]};
`;

export const ImageProfile = styled.img`
  width: 320px;
  border-radius: 10px;
  object-fit: contain;
  border: 1px solid gray;
  margin-top: 2rem;
`;

export const AddButton = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${(props) => props.theme["blue-700"]};
  border-radius: 10px;
  padding: 1rem;
  gap: 1rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: 0.3s;

  :hover {
    background-color: ${(props) => props.theme["blue-300"]};
  }
`;

export const InformationContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  background-color: ${(props) => props.theme["gray-800"]};
`;

export const Title = styled.div`
  font-size: xx-large;
  margin: 1.5rem 0 1.5rem 0;
  font-weight: 600;
  padding: 1rem;
  background-color: ${(props) => props.theme["gray-700"]};
  border-radius: 1rem;
`;

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LineContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 1rem;
  padding: 1rem;
  width: 700px;
  line-height: 28px;

  strong {
    color: darkgreen;
  }
`;

export const PlacesAndDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: justify;
  padding: 1rem;
  border: 1px solid ${(props) => props.theme["gray-900"]};
  margin: 1rem;
  border-radius: 1rem;
`;

export const TitleOption = styled.div`
  font-size: large;
  font-weight: 600;
  padding: 1rem;
  background-color: ${(props) => props.theme["gray-700"]};
  border-radius: 1rem;
  display: flex;
  align-self: center;
  margin: 0 0 1rem 0;
`;

export const PriceButton = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.theme["blue-700"]};
  border-radius: 10px;
  padding: 1.5rem;
  gap: 1rem;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  transition: 0.3s;

  font-size: xx-large;

  :hover {
    background-color: ${(props) => props.theme["blue-500"]};
  }
`;

export const PlacesToPlay = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-content: center;
  gap: 1rem;
`;

export const Places = styled.div`
  font-size: medium;
  display: flex;
  text-align: center;
  align-self: center;
  justify-content: center;
  font-weight: 600;
  padding: 10px 10px;
  background-color: ${(props) => props.theme["gray-700"]};
  border-radius: 1rem;
  display: flex;
  align-self: center;
  transition: 0.3s;

  :hover {
    background-color: ${(props) => props.theme["gray-500"]};
  }
`;

export const BandsToPlay = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  gap: 1rem;
`;

export const Bands = styled.div`
  display: flex;
  font-size: medium;
  height: 40px;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  padding: 10px 10px;
  background-color: ${(props) => props.theme["gray-700"]};
  border-radius: 1rem;
  align-self: center;
  transition: 0.3s;

  :hover {
    background-color: ${(props) => props.theme["gray-500"]};
  }
`;

export const Information = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 3rem;
  width: 90%;
`;

export const LocationContainer = styled.div`
  margin-top: 1rem;
`;

export const FormTitle = styled.div`
  text-align: left;
  width: 700px;
  line-height: 28px;
  font-size: large;
  margin: 1rem 0 0.5rem 0;

  strong {
    color: darkgreen;
  }
`;

import DatePicker from "react-datepicker";

export const SelectionDate = styled(DatePicker)`
  width: 97%;
  padding: 10px;
  font-size: medium;
  border-radius: 3px;
  border: 0;
`;

export const InputRadio = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  border: 1px solid ${(props) => props.theme["gray-500"]};
  border-radius: 1rem;
  margin-top: 1rem;
`;

export const SelectionAndImage = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImageTimeofTheDay = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
  margin-top: 1rem;
`;

export const InputOption = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
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
    margin: 0.5rem 0;
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

export const AdressField = styled(Field)`
  width: 240px;
  padding: 10px;
  font-size: medium;
  border-radius: 3px;
  border: 0;
`;

export const AmountOfPeople = styled(Field)`
  width: 97%;
  padding: 10px;
  font-size: medium;
  border-radius: 3px;
  border: 0;
`;

export const AmountOfTime = styled(Field)`
  width: 97%;
  padding: 10px;
  font-size: medium;
  border-radius: 3px;
  border: 0;
`;

export const StyledCheckbox = styled(Field)`
  width: 20px;
  height: 20px;
`;

export const DescriptionEvent = styled(Field)`
  width: 97%;
  height: 80px;
  padding: 10px;
  font-size: medium;
  border-radius: 3px;
  border: 0;
  margin-top: -1rem;
`;
