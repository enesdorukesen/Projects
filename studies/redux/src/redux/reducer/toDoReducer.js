import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  CLEAR_TODO_LIST,
} from "../types/toDoTypes";

const initialState = {
  counter: 0,
  list: [{ id: 0, task: "Add toDo", completed: true }],
};

const toDoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        counter: state.counter + 1,
        list: [
          ...state.list,
          { id: state.counter + 1, task: action.payload, completed: false },
        ],
      };
    case DELETE_TODO:
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.payload),
      };
    case TOGGLE_TODO:
      return {
        ...state,
        list: state.list.map((item) =>
          item.id === action.payload
            ? { ...item, completed: !item.completed }
            : item
        ),
      };
    case CLEAR_TODO_LIST:
      return initialState;
    default:
      return state;
  }
};

export default toDoReducer;
