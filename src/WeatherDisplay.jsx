import React from "react";

function WeatherDisplay({ weather }) {
  const tempStyle = {
    color: weather.temperature > 20 ? "rgb(255, 0, 0)" : "rgb(0, 0, 255)",
  };

  return (
    <div>
      <p>
        Temperature: <span style={tempStyle}>{weather.temperature}</span>
      </p>
      <p>Conditions: {weather.conditions}</p>
    </div>
  );
}

export default WeatherDisplay;