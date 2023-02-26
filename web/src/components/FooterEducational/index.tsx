import {
  Container,
  IconContainer,
  IconView,
  ImageLogo,
  LogoView,
} from "./styles";
import logoImg from "../../assets/logo.png";
import { AiOutlineInstagram, AiOutlineFacebook } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa";

export function FooterEducational() {
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
        <h5>A melhor escola online de programação, onde você terá inúmeros</h5>
        <h5> artigos fantásticos, quiz e videos dos melhores do mercado.</h5>
      </div>
      <div>
        <h4>Todos os direitos reservados.</h4>
        <h4>
          Todos artigos e links tem os devidos créditos aos autores, caso esteja
          errado favor entrar em contato para corrigirmos.
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
