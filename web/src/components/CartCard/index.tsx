import { BsTrash } from "react-icons/bs";
import { CartItem } from "../../contexts/Context";
import { useCart } from "../../hooks/useCart";
import { QuantityInput } from "../QuantityInput";
import {
  InfoAndImage,
  ListProducts,
  ProductImage,
  ProductInfo,
  QuantityView,
  RemoveView,
} from "./styles";

interface CartCardProps {
  product: CartItem;
}
export function CartCard({ product }: CartCardProps) {
  const { changeCartItemQuantity, removeCartItem } = useCart();

  function handleIncrease() {
    changeCartItemQuantity(product.id, "increase");
  }
  function handleDecrease() {
    changeCartItemQuantity(product.id, "decrease");
  }
  function handleRemove() {
    removeCartItem(product.id);
  }

  return (
    <ListProducts key={product.id}>
      <InfoAndImage>
        <ProductImage src={product.image} alt="" />
        <ProductInfo>
          <h4>{product.name}</h4>
          <h3>
            R${"\n"}
            {Number(product.price).toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </h3>
        </ProductInfo>
      </InfoAndImage>
      <QuantityView>
        <QuantityInput
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
          quantity={product.quantity}
        />
        <RemoveView onClick={handleRemove}>
          <BsTrash size={25} />
          <p>Excluir</p>
        </RemoveView>
      </QuantityView>
    </ListProducts>
  );
}
