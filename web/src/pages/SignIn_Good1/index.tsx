import {
  ButtonView,
  Container,
  EmailView,
  InputView,
  PasswordView,
  CheckBox,
  SavingPassword,
} from "./styles";
import logoImg from "../../assets/logosemescrito.png";
import personSVG from "../../assets/svg/icon_person.svg";
import passwordSVG from "../../assets/svg/icon_password.svg";

import { MiniModal } from "../../components/MiniModal";
import { useState } from "react";

export function SignIn_Good1() {
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
        </ButtonView>
      </InputView>
    </Container>
  );
}
