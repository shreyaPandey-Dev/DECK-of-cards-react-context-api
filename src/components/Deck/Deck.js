import React,{useState,useEffect, useContext} from 'react';
import { deckContext } from "../../service/context";
import CardList from "../Card-list/Card-list";

function Deck() {
    const context = useContext(deckContext);
    const shuffleCard = () => {
      let cards = context.deck;
      cards.sort(function (a, b) {return Math.random() - 0.5;});
      context.setdeckVal(cards);
    };

  return (
    <div class="row text-center">
      <div class="col-lg-12">
        <h1>Deck</h1>
        <button type="button" class="btn btn-info mb-4" onClick={shuffleCard}>
          Shuffle
        </button>
      </div>
      <div class="col-lg-12">
        <CardList  type="deck"></CardList>
      </div>
    </div>
  );
}

export default Deck;
