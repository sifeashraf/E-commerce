import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./globalstate/store/Store";

const root = ReactDOM.createRoot(document.getElementById("root"));

let MainRoot = createBrowserRouter([{ path: "/", element: <App />, children: [] }]);
root.render(
  <Provider store={store}>
    <RouterProvider router={MainRoot}>
      <App />
    </RouterProvider>
  </Provider>
);
