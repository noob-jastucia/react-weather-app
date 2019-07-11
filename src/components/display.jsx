import React, { Component } from "react";

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      json: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    const { proxyUrl, api, woeid } = this.props;
    fetch(proxyUrl + api + woeid)
      .then(res => res.json())
      .then(json => {
        this.setState({
          json: json,
          isLoaded: true
        });
      });
  }

  render() {
    if (this.state.isLoaded) {
      return (
        <div>
          <h5>5 Day Forecast for {this.props.city}</h5>
          <table className="table table-striped">
            <tbody>
              {this.state.json.consolidated_weather.slice(0, 5).map(weather => (
                <React.Fragment key={weather.id}>
                  <tr>
                    <td>
                      <div>{weather.applicable_date}</div>
                      <div>{weather.weather_state_name}</div>
                    </td>
                    <td>
                      <div>{Number(weather.min_temp).toFixed(1)} &deg;C</div>
                      <div>Min</div>
                    </td>
                    <td>
                      <div>{Number(weather.max_temp).toFixed(1)} &deg;C</div>
                      <div>Max</div>
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
    return <div>Loading...</div>;
  }
}

export default Display;
