import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "./utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../components/utils/config";
import { addSearchCache } from "./utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestion, setSearchSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const dispatch = useDispatch();

  const searchCache = useSelector((store) => store.search);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSearchSuggestion(searchCache[searchQuery]);
      } else {
        fetchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const fetchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const jsonData = await data.json();
    setSearchSuggestion(jsonData[1]);
    dispatch(
      addSearchCache({
        [searchQuery]: jsonData[1],
      })
    );
  };
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col shadow-lg p-2">
      <div className="grid grid-flow-col col-span-1">
        <img
          className="w-10 p-1 m-1 cursor-pointer"
          alt="MenuIcon"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0MAAUOBQikpKQpJSadnZ309PUAAAAIAADZ2Nj8/Pyop6cYExXBwMAtKSpta2xpZ2draWpfXV7BwcGvrq77CGWbAAABG0lEQVR4nO3cwXKCMBQFUApFTQAVtf3/Ty3tsKhLZpKSxnP+4M57JCwyt2kAAAAAAAAAAAAAAADgFQ1TX4ZpyJJvvIXYlSGGecyQcI5v5Yi39AGHsHeqJyH9ovYljXAZ4qeEm9W/pc29pCHmOGma8R7iexky3RbLovbHMvR5bnwAAAAAAAAAANhkPJUhV77hcT2U4frI8mToI5zbUpzDJX3A06Hd+7neL22X/mHbpbDXl+mHeOz2DvUk9skT1j/D+r/DZYiVn6UvcB9+2/tnZpUrHgAAAAAAAAAAbDBMe5ftrXK17M619yZq2f1bGfpLp5JGmKWDtv6E9W9p/SfNz22xdxn7Kl/LbuW9+gAAAAAAAAAAAAAAAPCffAHLSDTi5JU+gwAAAABJRU5ErkJggg=="
          onClick={() => {
            toggleMenuHandler();
          }}
        />
        <img
          className="w-28 p-1 mt-2"
          alt="YouTubeIcon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRONuWvQHJt5ooi822FbtizsibO3m7cNHMHNg&usqp=CAU"
        />
      </div>
      <div className="col-span-10 px-10 ml-28">
        <div>
          <input
            className="w-1/2 mt-2 px-4 py-2 border border-gray-400 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            onFocus={() => {
              setShowSuggestion(true);
            }}
            onBlur={() => {
              setShowSuggestion(false);
            }}
          />
          <button className="p-2 mt-2 border border-gray-400 rounded-r-full bg-gray-100">
            Search
          </button>
        </div>
        {showSuggestion && (
          <div className="absolute py-2 px-5 bg-white w-[35rem] shadow-lg rounded-lg border border-gray-200">
            <ul>
              {searchSuggestion.map((currSearch) => {
                return (
                  <li
                    className="py-2 shadow-sm hover:bg-gray-200"
                    key={currSearch}
                  >
                    💨 {currSearch}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
      <div className="grid grid-flow-col col-span-1">
        <img
          className="w-10 p-1 mt-2"
          alt="ProfileIcon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnF-wtqndIensQ2gIC-2KZPTJw_bTGZ50qNA&usqp=CAU"
        />
      </div>
    </div>
  );
};

export default Header;
