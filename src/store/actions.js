import {
    COUNTER_DECREMENT,
    COUNTER_DIVIDE,
    COUNTER_INCREMENT,
    COUNTER_MULTIPLY,
    COUNTER_RESET,
  } from "./action.types";
  
  export const subtract = (value) => ({ type: COUNTER_DECREMENT, payload: value });
  export const add = (value) => ({
    type: COUNTER_INCREMENT,
    payload: value,
  });
  export const multiply = (value) => ({ type: COUNTER_MULTIPLY, payload: value });
  export const divide = (value) => ({ type: COUNTER_DIVIDE, payload: value });
  export const reset = () => ({ type: COUNTER_RESET });