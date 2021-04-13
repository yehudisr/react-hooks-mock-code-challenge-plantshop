import React, {useState} from "react";

function Search({search, onSearch}) {


  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={search}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
