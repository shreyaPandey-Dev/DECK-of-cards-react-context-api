import { useState,useEffect } from 'react';
import './App.css';
import Home from './container/Home/Home';
import {DeckProvider, HandProvider} from './service/context';



function App() {
  const getCardList = () => {
    fetch("deck-of-cards.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        let localData= localStorage.getItem("data");
        if(!localData) {
          setDeck(myJson);
        } 
      });
  };

  const setDeck = (data) => {
    setinitialValuedeck(Object.assign({},initialValuedeck,{deck: data}))
  }

  const setHand = (data) => {
    setinitialValuedeck(Object.assign({},initialValuedeck,{hand: data}))
  }

  const draw = (data) => {
    setinitialValuedeck(Object.assign({},initialValuedeck,data))
  }

  const [initialValuedeck, setinitialValuedeck] = 
  useState({deck: [], setdeckVal: setDeck, hand: [], sethandVal: setHand, draw, getData: getCardList});

  
  useEffect(() => {
  }, [initialValuedeck]);


  useEffect(() => {
   let localData= localStorage.getItem("data");
   if(localData) {
     draw(JSON.parse(localData));
   }
   }, []);

   

  return (
      <DeckProvider value={initialValuedeck}>
        <div class="container">
          <Home></Home>
        </div>
      </DeckProvider>
  );
}

export default App;
// deck n hand ka alag object bnana h
// reset ka kaam
// hand 
// draw se card minus hoke jayega
// add that card to hand
