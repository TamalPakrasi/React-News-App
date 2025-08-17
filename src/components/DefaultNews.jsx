import React from "react";

function DefaultNews({ setCategory }) {
  const categories = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];
  return (
    <>
      <h2 className="text-3xl font-bold text-center">Select Catagory</h2>
      <div className="mt-7 flex flex-wrap w-100 gap-4 justify-center items-center">
        {categories.map((category) => (
          <button
            className="btn text-xs"
            onClick={() => {
              setCategory(category);
            }}
          >
            {category}
          </button>
        ))}
      </div>
    </>
  );
}

export default DefaultNews;
