import {
  ButtonView,
  Container,
  EmailView,
  InputView,
  PasswordView,
  CheckBox,
  SavingPassword,
  Button,
  SignUpIcons,
} from "./styles";
import logoImg from "../../assets/logosemescrito.png";
import personSVG from "../../assets/svg/icon_person.svg";
import passwordSVG from "../../assets/svg/icon_password.svg";

import facebookSVG from "../../assets/svg/facebook.svg";
import githubSVG from "../../assets/svg/github.svg";
import googleSVG from "../../assets/svg/google.svg";
import microsoftSVG from "../../assets/svg/microsoft.svg";

import { MiniModal } from "../../components/MiniModal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function SignIn_Good1() {
  const navigate = useNavigate();

  return (
    <Container>
      <img src={logoImg} alt="logo" />

      <InputView>
        <EmailView>
          <img src={personSVG} alt="person" />
          <input type="email" placeholder="@email.com" />
        </EmailView>
        <PasswordView>
          <img src={passwordSVG} alt="password" />
          <input type="password" placeholder="senha" />
        </PasswordView>
        <SavingPassword>
          <CheckBox>
            <input type="checkbox" /> Lembrar-me
          </CheckBox>
          <div>Esqueceu a senha?</div>
        </SavingPassword>
        <ButtonView>
          <MiniModal
            goodLooking={true}
            address="/Home"
            title={"Acessar"}
            message={"Melhorou? \n Vamos continuar..."}
          />
          <Button onClick={() => navigate("/SignUp")} differentColor>
            Criar usuário
          </Button>
        </ButtonView>
        {/* COLOCAR ICONES DE SIGNUP - FACEBOOK GITHUB GOOGLE MICROSOFT */}
        <SignUpIcons>
          <img src={facebookSVG} alt="facebook" />
          <img src={githubSVG} alt="github" />
          <img src={googleSVG} alt="google" />
          <img src={microsoftSVG} alt="microsoft" />
        </SignUpIcons>
      </InputView>
    </Container>
  );
}
