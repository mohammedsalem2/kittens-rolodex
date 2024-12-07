import React from "react";
import "./style.css";
import { Card } from "../card/card";
export const CardList = ({ kittens }) => {
  return (
    <div className="card-list">
      {kittens.map((kitten) => (
        <Card key={kitten.id} kittens={kitten} />
      ))}
    </div>
  );
};
