import React from "react";
import "./style.css";
export const Card = ({ kittens }) => {
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${kittens.id}?set=set4&size=180x180`}
        alt="kittens cards"
      />
      <h2>{kittens.name}</h2>
      <p>{kittens.email}</p>
    </div>
  );
};
