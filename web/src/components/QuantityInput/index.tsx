import { IconWrapper, QuantityInputContainer } from "./styles";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

interface QuantityInputProps {
  size?: "medium" | "small";
  quantity: number;
}

export function QuantityInput({
  quantity,
  size = "small",
}: QuantityInputProps) {
  return (
    <QuantityInputContainer size={size}>
      <IconWrapper disabled={quantity <= 1}>
        <AiOutlineMinus size={16} />
      </IconWrapper>
      <input type="number" readOnly value={quantity} />
      <IconWrapper>
        <AiOutlinePlus size={16} />
      </IconWrapper>
    </QuantityInputContainer>
  );
}
