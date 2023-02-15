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
import { useState } from "react";

// import component 👇
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";
import { DrawerMenu } from "../DrawerMenu";

export function Header(props: any) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <Container>
      <LeftSide>
        <IconView onClick={toggleDrawer}>
          <FiMenu size={30} />
        </IconView>
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="left"
          style={{
            backgroundColor: "black",
          }}
        >
          <DrawerMenu closeDrawer={(data: boolean) => setIsOpen(data)} />
        </Drawer>
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
