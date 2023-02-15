import {
  Container,
  IconContainer,
  IconView,
  ImageLogo,
  LogoView,
} from "./styles";
import logoImg from "../../assets/logozuado.png";
import { AiOutlineInstagram, AiOutlineFacebook } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa";

export function Footer() {
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
        <h5>A melhor loja online de mentira, onde você terá inúmeros</h5>
        <h5> produtos fantásticos com preços fictícios</h5>
      </div>
      <h4>
        Todos os direitos reservados. Os preços anunciados neste site ou via
        e-mail promocional podem ser alterados sem aviso prévio.
      </h4>

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
