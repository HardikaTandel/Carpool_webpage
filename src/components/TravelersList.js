import React from "react";

function TravelersList({ travelers, setSelectedTraveler }) {
  return (
    <div className="travelers-list">
      <h2>Available Travelers</h2>
      {travelers.length > 0 ? (
        travelers.map((traveler) => (
          <div key={traveler.id} className="traveler" onClick={() => setSelectedTraveler(traveler)}>
            <p><strong>Name:</strong> {traveler.name}</p>
            <p><strong>Pickup:</strong> {traveler.pickup}</p>
            <p><strong>Drop:</strong> {traveler.drop}</p>
            <p><strong>Time:</strong> {traveler.time}</p>
          </div>
        ))
      ) : (
        <p>No travelers found.</p>
      )}
    </div>
  );
}

export default TravelersList;
