import { configureStore } from "@reduxjs/toolkit";

import ticketReducer from './ticket/ticketSlice'

export function createStore(preloadedState = {}) {
    const store = configureStore({
      reducer: {
        ticket: ticketReducer,
      },
      preloadedState,
    });
  
    return store;
  }
  
  export const store = createStore({});