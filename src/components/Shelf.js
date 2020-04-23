import React from 'react';
import BooksList from '../components/BooksList';
const ShelfComponent = ({ shelf, books }) => {
  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>{shelf.name}</h2>
      <div className='bookshelf-books'>
        <BooksList books={books} />
      </div>
    </div>
  );
};

export default ShelfComponent;
