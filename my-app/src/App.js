import React, { useState } from "react";

function App() {
  // State for user inputs
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [radius, setRadius] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // Placeholder function for backend API call
  const handleSearch = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulating a backend response (Replace with actual API call)
    setTimeout(() => {
      setResults([
        { name: "Cafe Delight", address: "123 Main St", rating: 4.5 },
        { name: "Cozy Bookstore", address: "456 Elm St", rating: 4.8 },
        { name: "Quiet Library", address: "789 Oak Ave", rating: 4.2 },
        { name: "Sunny Park", address: "101 Pine Rd", rating: 4.9 },
        { name: "Jazz Lounge", address: "202 Maple St", rating: 4.7 },
      ]);
      setLoading(false);
    }, 1500); // Simulated delay
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Spot Search!</h1>

      {/* Search Form */}
      <form onSubmit={handleSearch} style={styles.form}>
        <input
          type="text"
          placeholder="Describe what you're looking for..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Enter location..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="Radius (miles)..."
          value={radius}
          onChange={(e) => setRadius(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      {/* Search Results */}
      {results.length > 0 && (
        <div style={styles.resultsContainer}>
          <h2 style={styles.resultsHeading}>Results</h2>
          <div style={styles.scrollableResults}>
            {results.map((result, index) => (
              <div key={index} style={styles.resultItem}>
                <h3 style={styles.resultTitle}>{result.name}</h3>
                <p style={styles.resultText}>{result.address}</p>
                <p style={styles.resultRating}>⭐ {result.rating}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// Inline CSS styles
const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#f4f4f4",
    minHeight: "100vh",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    width: "300px",
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  button: {
    width: "320px",
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  resultsContainer: {
    marginTop: "20px",
    padding: "10px",
    backgroundColor: "white",
    borderRadius: "5px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    maxWidth: "400px",
    margin: "auto",
  },
  resultsHeading: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  scrollableResults: {
    maxHeight: "200px",
    overflowY: "auto",
    padding: "10px",
  },
  resultItem: {
    borderBottom: "1px solid #ddd",
    padding: "10px 0",
  },
  resultTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    margin: "0",
  },
  resultText: {
    fontSize: "14px",
    color: "#555",
  },
  resultRating: {
    fontSize: "14px",
    color: "#007BFF",
  },
};

export default App;
