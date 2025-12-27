import { useState } from "react";
import { Search } from "lucide-react";
import DriverTable, { type Driver } from "../components/fleet/DriverTable";
const initialDrivers: Driver[] = [
  {
    id: "D001",
    name: "Lakshan Perera",
    username: "lperera",
    truck: "WP CAB-1234",
    status: "Active",
    availability: "Set Inactive",
  },
  {
    id: "D002",
    name: "Dinesh Silva",
    username: "dsilva",
    truck: "WP CAC-5678",
    status: "Active",
    availability: "On Route",
  },
  {
    id: "D003",
    name: "Rohan Fernando",
    username: "rfernando",
    truck: "WP CAD-9012",
    status: "Inactive",
    availability: "Set Active",
  },
];

const FleetPage = () => {
  const [activeTab, setActiveTab] = useState<"Trucks" | "Drivers">("Drivers");
  const [search, setSearch] = useState("");
  const [truck, setTruck] = useState("");
  const [status, setStatus] = useState("");
  const [drivers] = useState<Driver[]>(initialDrivers);

  const filteredDrivers = drivers.filter((d) => {
    const matchName = search
      ? d.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      : true;
    const matchStatus = status ? d.status === status : true;
    const matchTruck = truck
      ? d.truck.toLocaleLowerCase().includes(truck.toLocaleLowerCase())
      : true;
    return matchName && matchStatus && matchTruck;
  });

  return (
    <div className="p-7 w-full">
      <h1 className="text-2xl font-semibold">Fleet Management</h1>
      <p className="text-gray-500 text-sm mb-4">
        Manage your trucks and drivers
      </p>
      <div className="tabs tabs-boxed w-fit mb-6">
        <button
          className={`tab ${activeTab === "Trucks" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("Trucks")}
        >
          Trucks
        </button>
        <button
          className={`tab ${activeTab === "Drivers" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("Drivers")}
        >
          Drivers
        </button>
      </div>
      <div className="bg-base-100 rounded-xl shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Drivers</h2>
          <button className="btn btn-primary">+Add Driver</button>
        </div>
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <div className="relative w-full max-w-xl">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 z-10 pointer-events-none"
            />
            <input
              type="text"
              placeholder="Search by driver name..."
              className="input input-bordered w-full pl-9"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <select
            className="select select-bordered w-44"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>

          <input
            type="text"
            placeholder="Truck No..."
            className="input input-bordered w-44"
            value={truck}
            onChange={(e) => setTruck(e.target.value)}
          />
        </div>

        <div className="text-gray-400 text-sm">
          <DriverTable
            drivers={filteredDrivers}
            onEdit={(d) => console.log("Edit", d)}
            onDelete={(d) => console.log("Delete", d)}
          />
        </div>
      </div>
    </div>
  );
};

export default FleetPage;
