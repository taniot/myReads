import React from 'react';
import PropTypes from 'prop-types';
import BooksList from '../components/BooksList';
const Shelf = ({ shelf, books, categories, onChangeShelf }) => {
  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>{shelf.name}</h2>
      <div className='bookshelf-books'>
        <BooksList
          books={books}
          categories={categories}
          onChangeShelf={onChangeShelf}
        />
      </div>
    </div>
  );
};

Shelf.propTypes = {
  shelf: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func.isRequired,
};

export default Shelf;
