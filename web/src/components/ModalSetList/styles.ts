import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  background-color: ${(props) => props.theme["blue-700"]};
  border-radius: 10px;
  padding: 1rem;
  gap: 1rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
  cursor: pointer;
  transition: 0.3s;
  color: lightgray;
  border: 0;

  :hover {
    background-color: ${(props) => props.theme["blue-300"]};
  }
`;

export const AddButton = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${(props) => props.theme["blue-700"]};
  border-radius: 10px;
  padding: 1rem;
  gap: 1rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: 0.3s;

  :hover {
    background-color: ${(props) => props.theme["blue-300"]};
  }
`;

export const Panel = styled.main`
  display: flex;
  flex-direction: row;
  color: black;
  gap: 2rem;
`;

export const MessageContainer = styled.main`
  display: flex;
  flex-direction: column;
  color: black;
`;

export const MusicGrid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: left;
  font-size: small;
  gap: 3rem;
  margin-bottom: 6px;
  border-bottom: 1px solid black;
`;

export const ButtonInside = styled.button`
  display: flex;
  flex-direction: row;
  height: 60px;
  background-color: ${(props) => props.theme["blue-700"]};
  border-radius: 10px;
  padding: 1rem;
  gap: 1rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: 0.3s;
  color: white;

  :hover {
    background-color: ${(props) => props.theme["blue-300"]};
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
`;
