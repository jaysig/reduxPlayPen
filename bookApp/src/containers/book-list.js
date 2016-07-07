import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index.js';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={ book.title }
          onClick={ () => this.props.selectBook(book)}
          className="list-group-item">{ book.title }
        </li>
      );
    });
  }
  render() {
    return (
      <ul className="list-group col-sm-4">
        { this.renderList() }
      </ul>
    );
  }
}

function mapStateToProps(state) {
  // Whatever is return will show up as props
  return {
    books: state.books,
  };
}

// anything return from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever select books is called, pass result to all reducers
  return bindActionCreators({ selectBook }, dispatch);
}

// Promote booklist from Component to container
// know about this new dispatch method, selectBook. make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
