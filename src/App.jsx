import { useState, useEffect } from "react";
import { Navbar, NewsCard } from "./components";

function App() {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=4fed5d128d4a41279852beb42efa1063`);

        if (!res.ok) throw new Error("Failed to fetch articles");
        
        const json = await res.json();

        setArticles(json["articles"]);
      } catch (error) {
        console.log(error);
      }
    }

    fetchArticles();
  }, [])
  

  return (
    <>
      <Navbar />
      <div className="flex-grow-1 grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 py-10 justify-items-center mx-auto gap-y-7 sm:gap-x-3 lg:gap-x-7">
        {articles.length > 0 && articles.map((article, index) => (
          <NewsCard key={index} {...article}/>
        ))}
      </div>
    </>
  );
}

export default App;
