// CitySearch.js
import React, { useState } from "react";

function CitySearch({ onCityChange }) {
  const [inputCity, setInputCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onCityChange(inputCity);
    setInputCity("");
  };

  return (
    <form className="city-search" onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputCity}
        onChange={(e) => setInputCity(e.target.value)}
        placeholder="شہر کا نام درج کریں"
      />
      <button type="submit">تلاش کریں</button>
    </form>
  );
}

export default CitySearch;
