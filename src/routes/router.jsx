import React from "react";
import App from "../App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";

import Cards from "../pages/Cards.jsx";
import { fetchArticles } from "../utils/fetchArticles.js";

export const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route
        path="/news/:catagory"
        loader={({ params }) => fetchArticles(params.catagory)}
        element={<Cards />}
      />
    </Route>
  )
);
