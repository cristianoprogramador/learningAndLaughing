import React, { useState } from "react";
import "./styles.css";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";

interface SearchBarCityProps {
  placeholder: string;
  data: string[];
}

function SearchBarCity(props) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [citySelected, setCitySelected] = useState("");

  const [searchTerm, setSearchTerm] = useState("");

  const [selectedCity, setSelectedCity] = useState("");

  function handleCitySelect2(city: string) {
    console.log("SERA", city);
    setSelectedCity(city);
  }

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = props.data.filter((value) => {
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
    props.onCitySelected("");
    setCitySelected("");
  };

  const handleSelections = (value) => {
    setCitySelected(value.value);
    setWordEntered(value.value);
    setFilteredData([]);
    setSearchTerm(value.value);
    props.onCitySelected(value.value);
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={props.placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length > 0 || citySelected !== "" ? (
            <AiOutlineClose id="clearBtn" onClick={clearInput} />
          ) : (
            <AiOutlineSearch />
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
                // onChange={(event) => handleCitySelect(event.target.value)}
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
