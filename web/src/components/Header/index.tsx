import {
  ButtonProfile,
  Center,
  Container,
  IconView,
  ImageLogo,
  LeftSide,
  LogoView,
  ProfilePicture,
  RightSide,
} from "./styles";
import { FiMenu } from "react-icons/fi";
import { FaBell } from "react-icons/fa";
import logoImg from "../../assets/logozuado.png";
import { SearchBar } from "../SearchBar";

export function Header() {
  return (
    <Container>
      <LeftSide>
        <IconView>
          <FiMenu size={30} />
        </IconView>
        <LogoView>
          <ImageLogo src={logoImg} alt="logo" />
          <div>
            <h4>Learning </h4>
            <h4>& Laughing</h4>
          </div>
        </LogoView>
      </LeftSide>

      <Center>
        <SearchBar />
      </Center>

      <RightSide>
        <ButtonProfile>
          <FaBell size={28} />
        </ButtonProfile>
        <ButtonProfile>
          <ProfilePicture
            src="https://avatars.githubusercontent.com/u/102186472?v=4"
            alt=""
          />
        </ButtonProfile>
      </RightSide>
    </Container>
  );
}
