// src/components/CountryCard.js

import React from "react";

const CountryCard = ({ name, flag }) => {
  return (
    <div className="country-card">
      <img src={flag} alt={`Flag of ${name}`} className="flag-img" />
      <h3>{name}</h3>
    </div>
  );
};

export default CountryCard;
