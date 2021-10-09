import { ADD_COUNT,DEC_COUNT, ADD_TODO } from "./actionType.js";

export const reducerFn = (state, { type, payload }) => {
    switch (type) {
      case ADD_COUNT:
        return {
          ...state,
          counter: state.counter + payload,
        };
  
      case DEC_COUNT:
        return {
          ...state,
          counter: state.counter - payload,
        };
  
        case ADD_TODO:
            return{
                ...state,
                todos:[...state.todos,{payload}]
            }
        default:
            return {...state};
    }
  };