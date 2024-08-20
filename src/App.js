import React, { useState } from "react";
import LocationSelector from "./components/LocationSelector";
import TravelersList from "./components/TravelersList";
import RequestComponent from "./components/RequestComponent";
import NotificationComponent from "./components/NotificationComponent"; 
import "./App.css";

function App() {
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropLocation, setDropLocation] = useState("");
  const [travelers, setTravelers] = useState([]);
  const [selectedTraveler, setSelectedTraveler] = useState(null);

  const travelersData = [
    { id: 1, name: "Hardika Tandel", pickup: "Mumbai", drop: "Pune", time: "09:00 AM" },
    { id: 2, name: "Apurva Thakur", pickup: "Pune", drop: "Mumbai", time: "09:10 AM" },
    { id: 3, name: "Kratika Singh", pickup: "Katraj", drop: "Pune", time: "09:05 AM" },
  ];

  const handleSearchTravelers = () => {
    const filteredTravelers = travelersData.filter(
      (traveler) => traveler.pickup === pickupLocation && traveler.drop === dropLocation
    );
    setTravelers(filteredTravelers);
  };

  return (
    <div className="app-container">
      <h1>Carpool Webpage</h1>
      <LocationSelector
        pickupLocation={pickupLocation}
        dropLocation={dropLocation}
        setPickupLocation={setPickupLocation}
        setDropLocation={setDropLocation}
        handleSearchTravelers={handleSearchTravelers}
      />
      <TravelersList travelers={travelers} setSelectedTraveler={setSelectedTraveler} />
      <RequestComponent selectedTraveler={selectedTraveler} />
      <NotificationComponent selectedTraveler={selectedTraveler} /> {/* Add this line */}
    </div>
  );
}

export default App;
