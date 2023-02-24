import { Container, IconView, InputBar } from "./styles";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearchTermChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Container>
      <IconView>
        <FaSearch
          style={{ cursor: "pointer" }}
          size={26}
          onClick={() =>
            navigate("/SuperMarket/ProductsSearched", {
              state: searchTerm,
            })
          }
        />
      </IconView>
      <InputBar
        placeholder="Pesquisar por qualquer coisa..."
        value={searchTerm}
        onChange={handleSearchTermChange}
      />
    </Container>
  );
}
