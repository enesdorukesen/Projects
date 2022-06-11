import {
  SET_LODING_TRUE,
  SET_LOADING_FALSE,
  SET_TOKEN,
  SET_ERROR,
  CLEAR_ERROR,
  SET_LANGUAGES,
} from "../types/appTypes";

const initialstate = {
  loading: false,
  token: "",
  error: [],
  language: "en",
};
export const appReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case SET_LODING_TRUE:
      return { ...state, loading: true };
    case SET_LOADING_FALSE:
      return { ...state, loading: false };
    case SET_TOKEN:
      return { ...state, token: payload };
    case SET_ERROR:
      return { ...state, error: payload };
    case CLEAR_ERROR:
      return { ...state, error: [] };
    case SET_LANGUAGES:
      return { ...state, language: payload };
    default:
      return state;
  }
};

export default appReducer;
