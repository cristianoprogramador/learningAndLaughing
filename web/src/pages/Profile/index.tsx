import { HeaderMarket } from "../../components/HeaderMarket";
import {
  ButtonSelection,
  Camera,
  CameraIMG,
  Container,
  ImageContainer,
  InformationContainer,
  InputContainer,
  ProfileContainer,
  ProfilePicture,
  TitleInput,
} from "./styles";
import SuperMarketImage from "../../assets/images/supermarket.jpg";
import StudyingImage from "../../assets/images/studying.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import cameraSVG from "../../assets/svg/camera.svg";
import { Input } from "../../components/InputFormik";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";

export function Profile() {
  const [optionSelected, setOptionSelected] = useState("0");
  const navigate = useNavigate();

  const [profileData, setProfileData] = useState({
    name: "Cristiano Pereira da Silva",
    apelido: "Mestre dos Magos",
    dataNascimento: "1992-04-29",
    email: "cristiano@email.com",
    password: "12345678",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProfileData({
      ...profileData,
      [event.target.name]: event.target.value,
    });
  };

  console.log(profileData);

  return (
    <Container>
      <HeaderMarket open />
      <ProfileContainer>
        <InformationContainer>
          <ImageContainer>
            <ProfilePicture
              src="https://avatars.githubusercontent.com/u/102186472?v=4"
              alt=""
            />
          </ImageContainer>
          <InputContainer>
            <TitleInput>Nome Completo</TitleInput>
            <input
              value={profileData.name}
              onChange={handleInputChange}
              name="name"
            />
            <TitleInput>Como gostaria de ser chamado?</TitleInput>
            <input
              value={profileData.apelido}
              onChange={handleInputChange}
              name="apelido"
            />
            <TitleInput>Data Nascimento</TitleInput>
            <input
              value={profileData.dataNascimento}
              onChange={handleInputChange}
              name="dataNascimento"
              type="date"
            />
            <TitleInput>E-mail</TitleInput>
            <input value={profileData.email} type="email" disabled />
            <ButtonSelection>
              <Button text="Redefinir Senha" differentColor />
              <Button text="Salvar" />
            </ButtonSelection>
          </InputContainer>
        </InformationContainer>
      </ProfileContainer>
      <Footer />
    </Container>
  );
}
