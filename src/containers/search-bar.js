import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
  }
  onInputChange(event) {
    this.setState({ term: event.target.value });
  }
  onFormSubmit(event) {
    event.preventDefault();
  }
  render() {
    // console.log(this.props);
    // if (!this.props.book) {
    //   return <div>Select a book to get started</div>;
    // }

    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Five day forecast"
          className="form-control"
          value={ this.state.term }
          onChange={ this.onInputChange }
        />
        <span className="input-group-btn">
          <button className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     book: state.activeBook,
//   };
// }

// export default connect(mapStateToProps)(SearchBar);
