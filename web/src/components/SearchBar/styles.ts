import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${(props) => props.theme["gray-800"]};
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
`;

export const IconView = styled.div``;

export const InputBar = styled.input`
  display: flex;
  width: 35rem;
  background-color: ${(props) => props.theme["gray-800"]};
  box-shadow: 0 0 0 0;
  border: 0 none;
  outline: 0;
  margin-left: 20px;
  color: white;
  font-size: medium;

  @media (max-width: 768px) {
    width: 10rem;
  }

  @media (max-width: 1024px) {
    width: 25rem;
  }
`;
