//action creator;
import {
  ADD_COUNT,
  DEC_COUNT,
  MULTI_COUNT,
  DEV_COUNT,
  ADD_TODO,
  ADD_TODO_ERROR,
  ADD_TODO_SUCCESS,
  ADD_TODO_LODING,
} from "./actionType.js";

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

export const addTodo = (data) => {
  return { type: ADD_TODO, payload: data };
};



export const addTodoLoading = () => {
  return {
    type: ADD_TODO_LODING,
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
