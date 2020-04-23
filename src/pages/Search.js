import React from 'react';
import { Link } from 'react-router-dom';
import { DebounceInput } from 'react-debounce-input';

import * as BooksAPI from '../utils/BooksAPI';
import BooksList from '../components/BooksList';
class SearchComponent extends React.Component {
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
            return {
              ...book,
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
          {books.length > 0 && <BooksList books={books} />}
        </div>
      </div>
    );
  }
}

export default SearchComponent;
