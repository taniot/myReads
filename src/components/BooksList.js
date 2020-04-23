import React from 'react';
import PropTypes from 'prop-types';
import Book from '../components/Book';
const BooksList = ({ books, categories, onChangeShelf }) => {
  if (books.length) {
    return (
      <ol className='books-grid'>
        {books.map((book) => (
          <li key={book.id}>
            <Book book={book} categories={categories} onChangeShelf={onChangeShelf} />
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
  categories: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func.isRequired
};

export default BooksList;
