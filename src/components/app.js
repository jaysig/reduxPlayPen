import React, { Component } from 'react';
import SearchBar from '../containers/search-bar';
// import BookDetail from '../containers/book-detail';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        {/*<BookDetail />*/}
      </div>
    );
  }
}
