import React from "react";
import { Navbar, NewsCard } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex-grow-1 grid grid-cols-1 items-center md:grid-cols-2 xl:grid-cols-3 py-10 justify-items-center mx-auto gap-y-7 sm:gap-x-3 lg:gap-x-7">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </>
  );
}

export default App;
