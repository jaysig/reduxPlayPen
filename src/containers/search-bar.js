import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions/index.js';
import { bindActionCreators } from 'redux';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onInputChange(event) {
    this.setState({ term: event.target.value });
  }
  onFormSubmit(event) {
    event.preventDefault();
    console.log(this.state.term);
    this.props.fetchWeather(this.state.term);
    this.setState({term: '' })
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

// anything return from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever select books is called, pass result to all reducers
  return bindActionCreators({ fetchWeather }, dispatch);
}

// Promote booklist from Component to container
// know about this new dispatch method, selectBook. make it available as a prop
export default connect(null, mapDispatchToProps)(SearchBar);


// export default connect(mapStateToProps)(SearchBar);
