import React from 'react';
import PropTypes from 'prop-types';
import Shelf from '../components/Shelf';

import { Link } from 'react-router-dom';

class HomePageComponent extends React.Component {
  static propTypes = {
    myBooks: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired,
  };

  shelfBooks = (shelf) => {
    const { myBooks } = this.props;
    if (myBooks) {
      return myBooks.filter((book) => book.shelf === shelf);
    }
  };

  render() {
    const { categories } = this.props;
    return (
      <div className='list-books'>
        <div className='list-books-title'>
          <h1>
            MyReads<span>.</span>
          </h1>
        </div>
        <div className='list-books-content'>
          <div>
            {categories
              .filter((category) => category.showHomePage === true)
              .map((category) => {
                return (
                  <Shelf
                    key={category.value}
                    shelf={category}
                    categories={categories}
                    books={this.shelfBooks(category.value)}
                  />
                );
              })}
          </div>
        </div>
        <div className='open-search'>
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    );
  }
}

export default HomePageComponent;
