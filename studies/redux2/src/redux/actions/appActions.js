import {
  SET_LODING_TRUE,
  SET_LOADING_FALSE,
  SET_TOKEN,
  SET_ERROR,
  CLEAR_ERROR,
  SET_LANGUAGES,
} from "../types/appTypes";

export const setLoadingFalse = () => ({ type: SET_LODING_TRUE });
export const setLoadingTrue = () => ({ type: SET_LOADING_FALSE });
export const setToken = () => ({ type: SET_TOKEN });
export const setError = () => ({ type: SET_ERROR });
export const clearError = () => ({ type: CLEAR_ERROR });
export const setLanguages = () => ({ type: SET_LANGUAGES });
