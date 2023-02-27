import { Container, IconView, InputBar } from "./styles";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function SearchBarEducational() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearchTermChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (searchTerm === "") {
      return null;
    } else if (event.key === "Enter") {
      navigate("/SuperMarket/ProductsSearched", {
        state: searchTerm,
      });
    }
  };
  const handleSearchByClick = () => {
    if (searchTerm === "") {
      navigate("/SuperMarket/ProductsFiltered");
    } else {
      navigate("/SuperMarket/ProductsSearched", {
        state: searchTerm,
      });
    }
  };

  return (
    <Container>
      <IconView>
        <FaSearch
          style={{ cursor: "pointer" }}
          size={26}
          // onClick={handleSearchByClick}
        />
      </IconView>
      <InputBar
        placeholder="Pesquisar por qualquer coisa..."
        // value={searchTerm}
        // onChange={handleSearchTermChange}
        // onKeyDown={handleSearch}
      />
    </Container>
  );
}
