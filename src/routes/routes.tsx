import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import MapComponent from "../pages/MapComponent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, element: <MapComponent /> }],
  },
]);

export default router;
