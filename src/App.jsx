import { useState, useEffect } from "react";
import { Nav, Modal } from "./components";
import { Home, News } from "./pages";

function App() {
  const [page, setPage] = useState("home");

  useEffect(() => {
    document.title = `${page.at(0).toUpperCase()}${page.slice(1)} | News App`;
  }, [page]);

  return (
    <>
      <Nav setPage={setPage} />
      <main className="flex-grow-1 flex flex-col">
        {page === "home" ? <Home /> : <News />}
      </main>
      <Modal />
    </>
  );
}

export default App;
