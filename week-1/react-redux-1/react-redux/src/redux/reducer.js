import { ADD_COUNT,DEC_COUNT, ADD_TODO_LODING, ADD_TODO_SUCCESS, ADD_TODO_ERROR, MULTI_COUNT,DEV_COUNT} from "./actionType.js";

const initialState = {
  counter: 0,
  todos: {
    isLoading:false,
    isError :false,
    data :[]
  }
};

export const reducerFn = (state=initialState, { type, payload }) => {
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
          return{
            ...state,
            counter:state.counter * payload,
          };
  
          case DEV_COUNT:
          return{
            ...state,
            counter:state.counter / payload,
          };
        // case ADD_TODO:
        //     return{
        //         ...state,
        //         todos:[...state.todos,{payload}]
        //     }

            case ADD_TODO_LODING:
              return{
                ...state,
                todos:{
                  ...state.todos,
                  isLoading:true,

                }
              };

              case ADD_TODO_SUCCESS:
                return{
                  ...state,
                  todos:{
                    ...state.todos,
                    isLoading:false,
                    data:[...state.todos.data]
  
                  }

                }

                case ADD_TODO_ERROR:
                  return{
                    ...state,
                    todos:{
                      ...state.todos,
                      isLoading:false,
                      isError:true,
    
                    }
                  }
        default:
            return {...state};
    }
  };