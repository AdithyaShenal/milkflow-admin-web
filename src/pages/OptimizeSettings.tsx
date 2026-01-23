import { Link, Outlet } from "react-router-dom";
import useGetTrucks from "../hooks/useGetTrucks";

const defaultValues = {
  search: "",
  filterBy: "",
  status: "all",
};

const OptimizeSettings = () => {
  const { data } = useGetTrucks(defaultValues);

  const statusHandler = (status: string) => {
    if (status === "available")
      return <div className="badge badge-primary">Available</div>;
    if (status === "unavailable")
      return <div className="badge badge-error">Unavailable</div>;
    if (status === "inService")
      return <div className="badge badge-primary">In Service</div>;
  };

  return (
    <>
      <div>
        <div className="breadcrumbs text-sm">
          <ul>
            <li>
              <Link to=".">Auto Resolve</Link>
            </li>
            <li>
              <Link to="routeWiseSettings">Route-Wise Resolve</Link>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            <div>
              <p className="font-semibold text-sm">Trucks Information</p>
            </div>
            <div className="overflow-x-auto h-auto w-auto border border-slate-300 rounded-sm mt-3">
              <table className="table table-md table-pin-rows table-pin-cols">
                <thead>
                  <tr>
                    <td>Model</td>
                    <td>License No</td>
                    <td>Route</td>
                    <td>Status</td>
                    <td>Capacity</td>
                  </tr>
                </thead>
                <tbody className="overflow-y-scroll">
                  {data?.map((truck) => (
                    <tr
                      key={truck._id}
                      className="hover:bg-base-200 cursor-pointer"
                    >
                      <td>{truck.model}</td>
                      <td>{truck.license_no}</td>
                      <td>{truck.route}</td>
                      <td>{statusHandler(truck.status)}</td>
                      <td>{truck.capacity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default OptimizeSettings;
