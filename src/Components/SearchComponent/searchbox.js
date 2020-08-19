import React from 'react';
import './search-box.style.css';

const SearchBox = props =>{
return(
    <input type="search" 
    className= "search"
    placeholder={props.placeholder}
      onChange={props.handleChange}>
          
      </input>

)
};
export default SearchBox;