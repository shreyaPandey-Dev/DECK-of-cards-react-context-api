import React,{useState,useEffect, useContext} from 'react';
import { deckContext } from "../../service/context";


function Save() {
  const context = useContext(deckContext);
const saveToLocal = () => {
  let deck = context.deck ;
  let hand = context.hand;
  let data = JSON.stringify({
    deck, hand
  })
  localStorage.setItem("data",data);
}
const reset = () => {
  localStorage.clear();
 context.getData();
}
  return (
    <div class="container-fluid text-center">
      <h3>
        Controls
      </h3>
      <h6>
          Save game
      </h6>
      <div class="d-flex justify-content-between">
          <button type="button" class="btn btn-warning" onClick={saveToLocal}>
              Save
          </button>
          <button type="button" class="btn btn-danger" onClick={reset}>
              Reset
          </button>
      </div>
    </div>
  );
}

export default Save;
