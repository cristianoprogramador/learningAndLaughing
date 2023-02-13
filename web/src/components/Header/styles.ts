import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 3rem;
`;

export const IconView = styled.div`
  display: flex;
  height: 3em;
  width: 3em;
  border-radius: 30px;
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
`;

export const LogoView = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ImageLogo = styled.img`
  height: 4em;
`;

export const Center = styled.div``;

export const ProfilePicture = styled.img`
  height: 3em;
  border-radius: 1.5em;
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const ButtonProfile = styled.div`
  cursor: pointer;
`;
