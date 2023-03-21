import { configureStore } from "@reduxjs/toolkit";

import todosManagerReducer from "pages/Todos/reducers";

export const store = configureStore({
  reducer: {
    todosManager: todosManagerReducer,
  },
});
