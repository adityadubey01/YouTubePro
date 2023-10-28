import React from "react";

const Header = () => {
  return (
    <div className="grid grid-flow-col shadow-lg p-2">
      <div className="grid grid-flow-col col-span-1">
        <img
          className="w-10 p-1 m-1"
          alt="MenuIcon"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0MAAUOBQikpKQpJSadnZ309PUAAAAIAADZ2Nj8/Pyop6cYExXBwMAtKSpta2xpZ2draWpfXV7BwcGvrq77CGWbAAABG0lEQVR4nO3cwXKCMBQFUApFTQAVtf3/Ty3tsKhLZpKSxnP+4M57JCwyt2kAAAAAAAAAAAAAAADgFQ1TX4ZpyJJvvIXYlSGGecyQcI5v5Yi39AGHsHeqJyH9ovYljXAZ4qeEm9W/pc29pCHmOGma8R7iexky3RbLovbHMvR5bnwAAAAAAAAAANhkPJUhV77hcT2U4frI8mToI5zbUpzDJX3A06Hd+7neL22X/mHbpbDXl+mHeOz2DvUk9skT1j/D+r/DZYiVn6UvcB9+2/tnZpUrHgAAAAAAAAAAbDBMe5ftrXK17M619yZq2f1bGfpLp5JGmKWDtv6E9W9p/SfNz22xdxn7Kl/LbuW9+gAAAAAAAAAAAAAAAPCffAHLSDTi5JU+gwAAAABJRU5ErkJggg=="
        />
        <img
          className="w-28 p-1 mt-2"
          alt="YouTubeIcon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRONuWvQHJt5ooi822FbtizsibO3m7cNHMHNg&usqp=CAU"
        />
      </div>
      <div className="col-span-10 px-10 ml-28">
        <input
          className="w-1/2 mt-2 p-2 border border-gray-400 rounded-l-full"
          type="text"
        />
        <button className="p-2 mt-2 border border-gray-400 rounded-r-full bg-gray-100">
          Search
        </button>
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
