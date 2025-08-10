import React from "react";

function Home() {
  return (
    <div className="hero flex-grow-1">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold whitespace-nowrap">
            Welcome to our Page
          </h1>
          <p className="py-6 text-sm sm:text-base">
            We provide News because we had nothing else to do
          </p>
          <button
            className="btn btn-primary"
            onClick={() => {
              document.getElementById("browseNews").showModal();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>{" "}
            Browse News
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
