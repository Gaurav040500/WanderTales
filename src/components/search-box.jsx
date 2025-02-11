import React from "react";
import { IoSearch } from "react-icons/io5";

function SearchBox() {
  return (
    <div className="flex flex-col justify-center items-center my-12 px-4">
      <div className="text-4xl m-4 font-bold text-center">
        &quot;Building India&apos;s No.1 Travel Community&quot;
      </div>
      <div className="text-gray-500 text-xl text-center mb-6">
        &quot;Bringing Together Indian Travellers to Share Stories, Discover
        Indian Gems, and Inspire Every Journey.&quot;
      </div>
      <div className="flex space-x-4">
        <div className="relative flex-1">
          {/* Input container */}
          <input
            className="w-[40rem] p-3 pl-12 border-2 border-gray-300 text-lg px-2 rounded-lg"
            placeholder="Search destinations, experiences, or stories"
          />
          {/* Search icon */}
          <IoSearch size={30} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <div className="">
          <button className="bg-black text-white p-3 text-lg rounded-xl">
            Start Exploring
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBox;
