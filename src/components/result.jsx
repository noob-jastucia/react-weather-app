import React, { Component } from "react";
import Item from "./item";

class Result extends Component {
  state = {};

  render() {
    if (this.props.items.length > 0)
      return (
        <React.Fragment>
          Result
          <div>
            <table className="table table-bordered">
              <tbody>
                {this.props.items.map(item => (
                  <Item
                    key={item.woeid}
                    item={item}
                    onClick={this.props.onClick}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </React.Fragment>
      );

    return null;
  }
}

export default Result;
