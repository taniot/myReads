import React from 'react';
import PropTypes from 'prop-types';
import Book from '../components/Book';
const BooksList = ({ books }) => {
  if (books.length) {
    return (
      <ol className='books-grid'>
        {books.map((book) => (
          <li key={book.id}>
            <Book book={book} />
          </li>
        ))}
      </ol>
    );
  } else {
    return <p className='add-book'>There are no books here.</p>;
  }
};

BooksList.propTypes = {
  books: PropTypes.array.isRequired,
};

export default BooksList;
