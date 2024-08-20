import React, { useState } from "react";
import axios from "axios";

// Function to extract the first part of the place name before the comma
const extractFirstName = (placeName) => {
  const parts = placeName.split(",");
  return parts[0].trim();
};

function LocationSelector({ pickupLocation, dropLocation, setPickupLocation, setDropLocation, handleSearchTravelers }) {
  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  const [dropSuggestions, setDropSuggestions] = useState([]);

  // Function to fetch suggestions from LocationIQ API
  const fetchSuggestions = async (input, setSuggestions) => {
    if (!input) {
      setSuggestions([]);
      return;
    }

    try {
      const response = await axios.get(
        `https://us1.locationiq.com/v1/autocomplete.php`, {
          params: {
            key: 'pk.5913763f87224a140c5589fad77df8be', // Replace with your actual API key
            q: input,
            format: 'json'
          }
        }
      );

      if (response.data) {
        setSuggestions(response.data.map((place) => place.display_name));
      }
    } catch (error) {
      console.error("Error fetching location suggestions:", error);
    }
  };

  const handlePickupChange = (e) => {
    const input = e.target.value;
    setPickupLocation(input);
    fetchSuggestions(input, setPickupSuggestions);
  };

  const handleDropChange = (e) => {
    const input = e.target.value;
    setDropLocation(input);
    fetchSuggestions(input, setDropSuggestions);
  };

  // Handle suggestion click by setting only the first part of the place name
  const handleSuggestionClick = (suggestion, setLocation, setSuggestions) => {
    const firstName = extractFirstName(suggestion);
    setLocation(firstName);
    setSuggestions([]);
  };

  return (
    <div className="location-selector">
      <h2>Select Pickup and Drop Locations</h2>
      
      {/* Pickup Location Input */}
      <input
        type="text"
        placeholder="Pickup Location"
        value={pickupLocation}
        onChange={handlePickupChange}
      />
      {pickupSuggestions.length > 0 && (
        <ul className="suggestions-list">
          {pickupSuggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion, setPickupLocation, setPickupSuggestions)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
      
      {/* Drop Location Input */}
      <input
        type="text"
        placeholder="Drop Location"
        value={dropLocation}
        onChange={handleDropChange}
      />
      {dropSuggestions.length > 0 && (
        <ul className="suggestions-list">
          {dropSuggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion, setDropLocation, setDropSuggestions)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
      
      {/* Search Travelers Button */}
      <button onClick={handleSearchTravelers}>Search Travelers</button>
    </div>
  );
}

export default LocationSelector;
