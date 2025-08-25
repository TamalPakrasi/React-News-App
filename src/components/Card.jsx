import { NewsCard, DefaultNews } from ".";

function Card({ category, articles, theme, setCategory, lastItemRef }) {
  return category.length > 0 ? (
    <>
      <h2 className="text-3xl font-bold text-center capitalize">
        {category} News
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-7 gap-7">
        {articles.map((article, index) =>
          index === articles.length - 1 ? (
            <NewsCard
              theme={theme}
              key={index}
              lastItemRef={lastItemRef}
              {...article}
            />
          ) : <NewsCard
              theme={theme}
              key={index}
              {...article}
            />
        )}
      </div>
    </>
  ) : (
    <DefaultNews setCategory={setCategory} />
  );
}

export default Card;
