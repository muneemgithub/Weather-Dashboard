// TemperatureToggle.js
import React from "react";

function TemperatureToggle({ onToggle, isCelsius }) {
  return (
    <button className="temperature-toggle" onClick={onToggle}>
      {isCelsius ? "فارن ہائیٹ میں دیکھیں" : "سیلسیس میں دیکھیں"}
    </button>
  );
}

export default TemperatureToggle;
