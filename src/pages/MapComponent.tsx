import { useMemo } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import L from "leaflet";
import RoutingMachine from "../components/RoutingMachine";
import type { Route } from "./RoutingPage";

interface Props {
  route?: Route;
}

const MapComponent = ({ route }: Props) => {
  const routeWaypoints = useMemo(() => {
    if (!route || !route.stops) return [];

    const depotLocation = route.stops[0].production
      ? route.stops[0].production.farmer.location
      : { lat: 5.959464, lon: 80.545205 };
    // { lat: 7.019041, lon: 79.969565 };

    return route.stops.map((stop) => {
      if (!stop.production) {
        return L.latLng(depotLocation.lat, depotLocation.lon);
      }

      const loc = stop.production.farmer.location;
      return L.latLng(loc.lat, loc.lon);
    });
  }, [route]);

  const initialCenter: [number, number] =
    routeWaypoints.length > 0
      ? [routeWaypoints[0].lat, routeWaypoints[0].lng]
      : [7.019041, 79.969565];

  return (
    <>
      <div className="h-full w-full ">
        <MapContainer
          key={JSON.stringify(routeWaypoints)}
          className="h-full rounded-xs border border-gray-300"
          center={initialCenter}
          zoom={10}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution="© Mapbox"
            url={
              "https://api.mapbox.com/styles/v1/mapbox/streets-v12/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWRpdGh5YXNoZW5hbCIsImEiOiJjbWlrazQ0aTQwZDdtM2VzZGJrcXA0d3ZnIn0.lI5omaXW6lzbln2Vpb3ubA"
            }
          />

          <RoutingMachine
            waypoints={routeWaypoints}
            key={JSON.stringify(routeWaypoints)}
          />
        </MapContainer>
      </div>
    </>
  );
};

export default MapComponent;
