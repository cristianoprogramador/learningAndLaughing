import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}

body {

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

  color: ${(props) => props.theme["gray-300"]};
  -webkit-font-smoothing: antialised;
}

body, input-security, textarea, button {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1rem;
}

::-webkit-scrollbar {
    width: 0.8rem;
  }
  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme["gray-900"]};
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 2rem;
    background: ${(props) => props.theme["gray-700"]};
  }
`;
