import styled from "styled-components";

interface ButtonProps {
  differentColor?: boolean;
}

export const ButtonContainer = styled.button<ButtonProps>`
  padding: 0.75rem 2.8rem;
  color: white;
  font-weight: 700;
  background: ${({ differentColor, theme }) =>
    differentColor === true ? theme["blue-700"] : theme["green-700"]};
  font-size: medium;
  border: none;
  border-radius: 6px;
  text-transform: uppercase;
  transition: 0.4s;
  line-height: 1.3rem;
  margin-top: 0.7rem;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${({ differentColor, theme }) =>
      differentColor === true ? theme["blue-500"] : theme["green-500"]};
  }
`;
