import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./globalstate/store/Store";
import Detailspage from "./Components/Main/DetailsPage";

const root = ReactDOM.createRoot(document.getElementById("root"));

let MainRoot = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "productdetails/:id", element: <Detailspage /> },
]);
root.render(
  <Provider store={store}>
    <RouterProvider router={MainRoot}>
      <App />
    </RouterProvider>
  </Provider>
);
