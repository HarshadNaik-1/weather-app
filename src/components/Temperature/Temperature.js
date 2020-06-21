import React, { Component } from "react";
import "./Temperature.css";
import TempValues from "./TempValues";

class Temperature extends Component {
  state = {
    maxTemp: 0,
    minTemp: 0,
  };
  render() {
    let { maxTemp, minTemp } = this.state;
    //enter the key here inside the quotation
    let apiKey = "";

    fetch(
      "http://api.openweathermap.org/data/2.5/weather?id=1275339&units=metric&limit=10&APPID=" +
        apiKey
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({ maxTemp: data.main.temp_max });
        // console.log(maxTemp);
        this.setState({ minTemp: data.main.temp_min });
        // console.log(minTemp);
      }, setInterval(100000));

    return <TempValues max={maxTemp} min={minTemp} />;
  }
}
export default Temperature;
