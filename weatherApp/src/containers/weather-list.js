import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index.js';
import { bindActionCreators } from 'redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';


class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;


    console.log(temps);
    return (
      <tr key={ name }>
        <td> <GoogleMap lon={ lon } lat={ lat } /> </td>
        <td>
          <Chart data={ temps } color="blue" units="K" />
        </td>
        <td>
          <Chart data={ pressures } color="black" units="hPa" />
        </td>
        <td>
          <Chart data={ humidities } color="green" units="%" />
        </td>
      </tr>
      );
  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%) </th>
          </tr>
        </thead>
        <tbody>
          { this.props.weather.map(this.renderWeather) }
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  // Whatever is return will show up as props
  return {
    weather,
  };
}

// anything return from this function will end up as props on the BookList container
// function mapDispatchToProps(dispatch) {
//   // Whenever select books is called, pass result to all reducers
//   return bindActionCreators({ selectBook }, dispatch);
// }

// Promote booklist from Component to container
// know about this new dispatch method, selectBook. make it available as a prop
//  mapDispatchToProps
export default connect(mapStateToProps)(WeatherList);
