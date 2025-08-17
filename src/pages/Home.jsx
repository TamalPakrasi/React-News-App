import React from "react";

function Home({ setOpen }) {
  return (
    <div className="hero bg-base-200 flex-grow-1">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">News App</h1>
          <p className="py-6">News for dummies</p>
          <button
            className="btn btn-primary"
            onClick={() => document.getElementById("browsernews").showModal()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            Browse News
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
