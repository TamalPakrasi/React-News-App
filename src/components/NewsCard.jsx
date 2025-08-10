import React from "react";

function NewsCard() {
  const dateTime = new Date("2025-08-09T02:02:59Z")
    .toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      hour12: true,
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
      hour: "numeric",
      minute: "numeric"
    })
    .replace(/\b(am|pm)\b/i, (m) => m.toUpperCase());

  return (
    <div className="card bg-base-100 w-96 shadow-sm max-h-fit transition-transform duration-300 ease-in-out scale(100) hover:scale-105 hover:shadow-lg hover:dark:shadow-gray-900">
      <figure>
        <img
          src="https://nbcsports.brightspotcdn.com/dims4/default/af7f598/2147483647/strip/true/crop/5446x3063+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.us-east-1.amazonaws.com%2Fbrightspot%2Fb1%2F60%2F89c436814ee2b7bbd931a0f96856%2Fhttps-delivery-gettyimages.com%2Fdownloads%2F2229151887"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Browns rookie Shedeur Sanders throws two touchdown passes - NBC Sports
        </h2>
        <div className="dark:text-gray-300 text-gray-500 text-xs flex-between my-2">
          <span>Author | Charean Williams</span>
          <span>{dateTime}</span>
        </div>
        <p className="text-xs dark:text-gray-300 text-gray-500">
          Browns fans will be calling for Shedeur Sanders to win the starting
          job after his performance Friday night.
        </p>
        <p>
          Browns fans will be calling for Shedeur Sanders to win the starting
          job after his performance Friday night.The rookie quarterback created
          a buzz by completing 14 of 23 passes for 138 yards and two …
          {/* [+702 chars] */}
        </p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-primary"
            onClick={() =>
              open(
                "https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/browns-rookie-shedeur-sanders-throws-two-touchdown-passes",
                "_blank"
              )
            }
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
