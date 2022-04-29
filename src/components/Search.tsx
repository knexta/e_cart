import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useQuery } from "@apollo/client";
// import { getProducts } from "../graphql/Queries";
// import { Data } from "../types/ProductTypes";
// import { toast } from "react-toastify";
// import Spinner from "../utils/Spinner";
import { search } from "../types/ProductTypes";

const Search: React.FC<search> = ({ search, setSearch }) => {
  const handleSearch = () => {};
  return (
    // <div className="hidden sm:block  w-1/2">
    <div className=" flex justify-center p-3 align-center h-[80px] w-full">
      <input
        type="search"
        id="mySearch"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border border-black text-2xl p-[10px] w-1/2  "
        placeholder="Search the product..."
      />
      <button
        onClick={handleSearch}
        className="bg-orange-500 h-[56px] p-[10px]"
        type="submit"
      >
        <FontAwesomeIcon icon={faSearch} className=" text-4xl" />
      </button>
    </div>
    // </div>
  );
};

export default Search;
