import React from 'react';
import './search-box.scss';

const SearchBox = (props) => {
  return (
    <input 
      className="search"
      type="search" 
      placeholder={props.placeholder}
      onChange={props.handleSearch}
    />
  )
};

export default SearchBox;
