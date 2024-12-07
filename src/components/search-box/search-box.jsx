import React from "react";

import "./style.css";

export const SearchBox = ({placeholder, handleChange}) => (

  <input
  className='search'
  type="search"
  placeholder={placeholder}
  //synthetic event
  onChange={handleChange
  }
/>
)