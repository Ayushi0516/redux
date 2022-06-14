import {
    COUNTER_DECREMENT,
    COUNTER_DIVIDE,
    COUNTER_INCREMENT,
    COUNTER_MULTIPLY,
    COUNTER_RESET,
  } from "./action.types";
  
  export const reducer = (state, { type, payload }) => {
    switch (type) {
      case COUNTER_INCREMENT: {
        if (payload) {
          state.count += payload;
          return { ...state };
        }
      }
      case COUNTER_DECREMENT: {
        if (state.count >= 1 && payload) {
          state.count -= payload;
          return { ...state };
        }
      }
      case COUNTER_MULTIPLY: {
        if (state.count >= 1 && payload) {
          state.count *= payload;
          return { ...state };
        }
      }
      case COUNTER_DIVIDE: {
        if (state.count >= 1 && payload) {
          if (state.count / payload > 1) {
            state.count /= payload;
            return { ...state };
          } else {
            state.count = "Error";
            return { ...state };
          }
        }
      }
      case COUNTER_RESET: {
        state.count = 0;
        return { ...state };
      }
      default:
        return { ...state };
    }
  };
 