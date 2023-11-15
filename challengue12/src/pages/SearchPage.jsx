import React, { useState } from "react";

export const SearchPage = ({ items, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleSearch} />
      <ul>
        {items
          .filter((item) => item.includes(searchTerm))
          .map((item, index) => (
            <li key={index}>{item}</li>
          ))}
      </ul>
    </div>
  );
};
