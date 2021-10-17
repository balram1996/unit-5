import { createStore, combineReducers } from "redux";
import { TodoreducerFn } from "./Todos/reducer.js";

import { authReducer } from "./Auth/reducer.js";

const rootReducer = combineReducers({
  todos: TodoreducerFn,
  auth: authReducer,
});

export const store = new createStore(rootReducer);

// store.dispatch(addCount(1));

// console.log(store.getState());

// store.dispatch(decCount(1));

// console.log(store.getState());

// store.dispatch(addTodo({id:1,status:false,title:"learn redux"}));

// console.log(store.getState());

// class Store {
//   constructor(reducerFn, initialState) {
//     this.reducer = reducerFn;
//     this.state = initialState;
//   }
//   getState() {
//     return this.state;
//   }
//   dispatch(action) {
//     this.state = this.reducer(this.state, action);
//   }
// }
