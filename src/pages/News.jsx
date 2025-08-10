import { NewsCard } from "../components";
import { useLoaderData } from "react-router";
import { useParams } from "react-router";

function News() {
  const articles = useLoaderData();
  const { catagory } = useParams();

  return (
    <div className="flex-grow-1 grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 py-10 justify-items-center mx-auto gap-y-7 sm:gap-x-3 lg:gap-x-7">
      <h2 className="text-xl md:col-span-2 xl:col-span-3 uppercase font-semibold">
        {catagory}
      </h2>
      {articles.length > 0 &&
        articles.map((article, index) => <NewsCard key={index} {...article} />)}
    </div>
  );
}

export default News;
