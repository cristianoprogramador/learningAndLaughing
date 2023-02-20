import { ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string | number;
  differentColor?: boolean;
}

export function Button({ text, differentColor, ...props }: ButtonProps) {
  return (
    <ButtonContainer {...props} differentColor={differentColor}>
      {text}
    </ButtonContainer>
  );
}
