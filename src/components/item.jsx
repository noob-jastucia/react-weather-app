import React, { Component } from "react";

class Item extends Component {
  state = {};

  render() {
    return (
      <tr>
        <td>
          <button
            onClick={event => this.props.onClick(event)}
            value={this.props.item.woeid}
          >
            {this.props.item.title}
          </button>
        </td>
      </tr>
    );
  }
}

export default Item;
