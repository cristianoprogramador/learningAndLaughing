import { useState } from "react";
import { AiOutlineBell, AiOutlineSetting } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import logoImg from "../../assets/logo.png";
import { SearchBarEducational } from "../SearchBarEducational";
import {
  ButtonProfile,
  ButtonSettings,
  Center,
  Container,
  IconView,
  ImageLogo,
  LeftSide,
  Location,
  LogoView,
  OptionsView,
  ProfileOptions,
  ProfilePicture,
  RightSide,
  SettingsOptions,
} from "./styles";

// import component 👇
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";
import { useNavigate } from "react-router-dom";
import { SearchBarCallMusic } from "../SearchBarCallMusic";
import { BsPin } from "react-icons/bs";
import { DrawerMenuCallMusic } from "../DrawerMenuCallMusic";

interface HeaderProps {
  open?: boolean;
}

export function HeaderCallMusic({ open }: HeaderProps) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  // console.log(open);

  const [settingsMenu, setSettingsMenu] = useState(false);
  const [profileMenu, setProfileMenu] = useState(false);

  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noreferrer");
  };

  function handleMiniMenu(value: string) {
    if (value === "openProfile") {
      setSettingsMenu(false);
      setProfileMenu((prev) => !prev);
    }
    if (value === "openSettings") {
      setProfileMenu(false);
      setSettingsMenu((prev) => !prev);
    }
  }

  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <Container>
      <LeftSide>
        {!open && (
          <>
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
              <DrawerMenuCallMusic
                closeDrawer={(data: boolean) => setIsOpen(data)}
              />
            </Drawer>
          </>
        )}
        <LogoView onClick={() => navigate("/Home")}>
          <ImageLogo src={logoImg} alt="logo" />
          <div>
            <h4>Learning </h4>
            <h4>& Laughing</h4>
          </div>
        </LogoView>
      </LeftSide>

      <Center>
        <SearchBarCallMusic />
      </Center>

      <RightSide>
        <Location>
          <BsPin size={18} />
          Ribeirão Preto - SP
        </Location>
        <ButtonProfile>
          <AiOutlineBell size={28} />
        </ButtonProfile>
        <ButtonSettings>
          <AiOutlineSetting
            size={28}
            onClick={() => handleMiniMenu("openSettings")}
          />
          {settingsMenu && (
            <SettingsOptions>
              <OptionsView>
                <p>Configurações e Privacidade</p>
              </OptionsView>
              <OptionsView>
                <p>Alterar Tema de Fundo</p>
              </OptionsView>
              <OptionsView>
                <p>Central de Ajuda</p>
              </OptionsView>
              <OptionsView
                onClick={() =>
                  openInNewTab(
                    "https://github.com/cristianoprogramador/learningAndLaughing"
                  )
                }
              >
                <p>Código do Site</p>
              </OptionsView>
            </SettingsOptions>
          )}
        </ButtonSettings>
        <ButtonProfile>
          <ProfilePicture
            src="https://avatars.githubusercontent.com/u/102186472?v=4"
            alt=""
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              opacity: isHover ? 1 : 0.8,
            }}
            onClick={() => handleMiniMenu("openProfile")}
          />
          {profileMenu && (
            <ProfileOptions>
              <OptionsView>
                <p onClick={() => navigate("/CallMusic/SignUpMusic")}>
                  Perfil de Músico
                </p>
              </OptionsView>
              <OptionsView>
                <p onClick={() => navigate("/HistoryActions")}>
                  Ações realizadas
                </p>
              </OptionsView>
              <OptionsView>
                <p onClick={() => navigate("/SignIn1")}>Sair</p>
              </OptionsView>
            </ProfileOptions>
          )}
        </ButtonProfile>
      </RightSide>
    </Container>
  );
}
