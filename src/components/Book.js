import React from 'react';
import PropTypes from 'prop-types';

import ShelfChanger from '../components/ShelfChanger';

class Book extends React.Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    categories: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired,
  };


  render() {
    const { book, categories, onChangeShelf } = this.props;
    return (
      <div className='book'>
        <div className='book-top'>
          <div
            className='book-cover'
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url("${book.imageLinks.smallThumbnail}")`,
            }}
          >
            <ShelfChanger
              book={book}
              categories={categories}
              onChangeShelf={onChangeShelf}
            />
          </div>
        </div>
        <div className='book-title'>{book.title}</div>
        <div className='book-authors'>
          {book.authors ? book.authors.join(', ') : 'No Author'}
        </div>
      </div>
    );
  }
}

export default Book;
