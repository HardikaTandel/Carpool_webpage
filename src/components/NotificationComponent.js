import React, { useState } from "react";

function NotificationComponent({ selectedTraveler }) {
  const [notification, setNotification] = useState("");

  const handleAccept = () => {
    setNotification(`Request to ${selectedTraveler.name} has been accepted!`);
  };

  const handleDecline = () => {
    setNotification(`Request to ${selectedTraveler.name} has been declined.`);
  };

  return (
    <div className="notification-component">
      <h2>Notifications</h2>
      {selectedTraveler ? (
        <div>
          <button onClick={handleAccept}>Accept</button>
          <button onClick={handleDecline}>Decline</button>
        </div>
      ) : (
        <p>Select a traveler to send a request.</p>
      )}
      {notification && <p className="notification">{notification}</p>}
    </div>
  );
}

export default NotificationComponent;
