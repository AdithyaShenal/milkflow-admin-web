import React, { useMemo, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet"; // Need L for L.latLng()
import RoutingMachine from "../components/RoutingMachine"; // Import your new component
import MyLocationTracker from "../components/MyLocationTracker";

// IMPORTANT: Ensure you import the CSS for the routing machine
// in your main application file (e.g., App.tsx or main.tsx)
// import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';

const MapComponent: React.FC = () => {
  // Define your 50 waypoints here. Use L.latLng(lat, lng)

  // 🔥 Store live GPS location
  const [myPos, setMyPos] = useState<[number, number] | null>(null);

  const routeWaypoints = useMemo(
    () => [
      L.latLng(7.019041, 79.969565),
      L.latLng(7.019051, 79.969584),
      L.latLng(7.004634, 79.956204),
      L.latLng(7.005097, 79.954286),
      L.latLng(7.028246, 79.922662),
      L.latLng(7.034945, 79.990693),
      //   L.latLng(7.031326, 79.996603),
      //   L.latLng(7.041002, 79.992584),
      //   L.latLng(7.034195, 79.962993),
      //   L.latLng(7.016333, 79.938373),
      //   L.latLng(7.004579, 79.970142),
      //   L.latLng(7.031797, 79.959863),
      //   L.latLng(7.02823, 79.945192),
      //   L.latLng(7.02103, 79.935151),
      //   L.latLng(7.047934, 79.968688),
    ],
    []
  );

  // Use the first waypoint for the map center
  const initialCenter: [number, number] =
    routeWaypoints.length > 0
      ? [routeWaypoints[0].lat, routeWaypoints[0].lng]
      : [51.505, -0.09];

  return (
    <>
      <div>Here is the map with the route</div>
      <div className="h-screen">
        <MapContainer
          className="h-full rounded-2xl border"
          center={initialCenter}
          zoom={25}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
            // This is the correct Mapbox URL template for Leaflet TileLayer
            url={
              "https://api.mapbox.com/styles/v1/mapbox/streets-v12/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWRpdGh5YXNoZW5hbCIsImEiOiJjbWlrazQ0aTQwZDdtM2VzZGJrcXA0d3ZnIn0.lI5omaXW6lzbln2Vpb3ubA"
            }
          />

          <RoutingMachine
            waypoints={routeWaypoints}
            // Add a key to force re-render if waypoints change dynamically
            key={routeWaypoints.length}
          />

          <MyLocationTracker position={myPos} setPosition={setMyPos} />

          <Marker position={initialCenter}>
            <Popup>Start of the 50-waypoint route.</Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  );
};

export default MapComponent;
