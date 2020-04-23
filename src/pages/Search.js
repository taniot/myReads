import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { DebounceInput } from 'react-debounce-input';

import * as BooksAPI from '../utils/BooksAPI';
import BooksList from '../components/BooksList';
class SearchComponent extends React.Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
  };

  state = {
    query: '',
    books: [],
  };

  handleSearch = (query) => {
    this.setState({ query });
    const queryString = query.trim();

    if (queryString) {
      BooksAPI.search(queryString).then((response) => {
        if (response && response.length > 0 && queryString !== '') {
          const books = response.map((book) => {
            const libBook = this.props.books.find(
              (libBook) => libBook.id === book.id
            );
            const shelf = libBook ? libBook.shelf : 'none';

            return {
              ...book,
              shelf: shelf,
              author: book.authors ? book.authors : null,
              imageLinks: {
                smallThumbnail: book.imageLinks
                  ? book.imageLinks.smallThumbnail
                  : null,
              },
            };
          });

          this.setState({
            books,
          });
        } else {
          this.setState({ books: [] });
        }
      });
    } else {
      this.setState({ books: [] });
    }
  };

  render() {
    const { books } = this.state;
    const { categories, onChangeShelf } = this.props;
    const library = this.props.books;
    return (
      <div className='search-books'>
        <div className='search-books-bar'>
          <Link to='/' className='close-search'>
            Close
          </Link>
          <div className='search-books-input-wrapper'>
            <DebounceInput
              minLength={1}
              debounceTimeout={100}
              placeholder='Search by title or author'
              onChange={(event) => this.handleSearch(event.target.value)}
            />
          </div>
        </div>
        <div className='search-books-results'>
          {books.length > 0 && (
            <BooksList
              books={books}
              library={library}
              categories={categories}
              onChangeShelf={onChangeShelf}
            />
          )}
        </div>
      </div>
    );
  }
}

export default SearchComponent;
