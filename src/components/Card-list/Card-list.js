import React, { useState, useEffect, useContext } from "react";
import Card from "./Card/Card";
import { deckContext } from "../../service/context";

function CardList (props){
  const context = useContext(deckContext);
  const [data, setData] = useState([]);
  
 
  useEffect(() => {
    context.getData();
  }, []);
  useEffect(() => {
  }, [context]);

  return (
    <div className="App">
      {
      props.type === 'hand' ? context.hand &&
      context.hand.length > 0 &&
      context.hand.map((item) => 
      <Card suit={item.suit} value={item.value} >
      </Card>
      ) : context.deck &&
      context.deck.length > 0 &&
      context.deck.map((item) => 
      <Card suit={item.suit} value={item.value} >
      </Card>
      )
      
    }
    </div>
  );
}

export default CardList;
