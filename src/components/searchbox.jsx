import React, { Component } from "react";

class SearchBox extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <label className="control-label" htmlFor="search-box">
          Enter a city name
        </label>
        <br />
        <input
          placeholder="Search for a city"
          id="search-box"
          type="text"
          onChange={event => this.props.onChange(event)}
          value={this.props.text}
        />
      </React.Fragment>
    );
  }
}

export default SearchBox;
