import React from 'react';
import PropTypes from 'prop-types';
import BooksList from '../components/BooksList';
const Shelf = ({ shelf, books }) => {
  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>{shelf.name}</h2>
      <div className='bookshelf-books'>
        <BooksList books={books} />
      </div>
    </div>
  );
};

Shelf.propTypes = {
    shelf: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired
}

export default Shelf;
