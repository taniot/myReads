import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from './pages/Homepage';

import './App.css';

const categories = [
  { name: 'Currently Reading', value: 'currentlyReading', showHomePage: true },
  { name: 'Want to Read', value: 'wantToRead', showHomePage: true },
  { name: 'Read', value: 'read', showHomePage: true },
  { name: 'None', value: 'none', showHomePage: false },
];

class BooksApp extends React.Component {
  state = {
    myBooks: [],
  };

  render() {
    const { myBooks } = this.state;

    return (
      <div className='app'>
        <Route
          exact
          path='/'
          render={() => <HomePage myBooks={myBooks} categories={categories} />}
        />
      </div>
    );
  }
}

export default BooksApp;
