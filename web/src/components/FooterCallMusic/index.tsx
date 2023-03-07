import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import logoImg from "../../assets/logo.png";
import {
  Container,
  IconContainer,
  IconView,
  ImageLogo,
  LogoView,
} from "./styles";

export function FooterCallMusic() {
  return (
    <Container>
      <LogoView>
        <ImageLogo src={logoImg} alt="logo" />
        <div>
          <h4>Learning </h4>
          <h4>& Laughing</h4>
        </div>
      </LogoView>
      <div>
        <h5>Encontre o músico/artista perfeito para seu evento,</h5>
        <h5> temos os melhores do mercado, entre logo em contato!.</h5>
      </div>
      <div>
        <h4>Todos os direitos reservados.</h4>
        <h4>
          Esse site é apenas uma amostra de portfólio, iremos lançar a
          plataforma oficial em breve!
        </h4>
      </div>

      <IconContainer>
        <IconView>
          <AiOutlineInstagram size={30} />
        </IconView>
        <IconView>
          <AiOutlineFacebook size={30} />
        </IconView>
        <IconView>
          <FiTwitter size={30} />
        </IconView>
        <IconView>
          <FaTiktok size={30} />
        </IconView>
      </IconContainer>
    </Container>
  );
}
