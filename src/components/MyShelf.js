import React from 'react';
import PropTypes from 'prop-types';
const MyShelf = ({ book, categories, library }) => {
  const myShelf = library.find((myBook) => myBook.id === book.id);

  if (myShelf) {
    const category = categories.find((cat) => cat.value === myShelf.shelf);

    const className = `myshelf ${category.value.toLowerCase()}`;

    return category.value !== 'none' ? (
      <div className={className}>{category.name}</div>
    ) : null;
  }

  return null;
};

MyShelf.propTypes = {
  book: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired,
  library: PropTypes.array.isRequired,
};

export default MyShelf;
