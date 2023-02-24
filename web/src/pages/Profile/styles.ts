import styled from "styled-components";

export const Container = styled.div``;

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 10rem);
`;

export const InformationContainer = styled.div`
  margin-top: 2rem;
  background-color: ${(props) => props.theme["gray-700"]};
  border-radius: 1rem;
  height: 620px;
  width: 500px;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfilePicture = styled.img`
  height: 150px;
  border-radius: 75px;
  margin-top: -4rem;
  cursor: pointer;
`;

export const CameraIMG = styled.div`
  position: absolute;
  display: block;
  left: calc(53%);
  background-color: gray;
  border-radius: 12px;
  height: 25px;
  width: 25px;
`;

export const Camera = styled.img`
  height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

export const InputContainer = styled.form`
  margin: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid;
    outline: none;
    font-size: 17px;
    width: 90%;
    margin-bottom: 2rem;
  }
`;

export const TitleInput = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: flex-start;
  padding-left: 13px;
  margin-bottom: 0.5rem;
  font-size: 18px;
`;

export const ButtonSelection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
`;
