import React from 'react';
import './SearchBox.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function SearchBox(props) {
  return (
    <div className='search'>
      <input type="text" placeholder="Enter Id" onChange={props.onChange} />
      <FontAwesomeIcon className='fa-search' icon={faSearch} />
    </div>
  );
}

export default SearchBox;
