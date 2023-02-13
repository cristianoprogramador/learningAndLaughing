import { Container, IconView, InputBar } from "./styles";
import { FaSearch } from "react-icons/fa";

export function SearchBar() {
  return (
    <Container>
      <IconView>
        <FaSearch size={26} />
      </IconView>
      <InputBar placeholder="Pesquisar por qualquer coisa..." />
    </Container>
  );
}
