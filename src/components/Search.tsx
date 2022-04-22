import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search: React.FC = () => {
  return (
    <div className=" flex justify-center p-3 align-center h-[80px] w-1/2">
      <input
        type="search"
        id="mySearch"
        name="search"
        className="border border-black text-2xl p-[10px] w-1/2  "
        placeholder="Search the book..."
      />
      <button className="bg-orange-500 h-[56px] p-[10px]" type="submit">
        <FontAwesomeIcon icon={faSearch} className=" text-4xl" />
      </button>
    </div>
  );
};

export default Search;
