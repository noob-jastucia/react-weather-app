import React, { Component } from "react";
import NavBar from "./components/navbar";
import "./App.css";
import Result from "./components/result";
import SearchBox from "./components/searchbox";
import Display from "./components/display";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      items: [],
      isLoaded: false,
      proxyUrl: "https://cors-anywhere.herokuapp.com/", //adding CORS proxy
      api: "https://www.metaweather.com/api/location/",
      display: "",
      city: ""
    };
  }

  componentDidMount() {
    if (this.state.text !== "")
      fetch(this.state.proxyUrl + this.state.api + "search/?query=")
        .then(res => res.json())
        .then(json => {
          this.setState({
            isLoaded: true,
            items: json
          });
        })
        .catch(function() {
          console.log("Error!");
        });
  }

  handleOnChange = event => {
    event.preventDefault();
    const { value } = event.target;
    const { proxyUrl, api } = this.state;
    if (value !== "") {
      fetch(proxyUrl + api + "search/?query=" + value)
        .then(res => res.json())
        .then(json => {
          this.setState({
            isLoaded: true,
            items: json,
            text: value
          });
        });
    } else {
      this.setState({
        isLoaded: true,
        items: [],
        text: value
      });
    }
  };

  handleOnClick = event => {
    event.preventDefault();
    const { value, innerHTML } = event.target;
    this.setState({
      display: value,
      items: [],
      city: innerHTML
    });
  };

  handleOnBack = event => {
    event.preventDefault();
    this.setState({
      display: "",
      city: ""
    });
  };

  render() {
    const { proxyUrl, api, items, display, city } = this.state;

    let disp = (
      <form className="form-horizontal">
        <div className="form-group">
          <SearchBox onChange={this.handleOnChange} />
        </div>
        <div className="form-group">
          <Result
            display={display}
            items={items}
            onClick={this.handleOnClick}
          />
        </div>
      </form>
    );

    if (display !== "") {
      disp = (
        <div>
          <Display woeid={display} city={city} proxyUrl={proxyUrl} api={api} />
        </div>
      );
    }

    return (
      <div>
        <main className="container">
          <NavBar onBack={this.handleOnBack} display={display} />
          {disp}
        </main>
      </div>
    );
  }
}

export default App;
