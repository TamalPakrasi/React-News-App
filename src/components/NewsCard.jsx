import React from "react";

function NewsCard({
  source,
  author,
  urlToImage,
  title,
  description,
  publishedAt,
  content,
  url,
}) {
  const dateTime = new Date(publishedAt)
    .toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      hour12: true,
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
      hour: "numeric",
      minute: "numeric",
    })
    .replace(/\b(am|pm)\b/i, (m) => m.toUpperCase());

  const modifiedContent = content?.split("[+")[0] || content;

  return (
    <div className="card bg-base-100 w-96 shadow-sm max-h-fit transition-transform duration-300 ease-in-out scale(100) hover:scale-105 hover:shadow-lg hover:dark:shadow-gray-900">
      <figure>
        <img
          src={urlToImage ?? "/Image_not_available.png"}
          alt={source["name"]}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="dark:text-gray-300 text-gray-500 text-xs flex justify-between my-2">
          <div className="flex flex-col gap-1">
            <span>Author | {author ?? "Anonymus"}</span>
            <span>Source | {source["name"] ?? "Anonymus"}</span>
          </div>
          <span className="whitespace-nowrap">{dateTime} IST</span>
        </div>
        <p className="text-xs dark:text-gray-300 text-gray-500">
          {description ?? "---"}
        </p>
        <p>{modifiedContent ?? "---"}</p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-primary"
            onClick={() => open(url, "_blank")}
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
