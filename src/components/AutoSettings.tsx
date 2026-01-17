const defaultValues = {
  search: "",
  filterBy: "",
  status: "all",
};

import { Plus } from "lucide-react";
import useGetTrucks from "../hooks/useGetTrucks";

const AutoSettings = () => {
  const { data } = useGetTrucks(defaultValues);

  const statusHandler = (status: string) => {
    let bg: string = "";
    let text: string = "";

    switch (status) {
      case "available":
        bg = "bg-emerald-300";
        text = "Available";
        break;
      case "unavailable":
        bg = "bg-rose-300";
        text = "Unavailable";
        break;
      case "inService":
        bg = "bg-blue-300";
        text = "In Service";
        break;
    }

    return (
      <div
        className={`${bg} font-semibold p-1 flex justify-center items-center rounded-sm`}
      >
        {text}
      </div>
    );
  };

  return (
    <>
      <div className="flex flex-col gap-4">
        <div>
          <p className="text-lg text-gray-600 font-semibold">
            Auto Optimize Settings
          </p>
        </div>
        <div className="overflow-x-auto h-auto w-auto border border-slate-300 rounded-sm">
          <table className="table table-md table-pin-rows table-pin-cols">
            <thead>
              <tr>
                <td>ID</td>
                <td>Model</td>
                <td>License No</td>
                <td>Route</td>
                <td>Status</td>
                <td>Capacity</td>
                <td></td>
              </tr>
            </thead>
            <tbody className="overflow-y-scroll">
              {data?.map((truck) => (
                <tr
                  key={truck._id}
                  className="hover:bg-base-200 cursor-pointer"
                >
                  <td>{truck._id}</td>
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

        <div className="border p-4 rounded-sm">
          <div className="flex justify-between items-center my-2">
            <p className="text-sm text-gray-600">Add Next Job</p>
            <button className="btn btn-neutral btn-sm">
              <Plus size={10} /> Add
            </button>
          </div>

          <div className="overflow-x-auto h-auto w-auto border border-slate-300 rounded-sm">
            <table className="table table-md table-pin-rows table-pin-cols">
              <thead>
                <tr>
                  <td>ID</td>
                  <td>Model</td>
                  <td>License No</td>
                  <td>Route</td>
                  <td>Status</td>
                  <td>Capacity</td>
                  <td></td>
                </tr>
              </thead>
              <tbody className="overflow-y-scroll"></tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default AutoSettings;
