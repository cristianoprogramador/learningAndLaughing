import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 2rem;
    color: ${(props) => props.theme["gray-100"]};
    text-align: center;
  }

  h2 {
    font-size: 1.5rem;
    color: ${(props) => props.theme["gray-100"]};
    text-align: center;

    h3 {
      color: ${(props) => props.theme["green-500"]};
    }
  }

  h3 {
    font-size: 1.5rem;
    color: ${(props) => props.theme["gray-500"]};
    text-align: center;
    margin-top: 3rem;
  }

  input {
    font-size: 1.5rem;
    color: ${(props) => props.theme["gray-500"]};
    text-align: center;
    margin-top: 1.5rem;
  }
`;

export const ButtonView = styled.div`
  margin-top: 1rem;
`;
