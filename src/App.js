import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from './pages/Homepage';
import Search from './pages/Search';
import * as BooksAPI from './utils/BooksAPI';

import './App.css';

const categories = [
  { name: 'Currently Reading', value: 'currentlyReading', showHomePage: true },
  { name: 'Want to Read', value: 'wantToRead', showHomePage: true },
  { name: 'Read', value: 'read', showHomePage: true },
  { name: 'None', value: 'none', showHomePage: false },
];

class BooksApp extends React.Component {
  state = {
    books: [],
  };

  componentDidMount() {
    this.getMyBooks();
  }

  getMyBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({
        books,
      }));
    });
  };

  changeShelf = (book, shelf) => {
    const { books } = this.state;
    const findIndex = books.findIndex((myBook) => myBook.id === book.id);

    if (findIndex !== -1) {
      books[findIndex].shelf = shelf;
      const newBook = books[findIndex];
      books.splice(findIndex, 1);

      this.setState({ books: books.concat([newBook]) });
    } else {
      if (shelf !== 'none') {
        book.shelf = shelf;
        this.setState({ books: books.concat([book]) });
      }
    }

    BooksAPI.update(book, shelf);
  };

  render() {
    const { books } = this.state;

    return (
      <div className='app'>
        <Route
          exact
          path='/'
          render={() => (
            <HomePage
              books={books}
              categories={categories}
              onChangeShelf={this.changeShelf}
            />
          )}
        />
        <Route
          exact
          path='/search'
          render={() => (
            <Search
              books={books}
              categories={categories}
              onChangeShelf={this.changeShelf}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
