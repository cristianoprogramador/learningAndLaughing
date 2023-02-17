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

export const ButtonView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;
