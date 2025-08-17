import { useState, useEffect } from "react";
import { Card, Loader } from "../components";

function News({ theme, category = "", setCategory }) {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (category.length > 0) {
      const fetchArticles = async () => {
        try {
          setIsLoading(true);
          const res = await fetch(
            `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=4fed5d128d4a41279852beb42efa1063`
          );
          if (!res.ok) {
            throw new Error("Failed to fetch articles");
          }
          const json = await res.json();
          setArticles(json["articles"]);
        } catch (error) {
          console.log(error);
        } finally {
          setIsLoading(false);
        }
      };
      fetchArticles();
    }
  }, [category]);

  return (
    <div className="py-10 px-3 max-w-[1200px]">
      {isLoading ? (
        <Loader />
      ) : (
        <Card
          category={category}
          articles={articles}
          theme={theme}
          setCategory={setCategory}
        />
      )}
    </div>
  );
}

export default News;
