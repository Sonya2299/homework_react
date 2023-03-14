import { createAction } from "redux-actions";

export const addTodo = createAction("ADD_TODO");
export const deleteTodo = createAction("DELETE_TODO");
export const removeTodo = createAction("REMOVE_TODO");
