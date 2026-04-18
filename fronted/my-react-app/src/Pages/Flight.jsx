import React from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Flight = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [flightData, setFlightData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");

    axios
      .get(`https://aerotracker-website.onrender.com/api/flight/${id}`)
      .then((res) => {
        setFlightData(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Flight not found");
        setLoading(false);
      });
  }, [id]);


return (
  <div className="min-h-screen flex items-center justify-center bg-gray-100">

    <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md text-center">

      <button
        onClick={() => navigate("/")}
        className="text-blue-500 mb-3"
      >
        ← Back
      </button>

      <h2 className="text-2xl font-bold mb-4">Flight Details</h2>

      {loading && <p>Loading...</p>}

      {error && <p className="text-red-500">{error}</p>}

      {flightData && !loading && (
        <div className="space-y-2">
          <p><b>Flight:</b> {flightData.flight}</p>
          <p><b>From:</b> {flightData.from}</p>
          <p><b>To:</b> {flightData.to}</p>
          <p><b>Status:</b> {flightData.status}</p>
        </div>
      )}

    </div>

  </div>
)


}

export default Flight
