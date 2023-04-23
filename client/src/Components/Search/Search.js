import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

const Search = () => {
  console.log(process.env);
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_API_URL}/search?text=${searchTerm}&sort=new`);
    setResults(response.data);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch();
  };

  const clearSearchResults = () => {
    setResults([]);
    setSearchTerm("");
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="search-content">
      <div className="search">
        <h1>Undertone Reddit search</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" name="searchTerm" placeholder="Search Undertone" value={searchTerm} onChange={handleChange} />
          <button type="submit">Undertone Search</button>
          <button type="button" className="clear" onClick={clearSearchResults}>
            Clear
          </button>
        </form>
      </div>
      <main>
        <div className="card-container">
          {results.map((result) => (
            <div className="card" key={result.id}>
              <div className="card-image">
                <img src={![null, undefined, "", "default", "image"].includes(result.thumbnail) ? result.thumbnail : "https://via.placeholder.com/150"} alt={result.title} />
              </div>
              <div className="card-content">
                <div className="card-title">
                  <a href={result.url} target="_blank" rel="noreferrer">
                    {result.title}
                  </a>
                </div>
                <div className="card-author">by {result.author}</div>
                {result.selfText && <div className="card-description">{result.selfText}</div>}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Search;
