import React from 'react';
import { Link } from 'react-router-dom';

class SearchComponent extends React.Component {
  state = {
    query: '',
    books: [],
  };

  render() {
    return (
      <div className='search-books'>
        <div className='search-books-bar'>
          <Link to='/' className='close-search'>
            Close
          </Link>
          <div className='search-books-input-wrapper'>
            <input placeholder='Search by title or author' />
          </div>
        </div>
        <div className='search-books-results'></div>
      </div>
    );
  }
}

export default SearchComponent;
