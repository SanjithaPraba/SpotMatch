"use client";

import React, { useState } from "react";

export default function SpotMatch() {
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [radius, setRadius] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `/api/search?description=${description}&location=${location}&radius=${radius}`
    );
    const data = await response.json();
    setResults(data.results.slice(0, 5));
  };

  return (
    <div className="min-h-screen bg-sky-50">
      <main className="container mx-auto py-8">
        <h1 className="text-4xl font-bold text-center text-sky-600 mb-8">
          SpotMatch
        </h1>

        {/* Search Card */}
        <div className="bg-white rounded shadow p-6 max-w-2xl mx-auto">
          <div className="mb-4">
            <h2 className="text-2xl text-sky-700">Find Your Perfect Spot</h2>
          </div>
          <form onSubmit={handleSearch} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Description (e.g., coffee shop, park)"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Location (e.g., New York, NY)"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="Radius (in miles)"
                value={radius}
                onChange={(e) => setRadius(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-sky-500 text-white p-2 rounded hover:bg-sky-600"
            >
              Search
            </button>
          </form>
        </div>

        {/* Results Card */}
        {results.length > 0 && (
          <div className="bg-white rounded shadow p-6 max-w-2xl mx-auto mt-8">
            <div className="mb-4">
              <h2 className="text-2xl text-sky-700">Top 5 Matches</h2>
            </div>
            <ul className="space-y-4">
              {results.map((result, index) => (
                <li key={index} className="flex items-start space-x-4">
                  <div className="mt-1 text-sky-500">
                    {/* Simple map pin icon using an emoji */}
                    📍
                  </div>
                  <div>
                    <h3 className="font-semibold text-sky-700">
                      {result.name}
                    </h3>
                    <p className="text-sm text-gray-600">{result.vicinity}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </main>
    </div>
  );
}