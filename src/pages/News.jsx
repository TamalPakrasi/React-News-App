import { useState, useEffect, useRef, useCallback } from "react";
import { Card, Loader } from "../components";

function News({ theme, category = "", setCategory }) {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pageNo, setPageNo] = useState(1);
  const [isFetching, setIsFetching] = useState(false);
  const [isLast, setIsLast] = useState(false);
  const observer = useRef();

  const fetchArticles = async (pageNo) => {
    try {
      if (pageNo === 1) setIsLoading(true);
      setIsFetching(true);
      console.log("fetching...");
      console.log(pageNo);

      const res = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&category=${category}&page=${pageNo}&apiKey=4fed5d128d4a41279852beb42efa1063`
      );
      if (!res.ok) {
        throw new Error("Failed to fetch articles");
      }
      const json = await res.json();
      const array = json["articles"];
      console.log(array);

      if (array.length === 0) {
        console.log("last....");
        setIsLast(true);
      } else {
        setArticles((prev) => [...prev, ...array]);
      }
    } catch (error) {
      console.log(error);
      setIsLast(true);
    } finally {
      setIsLoading(false);
      setIsFetching(false);
    }
  };

  useEffect(() => {
    setArticles([]);
    setIsLast(false);
    setPageNo(1);

    if (category.length > 0) {
      fetchArticles(1);
    }
  }, [category]);

  useEffect(() => {
    if (pageNo > 1 && category.length > 0) {
      fetchArticles(pageNo);
    }
  }, [pageNo]);

  const lastItemRef = useCallback(
    (node) => {
      if (isFetching) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPageNo((prev) => prev + 1);
        }
      });

      if (node && !isLast) observer.current.observe(node);
    },
    [isFetching]
  );

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
          lastItemRef={lastItemRef}
        />
      )}
    </div>
  );
}

export default News;
