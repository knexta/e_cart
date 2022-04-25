import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search: React.FC = () => {
  return (
    // <div className="hidden sm:block  w-1/2">
    <div className=" flex justify-center p-3 align-center h-[80px] w-full">
      <input
        type="search"
        id="mySearch"
        name="search"
        className="border border-black text-2xl p-[10px] w-1/2  "
        placeholder="Search the product..."
      />
      <button className="bg-orange-500 h-[56px] p-[10px]" type="submit">
        <FontAwesomeIcon icon={faSearch} className=" text-4xl" />
      </button>
    </div>
    // </div>
  );
};

export default Search;
