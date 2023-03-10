import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;
  background-image: linear-gradient(
    to right top,
    #000000,
    #060606,
    #0c0b0c,
    #101011,
    #141415,
    #141415,
    #141415,
    #141415,
    #101011,
    #0c0b0c,
    #060606,
    #000000
  );
`;

export const InputView = styled.div`
  background-color: ${(props) => props.theme["gray-700"]};
  padding: 1.5rem 4rem 1.5rem 4rem;
  border-radius: 1rem;
  justify-content: space-evenly;

  input {
    font-size: 1rem;
    color: ${(props) => props.theme["gray-500"]};
    text-align: left;
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
    background-color: lightgray;
    height: 100%;
  }

  img {
    height: 40px;
    width: 40px;
  }
`;

export const EmailView = styled.div`
  display: flex;
  flex-direction: row;
  background-color: lightgray;
  margin: 1rem 0;
  border-radius: 0.5rem;
  padding: 0.5rem 2rem 0.5rem 0.5rem;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`;

export const PasswordView = styled.div`
  display: flex;
  flex-direction: row;
  background-color: lightgray;
  margin: 1rem 0;
  border-radius: 0.5rem;
  padding: 0.5rem 2rem 0.5rem 0.5rem;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`;

export const ButtonView = styled.div`
  margin-top: 2rem;
`;

export const SavingPassword = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  div {
    cursor: pointer;
  }
`;

export const CheckBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  gap: 0.5rem;
`;

interface ButtonProps {
  differentColor?: boolean;
}

export const Button = styled.button<ButtonProps>`
  width: 100%;
  height: 3rem;
  border-radius: 0.5rem;
  background: ${({ differentColor }) =>
    differentColor === true ? "#0b3646" : "#186f8f"};
  border: 2px solid;
  margin-top: 10px;
  border-color: #0b3140;
  color: ${({ differentColor }) =>
    differentColor === true ? "#f9f9f9" : "#0b3646"};
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

export const SignUpIcons = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 1.5rem;

  img {
    height: 40px;
    width: 40px;
    cursor: pointer;
  }
`;
