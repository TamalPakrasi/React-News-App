import { useState, useEffect } from "react";

function AutoComplete({ input, setInput, setCategory, setPage, modalRef }) {
  const [activeListCount, setActiveListCount] = useState(-1);
  const [isMoving, setIsMoving] = useState(false);

  const categories = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];
  const [lists, setLists] = useState([]);

  useEffect(() => {
    if (input.length === 0) {
      setLists([]);
      setActiveListCount(-1);
      setIsMoving(false);
      return;
    }

    if (!isMoving) {
      const filter = categories.filter((cat) => cat.includes(input));
      setLists(filter);
    }
  }, [input]);

  useEffect(() => {
    if (activeListCount > -1) {
      setIsMoving(true);
      setInput(lists[activeListCount]);
    } else {
      setIsMoving(false);
    }
  }, [activeListCount]);

  return (
    <>
      <label className="input mt-4 w-full">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input
          type="search"
          className="grow capitalize"
          placeholder="Search"
          value={input}
          onInput={(e) => setInput(e.target.value.toLowerCase())}
          onKeyDown={(e) => {
            if (lists.length > 0) {
              if (e.key.toLowerCase() === "arrowdown") {
                if (activeListCount < lists.length - 1)
                  setActiveListCount((prev) => prev + 1);
                else if (activeListCount === lists.length - 1)
                  setActiveListCount(0);
              } else if (e.key.toLowerCase() === "arrowup") {
                if (activeListCount > 0) setActiveListCount((prev) => prev - 1);
                else if (activeListCount === 0)
                  setActiveListCount(lists.length - 1);
              } else if (e.key.toLowerCase() === "enter") {
                if (categories.includes(input)) {
                  e.preventDefault();
                  setPage("news");
                  setCategory(input);
                  modalRef.current.close();
                  setActiveListCount(-1);
                }
              } else {
                setActiveListCount(-1);
              }
            }
          }}
        />
      </label>
      <ul className="mt-5">
        {lists.length > 0 &&
          lists.map((list, index) => (
            <li
              className={`flex items-center gap-3 ps-3 cursor-pointer py-3 hover:bg-base-300 rounded-box capitalize ${
                index === activeListCount ? "bg-base-300" : ""
              }`}
              onClick={() => {
                setPage("news");
                setCategory(list);
                modalRef.current.close();
              }}
              key={list}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
              {list}
            </li>
          ))}

        {lists.length === 0 && input.length > 0 && (
          <li className="ps-3 cursor-pointer py-3 hover:bg-base-300 rounded-box capitalize">
            No Category
          </li>
        )}
      </ul>
    </>
  );
}

export default AutoComplete;
