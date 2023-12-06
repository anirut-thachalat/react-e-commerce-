import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ViewCart from "./components/ViewCart.tsx";
import Checkout from "./components/Checkout.tsx";

const rout = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/view/:numberID",
    element: <ViewCart />,
  },
  {
    path: "/checkout/:ID",
    element: <Checkout />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={rout} />
  </React.StrictMode>
);
