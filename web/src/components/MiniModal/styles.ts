import styled from "styled-components";
import { ButtonHTMLAttributes } from "react";

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

export const ButtonInside = styled.button`
  width: 100%;
  height: 3rem;
  border-radius: 0.5rem;
  background: #125570;
  border: 2px solid;
  margin-top: 10px;
  border-color: #0b3140;
  color: #fff;
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
