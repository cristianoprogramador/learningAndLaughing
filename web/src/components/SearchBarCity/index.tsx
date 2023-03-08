import React, { useState } from "react";
import "./styles.css";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";

interface SearchBarProps {
  onSelections: (wordEntered: string) => void;
}

function SearchBarCity({ placeholder, data }, props: SearchBarProps) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [citySelected, setCitySelected] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.label.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  const handleSelections = (value) => {
    setCitySelected(value.value);
    console.log(value);
    setWordEntered(value.value);
    setFilteredData([]);
    props.onSelections(value.value);
  };

  console.log(wordEntered);

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <AiOutlineSearch />
          ) : (
            <AiOutlineClose id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a
                className="dataItem"
                key={key}
                onClick={() => handleSelections(value)}
                onChange={(event) => setSearchTerm(event.target.value)}
              >
                <p>{value.value}</p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBarCity;
