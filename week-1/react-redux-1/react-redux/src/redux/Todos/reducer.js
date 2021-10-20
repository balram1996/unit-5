import {
  ADD_COUNT,
  DEC_COUNT,
  ADD_TODO_LOADING,
  ADD_TODO_SUCCESS,
  ADD_TODO_ERROR,
  MULTI_COUNT,
  DEV_COUNT,
  ADD_TODO,
  GET_TODO_LOADING,
  GET_TODO_ERROR,
  GET_TODO_SUCCESS,
} from "./actionType.js";

const initialState = {
  todos: {
    isLoading: false,
    isError: false,
    data: [],
  },
};

export const TodoreducerFn = (state = initialState, { type, payload }) => {
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

    case MULTI_COUNT:
      return {
        ...state,
        counter: state.counter * payload,
      };

    case DEV_COUNT:
      return {
        ...state,
        counter: state.counter / payload,
      };
    // case ADD_TODO:
    //     return{
    //         ...state,
    //         todos:[...state.todos,{payload}]
    //     }

    //actions for todo

    case ADD_TODO_LOADING:
      return {
        ...state,
        todos: {
          isLoading: true,
          ...state.todos, 
        },
      };

    case ADD_TODO_SUCCESS:
      return {
        ...state,
        todos: {
          isLoading: false,
          ...state.todos,
        },
      };

    case ADD_TODO_ERROR:
      return {
        ...state,
        todos: {
          ...state.todos,
          isLoading: false,
          isError: true,
        },
      };

    case GET_TODO_LOADING:
      return {
        ...state,
        todos: {
          ...state.todos,
          isLoading: true,
        },
      };

    case GET_TODO_SUCCESS:
      return {
        ...state,
        todos: {
          ...state.todos,
          isLoading: false,
          data:[...payload]
        },
      };

      case GET_TODO_ERROR:
        return {
          ...state,
        todos: {
          ...state.todos,
          isLoading: false,
          isError:true
        },
        }
    default:
      return { ...state };
  }
};
