import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className="pt-[10%] flex justify-center">
      <form className="bg-black grid grid-cols-12 w-1/2">
        <input
          type="text"
          className="p-1 m-2 col-span-9"
          placeholder={lang[langKey].gtpSearchPlaceholder}
        />
        <button className=" bg-red-700 m-2 text-white rounded-lg col-span-3">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
