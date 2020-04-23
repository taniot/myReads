import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Book from '../components/Book';
const BooksList = ({ books, categories, onChangeShelf, library }) => {
  if (books.length) {
    return (
      <ol className='books-grid'>
        {books.map((book) => (
          <li key={book.id}>
            <Book
              book={book}
              library={library}
              categories={categories}
              onChangeShelf={onChangeShelf}
            />
          </li>
        ))}
      </ol>
    );
  } else {
    return (
      <p className='add-book'>
        {' '}
        There are no books here, but you can add them by{' '}
        <Link to='/search'>clicking here</Link>!
      </p>
    );
  }
};

BooksList.propTypes = {
  books: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func.isRequired,
  library: PropTypes.array.isRequired,
};

export default BooksList;
