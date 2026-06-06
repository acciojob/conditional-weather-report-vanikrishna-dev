import React, { useState } from "react";
import WeatherDisplay from "../WeatherDisplay";
import './../styles/App.css';

const App = () => {
  const [weather] = useState({ temperature: 25, conditions: "Sunny" });
  return (
    <div>
        <WeatherDisplay weather={weather} />
    </div>
  )
}

export default App
