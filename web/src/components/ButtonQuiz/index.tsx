import { ButtonHTMLAttributes, useEffect, useState } from "react";
import { ButtonContainer } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string | number;
  differentColor?: boolean;
}

export function ButtonQuiz({ text, differentColor, ...props }: ButtonProps) {
  const [isPressed, setIsPressed] = useState<boolean>(false);

  function handleClick() {
    setIsPressed((prev) => !prev);
  }

  return (
    <ButtonContainer {...props} differentColor={isPressed}>
      {text}
    </ButtonContainer>
  );
}
