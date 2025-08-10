import { setArticles } from "../features/article.slice.js";
import { store } from "../store/store.js";

export const fetchArticles = async (catagory) => {
  const articles = store.getState().articles;

  if (articles[catagory]) {
    return articles[catagory];
  }

  try {
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${catagory}&apiKey=4fed5d128d4a41279852beb42efa1063`
    );

    if (!res.ok) throw new Error("Failed to fetch articles");

    const json = await res.json();

    store.dispatch(
      setArticles({
        [catagory]: json["articles"],
      })
    );

    return json["articles"];
  } catch (error) {
    console.log(error);
    return [];
  }
};
