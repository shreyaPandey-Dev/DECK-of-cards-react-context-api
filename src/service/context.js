import React from 'react';

// this is the equivalent to the createStore method of Redux
export const deckContext = React.createContext({deck:[],setdeckVal : {},  hand:[],sethandVal : {}, draw: {}, getData:{}});
export const DeckProvider = deckContext.Provider;


