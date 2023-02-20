import { ButtonView, Container } from "./styles";
import logoImg from "../../assets/logosemescrito.png";
import { MiniModal } from "../../components/MiniModal";
import { useState } from "react";

export function SignIn2() {
  return (
    <Container>
      <img src={logoImg} alt="logo" />
      <h2>
        Abaixo temos o PIOR LOGIN <strong>EVER</strong>
      </h2>

      <h3>Preencha as informações abaixo:</h3>

      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Password" />

      <ButtonView>
        <MiniModal
          goodLooking={false}
          address="/SignIn1"
          title={"ME APERTA"}
          message={`Gostou da interface? não né? \n calma, vamos melhorar um pouco...`}
        />
      </ButtonView>
    </Container>
  );
}
