import L, { LatLng, type ControlOptions } from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";

interface RoutingMachineProps extends ControlOptions {
  waypoints: LatLng[];
}

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiYWRpdGh5YXNoZW5hbCIsImEiOiJjbWlrbHRtY3QxOTJ6M2VxeGE3cmkzZzJ2In0.G6srdBSi0ewZCX79ojBoeQ";

const createRoutineMachineLayer = (props: RoutingMachineProps) => {
  const { waypoints } = props;

  // Use Mapbox Directions API via OSRM-compatible URL
  const instance = L.Routing.control({
    waypoints: waypoints,
    lineOptions: {
      styles: [{ color: "#2746F5", weight: 8 }],
    },
    show: false,
    addWaypoints: false,
    routeWhileDragging: true,
    draggableWaypoints: false,
    fitSelectedRoutes: true,
    showAlternatives: true,
    collapsible: true,

    router: L.Routing.mapbox(MAPBOX_TOKEN, {
      profile: "mapbox/driving", // must include "mapbox/"
    }),
  });

  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
