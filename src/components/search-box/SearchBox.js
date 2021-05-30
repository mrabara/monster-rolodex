import React from 'react'
import '../../css/search-box.styles.css';

export const SearchBox = ({placeholder, handleChange }) => {
    return (
        // some input box
        <input className='search' type="search" placeholder={placeholder } onChange={handleChange}/>
    )
}
