import { handleActions } from "redux-actions";
import { v4 as uuid } from "uuid";

import * as actions from "../actions";

const initialState = {
  todoLists: [],
};

const todoListsManagerReducer = handleActions(
  {
    [actions.addTodo]: (state) => {
      const newTodo = {
        id: uuid(),
        inputData: "",
      };
      const stateCopy = structuredClone(state);

      stateCopy.todoLists.push(newTodo);

      return stateCopy;
    },
  },
  initialState
);

export default todoListsManagerReducer;
