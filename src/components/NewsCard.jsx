import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function NewsCard({
  theme,
  source,
  author,
  title,
  description,
  url,
  urlToImage,
  publishedAt,
  content,
  lastItemRef = null,
}) {
  const dateTime = new Date(publishedAt)
    .toLocaleDateString("en-IN", {
      timeZone: "Asia/Kolkata",
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    })
    .replace(/\b(am|pm)\b/i, (m) => m.toLocaleUpperCase());

  return lastItemRef ? (
    <div
      ref={lastItemRef}
      className="card bg-base-100 shadow-sm  transition-[scale,shadow] duration-500 ease-in-out hover:scale-105 hover:shadow-lg"
    >
      <figure>
        <LazyLoadImage
          alt="Lazy example"
          effect="blur"
          src={urlToImage || "/no-image.jpg"}
          onError={(e) => (e.target.src = "/no-image.jpg")}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title || "No Title"}</h2>
        <div
          className={`flex justify-between items-center ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          } text-xs`}
        >
          <div className="flex flex-col gap-1">
            <span>Author | {author || "Anonymus"}</span>
            <span>Source | {source["name"] || "Anonymus"}</span>
          </div>
          <span className="whitespace-nowrap">
            {dateTime || "Time not mentioned"}
          </span>
        </div>
        <p
          className={`text-[12px] ${
            theme === "dark" ? "text-gray-400" : "text-gray-700"
          }`}
        >
          {description || "---"}
        </p>
        <p>{content?.split("[+")[0] || "--"}</p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-primary"
            onClick={() => {
              if (url) open(url);
            }}
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="card bg-base-100 shadow-sm  transition-[scale,shadow] duration-500 ease-in-out hover:scale-105 hover:shadow-lg">
      <figure>
        <LazyLoadImage
          alt="Lazy example"
          effect="blur"
          src={urlToImage || "/no-image.jpg"}
          onError={(e) => (e.target.src = "/no-image.jpg")}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title || "No Title"}</h2>
        <div
          className={`flex justify-between items-center ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          } text-xs`}
        >
          <div className="flex flex-col gap-1">
            <span>Author | {author || "Anonymus"}</span>
            <span>Source | {source["name"] || "Anonymus"}</span>
          </div>
          <span className="whitespace-nowrap">
            {dateTime || "Time not mentioned"}
          </span>
        </div>
        <p
          className={`text-[12px] ${
            theme === "dark" ? "text-gray-400" : "text-gray-700"
          }`}
        >
          {description || "---"}
        </p>
        <p>{content?.split("[+")[0] || "--"}</p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-primary"
            onClick={() => {
              if (url) open(url);
            }}
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
