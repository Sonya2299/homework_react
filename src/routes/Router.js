import { Route, Routes } from "react-router-dom";

import CounterContainer from "../pages/Counter/containers/CounterContainer";
import ConditionalRenderingContainer from "../pages/ConditionalRendering/Containers/ConditionalRenderingContainer";
import FunctionalCounterContainer from "../pages/FunctionalCounter/containers/FunctionalCounterContainer";

import ReduxTodoListManager from "pages/ReduxTodoList/containers/ReduxTodoListManager";

import { ROUTE_NAMES } from "./routeNames";
import CountersManagerContainer from "pages/CountersManager/containers/CountersManagerContainer";
import TaskListView from "../pages/Lists/containers/ListsContainer";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.HOME} element={<h1>Home page</h1>} />
      <Route path={ROUTE_NAMES.COUNTER} element={<CounterContainer />} />
      <Route
        path={ROUTE_NAMES.FUNCTIONAL_COUNTER}
        element={<FunctionalCounterContainer />}
      />

      <Route
        path={ROUTE_NAMES.CONDITIONAL_RENDERING}
        element={<ConditionalRenderingContainer />}
      />
      <Route path={ROUTE_NAMES.LIST} element={<TaskListView />} />
      <Route
        path={ROUTE_NAMES.COUNTERS_MANAGER}
        element={<CountersManagerContainer />}
      />
      <Route path={ROUTE_NAMES.TODO_LIST} element={<ReduxTodoListManager />} />
    </Routes>
  );
};

export default Router;
