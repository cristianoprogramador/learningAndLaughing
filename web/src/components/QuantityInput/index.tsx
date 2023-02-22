import { IconWrapper, QuantityInputContainer } from "./styles";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

interface QuantityInputProps {
  size?: "medium" | "small";
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export function QuantityInput({
  onIncrease,
  onDecrease,
  quantity,
  size = "small",
}: QuantityInputProps) {
  return (
    <QuantityInputContainer size={size}>
      <IconWrapper disabled={quantity <= 1} onClick={onDecrease}>
        <AiOutlineMinus size={16} />
      </IconWrapper>
      <input type="number" readOnly value={quantity} />
      <IconWrapper onClick={onIncrease}>
        <AiOutlinePlus size={16} />
      </IconWrapper>
    </QuantityInputContainer>
  );
}
