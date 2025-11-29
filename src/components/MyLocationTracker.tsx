import { useEffect } from "react";
import { useMap, Marker } from "react-leaflet";
import L from "leaflet";

const userIcon = L.icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/535/535239.png",
  iconSize: [35, 35],
});

interface Props {
  setPosition: (pos: [number, number]) => void;
  position: [number, number] | null;
}

export default function MyLocationTracker({ position, setPosition }: Props) {
  const map = useMap();

  useEffect(() => {
    if (!navigator.geolocation) {
      console.error("Geolocation not supported");
      return;
    }

    const watchId = navigator.geolocation.watchPosition(
      (pos) => {
        console.log(
          "GPS:",
          pos.coords.latitude,
          pos.coords.longitude,
          "accuracy:",
          pos.coords.accuracy
        );

        const coords: [number, number] = [
          pos.coords.latitude,
          pos.coords.longitude,
        ];

        setPosition(coords);

        // Center the map on the new position (like Google Maps)
        map.setView(coords, map.getZoom());
      },
      (err) => console.error("GPS error:", err),
      { enableHighAccuracy: true }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, [map]);

  return position ? <Marker position={position} icon={userIcon} /> : null;
}
