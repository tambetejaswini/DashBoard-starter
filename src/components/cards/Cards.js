import React from "react";
import { cardData } from "../../data/Data";
import Card from "../card/Card";
import "./cards.css";
function Cards() {
  return (
    <div className="cards">
      {cardData.map((card, index) => {
        return (
          <div className="parentContainer">
            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              person={card.person}
            ></Card>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
