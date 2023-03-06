import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  position: sticky;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 5;
  background: ${(props) => props.theme["gray-900"]};
`;

export const IconView = styled.div`
  display: flex;
  height: 3em;
  width: 3em;
  border-radius: 30px;
  align-items: center;
  justify-content: center;

  align-self: center;
  cursor: pointer;

  transition: 300ms;

  :hover {
    background-color: #626262;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LogoView = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

export const ImageLogo = styled.img`
  height: 4em;
  justify-content: center;
  align-items: center;
`;

export const Center = styled.div``;

export const ProfilePicture = styled.img`
  height: 3em;
  border-radius: 1.5em;
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

export const Location = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  text-decoration: underline;
  cursor: pointer;
`;

export const ButtonProfile = styled.div`
  display: flex;
  height: 3em;
  width: 3em;
  border-radius: 30px;
  align-items: center;
  justify-content: center;

  align-self: center;
  cursor: pointer;

  transition: 300ms;

  :hover {
    background-color: #626262;
  }
`;

export const ButtonSettings = styled.div`
  display: flex;
  height: 3em;
  width: 3em;
  border-radius: 30px;
  align-items: center;
  justify-content: center;

  align-self: center;
  cursor: pointer;

  transition: 300ms;

  :hover {
    background-color: #626262;
  }
`;

export const SettingsOptions = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  margin-top: 14rem;
  background-color: ${(props) => props.theme["gray-800"]};
  border-radius: 1rem;
`;
export const ProfileOptions = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  margin-top: 11.5rem;
  background-color: ${(props) => props.theme["gray-800"]};
  border-radius: 1rem;
`;

export const OptionsView = styled.div`
  display: flex;

  :hover {
    background-color: #626262;
    border-radius: 0.5rem;
  }

  p {
    padding: 10px;
    text-align: left;
  }
`;

export const ButtonExit = styled.div`
  display: flex;
  height: 3em;
  width: 3em;
  padding-left: 5px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;

  align-self: center;
  cursor: pointer;

  transition: 300ms;

  :hover {
    background-color: #626262;
  }
`;
