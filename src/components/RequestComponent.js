import React from "react";

function RequestComponent({ selectedTraveler }) {
  const sendRequest = () => {
    if (selectedTraveler) {
      alert(`Request sent to ${selectedTraveler.name}`);
    }
  };

  return (
    <div className="request-component">
      <h2>Request Carpool</h2>
      {selectedTraveler ? (
        <div>
          <p>Request to {selectedTraveler.name}?</p>
          <button onClick={sendRequest}>Send Request</button>
        </div>
      ) : (
        <p>Select a traveler to send a request.</p>
      )}
    </div>
  );
}

export default RequestComponent;
