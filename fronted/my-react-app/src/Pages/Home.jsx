import React from 'react'


import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [flight, setFlight] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!flight) return;
    navigate(`/flight/${flight}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 text-center">
        Track Your Flight ✈️
      </h1>

      <p className="text-gray-500 mb-8 text-center max-w-lg">
        Enter your flight number and get real-time updates about departure,
        arrival, and status.
      </p>

      {/* Search Box */}
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md flex flex-col gap-4">

        <input
          type="text"
          placeholder="Enter Flight No (AI101)"
          value={flight}
          onChange={(e) => setFlight(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Search Flight
        </button>

      </div>

      {/* Extra Section */}
      <div className="mt-10 text-center text-gray-500">
        <p>Popular Flights:</p>
        <div className="flex gap-4 mt-2 justify-center">
          <button
            onClick={() => navigate("/flight/AI101")}
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
          >
            AI101
          </button>
          <button
            onClick={() => navigate("/flight/6E101")}
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
          >
            6E101
          </button>
          <button
            onClick={() => navigate("/flight/UK955")}
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
          >
            UK955
          </button>
        </div>
      </div>

    </div>
  );
}

export default Home;
