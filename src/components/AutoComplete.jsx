import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

function AutoComplete() {
  const [serachVal, setSerachVal] = useState("");
  const [searchList, setSearchList] = useState([]);
  const [arrowKeyCount, setArrowKeyCount] = useState(0);

  const navigate = useNavigate();

  const allowedCatagories = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];

  useEffect(() => {
    if (serachVal.length > 0) {
      const filter = allowedCatagories.filter((cat) =>
        cat.includes(serachVal.toLocaleLowerCase())
      );

      if (filter.length > 0) setSearchList(filter);
      else setSearchList(null);
    } else {
      setSearchList([]);
    }
  }, [serachVal]);
  return (
    <div className="w-full">
      <label className="input w-full">
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
          placeholder="Search.."
          autoComplete="off"
          value={serachVal}
          onInput={(e) => setSerachVal(e.target.value)}
          onKeyDown={(e) => {
            if (
              e.key.toLocaleLowerCase() === "enter" &&
              allowedCatagories.includes(serachVal.toLocaleLowerCase())
            ) {
              e.preventDefault();
              document.getElementById("browseNews").close();
              navigate(`/news/${serachVal}`);
            }
          }}
        />
      </label>
      <ul className="py-2.5 w-full px-2">
        {searchList?.length > 0 &&
          searchList.map((list, index) => (
            <li
              key={index}
              onClick={(e) => {
                navigate(`/news/${list}`);
                document.getElementById("browseNews").close();
              }}
              className="p-2 hover:bg-neutral rounded-md cursor-pointer hover:text-white flex items-center gap-3 capitalize"
            >
              <svg
                className="h-[0.95em] opacity-50"
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
              {list}
            </li>
          ))}

        {searchList === null && (
          <li className="p-2 rounded-md capitalize">No match found</li>
        )}
      </ul>
    </div>
  );
}

export default AutoComplete;
