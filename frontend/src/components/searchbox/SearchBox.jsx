import React from "react";
import './SearchBox.css'

const SearchBox = () => {
  return (
    <div class="searchBox">
      <input class="searchInput" type="text" name="" placeholder="What are you looking for today?" />
      <button class="searchButton" href="#">
        <img src="../Images/Icons/search_icon1.png" height={25} width={25} alt=""/>
      </button>
    </div>
  );
};

export default SearchBox;
