//action creator;
import {
  ADD_COUNT,
  DEC_COUNT,
  MULTI_COUNT,
  DEV_COUNT,
  //ADD_TODO,

  ADD_TODO_ERROR,
  ADD_TODO_SUCCESS,
  ADD_TODO_LOADING,

  GET_TODO_ERROR,
  GET_TODO_SUCCESS,
  GET_TODO_LOADING,
} from "./actionType.js";
import { axios } from "axios";


export const addCount = (data) => {
  return { type: ADD_COUNT, payload: data };
};
export const decCount = (data) => {
  return { type: DEC_COUNT, payload: data };
};
export const multiCount = (data) => {
  return { type: MULTI_COUNT, payload: data };
};
export const devCount = (data) => {
  return { type: DEV_COUNT, payload: data };
};

// export const addTodo = (data) => {
//   return { 
//     type: ADD_TODO, 
//     payload: data,
  
//   };
// };

// post action for todo

export const addTodoLoading = () => {
  return {
    type: ADD_TODO_LOADING,
  };
};

export const addTodoSuccess = (data) => {
  return {
    type: ADD_TODO_SUCCESS,
    payload: data,
  };
};

export const addTodoError = (error) => {
  return {
    type: ADD_TODO_ERROR,
    payload: error,
  };
};


// get action for todo

export const getTodoLoading = () => {
  return {
    type: GET_TODO_LOADING,
  };
};

export const getTodoSuccess = (data) => {
  return {
    type: GET_TODO_SUCCESS,
    payload: data,
  };
};

export const getTodoError = (error) => {
  return {
    type: GET_TODO_ERROR,
    payload: error,
  };
};

/*This is the new way of writing the actions because in the main component we have to call the same
thing again and again these three action loading, error, success. 

const getTodos =()=> async (dispatch)=>{

  dispatch(getTodoLoading());
  try{
   const ret = await axios.get("http://localhost:3001/todos")
   dispatch(addTodoSuccess(ret.data))
  }catch(e){
    dispatch(getTodoError(e.message))
  }
}

*/