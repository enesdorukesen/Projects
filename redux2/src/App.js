import React from "react";
import AppRouter from "./router";
import store from "./redux/store";
import { Provider as StoreProvider } from "react-redux";

// export const initialstate = {
//   newsList: [],
//   selectedNews: {},
// };

// export const rootReducer = (state = initialstate, { type, payload }) => {
//   switch (type) {
//     case "SET_USER_LIST":
//       return { ...state, userList: payload };
//     case "SET_SELECTED_USER":
//       return { ...state, selectedUser: payload };
//     case "SET_NEWS_LIST":
//       return { ...state, newsList: payload };
//     case "SET_SELECTED_NEWS":
//       return { ...state, selectedNews: payload };
//     default:
//       return state;
//   }
// };

const App = () => {
  return (
    <StoreProvider store={store}>
      <AppRouter />
    </StoreProvider>
  );
};
export default App;
