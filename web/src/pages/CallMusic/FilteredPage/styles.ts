import styled from "styled-components";
import Select from "react-select";
import { Link } from "react-router-dom";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
`;

export const MainMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-top: 1rem;
  margin-bottom: 4rem;
  min-height: 650px;
`;

export const FilterSelection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 350px;
`;

export const TextFilter = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 2rem;
  color: white;
  font-size: 45px;
  font-family: Georgia, "Times New Roman", Times, serif, "Arial Narrow", Arial,
    sans-serif;
  text-shadow: black 3px 3px 2px;
`;

export const InputsSearch = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: center;
  align-items: center;
  margin-bottom: -19px;
  gap: 2rem;
`;

export const DateEvent = styled.input`
  background-color: white;
  height: 30px;
  width: 200px;
  font-size: 18px;
  padding: 15px;
  font-family: Roboto;
  border: 0;
`;

export const SearchButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme["blue-500"]};
  height: 55px;
  width: 120px;
  font-size: 18px;
  border-radius: 10px;
  cursor: pointer;
`;

export const Introduction = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  text-align: center;
  margin-top: 1rem;
  border: 2px solid gray;
  padding: 1rem;
  border-radius: 0.5rem;
  font-size: medium;
  gap: 1rem;
  width: 900px;
`;

export const SectionTitle = styled.div`
  margin-top: 2rem;
  justify-content: center;
  align-items: center;
  align-self: center;
  font-size: x-large;
  font-weight: bold;
`;

export const GridContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-top: 1rem;

  border-radius: 1rem;
`;

export const ContainerProfile = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 3rem;
`;

export const ProfileContainer = styled.div`
  width: 340px;
  height: 340px;
  border-radius: 30px;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  background-position: center;
  background-size: cover;
  cursor: pointer;
`;

export const BandInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  margin-bottom: 1rem;
  margin-left: 1rem;
  gap: 0.5rem;
  background-color: transparent;
`;

export const NameOfBand = styled.div`
  color: white;
  font-size: 26px;
  text-shadow: black 1px 1px 2px;
`;

export const MusicStyle = styled.div`
  font-size: medium;
  color: white;
  text-shadow: black 1px 1px 2px;
`;

export const PriceInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  margin-bottom: 1rem;
  margin-left: 0.7rem;
  margin-right: 0.4rem;
`;

export const Price = styled.pre`
  font-size: x-large;
  text-align: center;
  font-family: "Roboto", sans-serif;
  text-shadow: black 1px 1px 2px;
`;
