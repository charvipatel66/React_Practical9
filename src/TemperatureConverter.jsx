import React, { useState } from "react";

function TemperatureConverter() {
  const [temperature, setTemperature] = useState("");
  const [unit, setUnit] = useState("C");
  const [result, setResult] = useState("");

  const convertTemperature = () => {
    if (temperature === "") {
      setResult("Please enter a temperature.");
      return;
    }

    const value = Number(temperature);

    if (unit === "C") {
      const fahrenheit = (value * 9) / 5 + 32;
      setResult(`${value}°C = ${fahrenheit.toFixed(2)}°F`);
    } else {
      const celsius = ((value - 32) * 5) / 9;
      setResult(`${value}°F = ${celsius.toFixed(2)}°C`);
    }
  };

  const clearConverter = () => {
    setTemperature("");
    setUnit("C");
    setResult("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 flex items-center justify-center p-6">

      {/* Main Card */}
      <div className="w-full max-w-md rounded-3xl bg-white/20 backdrop-blur-xl border border-white/30 p-8 shadow-2xl">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-white/30 shadow-lg">
            <span className="text-5xl">🌡️</span>
          </div>

          <h1 className="text-4xl font-extrabold text-white">
            Temperature
          </h1>

          <p className="mt-2 text-white/80">
            Convert Celsius and Fahrenheit
          </p>
        </div>

        {/* Temperature Input */}
        <label className="mb-2 block font-semibold text-white">
          Enter Temperature
        </label>

        <input
          type="number"
          value={temperature}
          onChange={(e) => setTemperature(e.target.value)}
          placeholder="Enter temperature"
          className="mb-5 w-full rounded-xl border border-white/30 bg-white/20 p-4 text-lg text-white placeholder-white/60 outline-none transition focus:bg-white/30 focus:ring-2 focus:ring-white"
        />

        {/* Unit Selection */}
        <label className="mb-2 block font-semibold text-white">
          Select Unit
        </label>

        <select
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
          className="mb-6 w-full rounded-xl border border-white/30 bg-white p-4 text-gray-800 outline-none focus:ring-2 focus:ring-white"
        >
          <option value="C">Celsius (°C)</option>
          <option value="F">Fahrenheit (°F)</option>
        </select>

        {/* Buttons */}
        <div className="flex gap-4">

          <button
            onClick={convertTemperature}
            className="flex-1 rounded-xl bg-white px-5 py-3 font-bold text-purple-600 shadow-lg transition duration-300 hover:scale-105 hover:bg-purple-50"
          >
            Convert
          </button>

          <button
            onClick={clearConverter}
            className="flex-1 rounded-xl bg-black/30 px-5 py-3 font-bold text-white shadow-lg transition duration-300 hover:scale-105 hover:bg-black/40"
          >
            Clear
          </button>

        </div>

        {/* Result */}
        {result && (
          <div className="mt-7 rounded-2xl bg-white/90 p-5 text-center shadow-lg">
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
              Result
            </p>

            <p className="mt-2 text-3xl font-extrabold text-purple-600">
              {result}
            </p>
          </div>
        )}

      </div>
    </div>
  );
}

export default TemperatureConverter;