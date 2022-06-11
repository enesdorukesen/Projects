/* eslint-disable default-case */
export const initialState2 = {
  name: "",
  lastname: "",
  age: "",
  email: "",
};

export const reducer2 = (state, action) => {
  switch (action.type) {
    case "NAME":
      return {
        ...state,
        name: action.payload,
      };
    case "LASTNAME":
      return {
        ...state,
        lastname: action.payload,
      };
    case "AGE":
      return {
        ...state,
        age: action.payload,
      };
    case "COLOR":
      return {
        ...state,
        email: action.payload,
      };
  }
};
