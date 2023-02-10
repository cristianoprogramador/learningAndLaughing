import styled from "styled-components";

export const MessageContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    font-size: 1.5rem;
    color: ${(props) => props.theme["gray-500"]};
    text-align: center;
    margin-bottom: 3rem;
  }

  input {
    font-size: 1.5rem;
    color: ${(props) => props.theme["gray-500"]};
    text-align: center;
    margin-top: 1.5rem;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 3rem;
  border-radius: 0.5rem;
  background: #125570;
  border: 2px solid;
  margin-top: 10px;
  border-color: #0b3140;
  color: #111;
  font-weight: 600;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  display: flex;

  :focus {
    background: #1b7ea5;
    border: 2px solid;
    margin-top: 10px;
    border-color: #0b3140;
    color: #111;
  }
`;
