import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS } from "./actionType";

const initialState = {
  loading: false,
  error: false,
  token: "",
};
export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_LOADING:
      return {
        ...state,
        loading: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: payload,
      };

    case LOGIN_ERROR:
      return {
          ...state,
        error: true,
        loading: false,
      };

    default:
      return {
        ...state,
      };
  }
};
