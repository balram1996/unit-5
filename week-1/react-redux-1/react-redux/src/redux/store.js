import {createStore} from "redux";
import { reducerFn } from "./reducer.js";





export const store = createStore(reducerFn);


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
