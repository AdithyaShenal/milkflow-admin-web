import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import RoutingPage from "../pages/RoutingPage";
import ProductionPage from "../pages/ProductionPage";
import FleetPage from "../pages/FleetPage";
import FarmerPage from "../pages/FarmerPage";
import ConfigPage from "../pages/ConfigPage";
import RouteControlPage from "../pages/RouteControlPage";
import HomePage from "../pages/HomePage";
import RouteHistoryPage from "../pages/RouteHistoryPage";
import DriverManagement from "../components/DriverManagement";
import TruckManagement from "../components/TruckManagement";
import OptimizeSettings from "../pages/OptimizeSettings";
import AutoSettings from "../components/AutoSettings";
import RouteWiseSettings from "../components/RouteWiseSettings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "routing", element: <RoutingPage /> },
      { path: "production", element: <ProductionPage /> },
      {
        path: "fleet",
        element: <FleetPage />,
        children: [
          {
            index: true,
            element: <DriverManagement />,
          },
          {
            path: "trucks",
            element: <TruckManagement />,
          },
        ],
      },
      {
        path: "optimizeSettings",
        element: <OptimizeSettings />,
        children: [
          {
            index: true,
            path: "autoSettings",
            element: <AutoSettings />,
          },
          {
            path: "routeWiseSettings",
            element: <RouteWiseSettings />,
          },
        ],
      },
      { path: "farmer", element: <FarmerPage /> },
      { path: "config", element: <ConfigPage /> },
      { path: "route_control", element: <RouteControlPage /> },
      { path: "route_history", element: <RouteHistoryPage /> },
    ],
  },
]);

export default router;
