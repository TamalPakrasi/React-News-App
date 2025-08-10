import React from "react";
import App from "../App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";

import News from "../pages/News.jsx";
import Home from "../pages/Home.jsx";
import { fetchArticles } from "../utils/fetchArticles.js";

export const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route
        path="/news/:catagory"
        loader={({ params }) => fetchArticles(params.catagory)}
        element={<News />}
      />
    </Route>
  )
);
