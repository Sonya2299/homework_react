import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import Router from "./routes/Router";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);
