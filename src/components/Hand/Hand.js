import React, { useState, useEffect, useContext } from "react";
import CardList from "../Card-list/Card-list";
import { deckContext } from "../../service/context";

function Hand() {
  const context = useContext(deckContext);
  const sortCard = () => {
    let hands = context.hands;
    hands.sort(function (a, b) {
      if (a.value < b.value) {
        return -1;
      }
      if (a.value > b.value) {
        return 1;
      }
      return 0;
    });
    context.sethandVal(hands);
  };

  return (
    <div class="row text-center">
      <div class="col-lg-12">
        <h1>Hand</h1>
        <button type="button" class="btn btn-info mb-4" onClick={sortCard}>
          Sort
        </button>
      </div>
      <div class="col-lg-12">
        <CardList type="hand"></CardList>
      </div>
    </div>
  );
}

export default Hand;
