import todoListsManagerReducer from "pages/ReduxTodoList/reducers/todoReducer";
import { combineReducers } from "redux";

const rootReducer = () => {
  return combineReducers({
    todoListsManagerPage: todoListsManagerReducer,
  });
};

export default rootReducer;
