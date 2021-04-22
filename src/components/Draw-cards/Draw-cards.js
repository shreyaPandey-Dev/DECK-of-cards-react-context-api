import React, { useState, useEffect, useContext } from "react";
import CardList from "../Card-list/Card-list";
import { deckContext } from "../../service/context";


function DrawCard() {
  const context = useContext(deckContext);

  let textInput = React.createRef();
  const handleClick = () => {
    let deck = context.deck ;
    let hand = context.hand;
    let remove = textInput.current.value;
   let removedCard = [];
    for(let i=0; i<remove; i++){
      hand.push(deck[i]); 
    }
   deck.splice(0,remove);
   context.draw(Object.assign({},{deck: deck, hand: hand }));
  };
  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4">
          <h1>Draw Cards</h1>
          <div class="form-group">
            <label for="exampleInputPassword1">Draw Cards</label>
            <input
              type="number"
              class="form-control"
              placeholder="DrawCards"
              ref={textInput}
            />
          </div>
          <button
            type="button"
            class="btn btn-danger align-middle"
            onClick={handleClick}
          >
            Draw
          </button>
          {/* deck se remove and hand me add */}
        </div>
        <div class="col-md-4"></div>
      </div>
    </div>
  );
}

export default DrawCard;
