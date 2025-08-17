import { useState, useEffect } from "react";
import { Nav, Modal } from "./components";
import { Home, News } from "./pages";

function App() {
  const [page, setPage] = useState("home");
  const preferTheme = () => {
    return matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme") ?? preferTheme();
    return saved;
  });

  const [category, setCategory] = useState("");

  useEffect(() => {
    document.title = `${page.at(0).toUpperCase()}${page.slice(1)} | News App`;
  }, [page]);

  return (
    <>
      <Nav
        setPage={setPage}
        theme={theme}
        setTheme={setTheme}
        setCategory={setCategory}
      />
      <main className="flex-grow-1 flex flex-col justify-center items-center">
        {page === "home" ? (
          <Home />
        ) : (
          <News theme={theme} category={category} setCategory={setCategory} />
        )}
      </main>
      <Modal setCategory={setCategory} setPage={setPage} />
    </>
  );
}

export default App;
