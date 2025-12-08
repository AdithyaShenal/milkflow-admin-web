import { useState } from "react";
import FarmerTable from "../components/farmers/FarmerTable"; // <-- create this file next

const FarmerPage = () => {
  const [search, setSearch] = useState("");
  const [farmType, setFarmType] = useState("");

  return (
    <div className="p-7 w-full">
      {/* Title & Description */}
      <h1 className="text-2xl font-semibold">Farmer Management</h1>
      <p className="text-gray-500 text-sm mb-6">
        Manage farmer profiles and information
      </p>

      {/* Search + Filter + Add Button */}
      <div className="flex items-center gap-5 mb-5">
        <input
          type="text"
          placeholder="Search by name or NIC..."
          className="border px-4 py-2 rounded-md w-250 focus:ring ring-blue-300 outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border px-4 py-2 rounded-md w-52"
          value={farmType}
          onChange={(e) => setFarmType(e.target.value)}
        >
          <option value="">Filter by farm type</option>
          <option value="Dairy Farm">Dairy Farm</option>
          <option value="Organic Dairy">Organic Dairy</option>
          <option value="Mixed Farm">Mixed Farm</option>
        </select>

        {/* Add Farmer button */}
        <button className="ml-auto bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500">
          + Add Farmer
        </button>
      </div>

      {/* Table Component */}
      <FarmerTable search={search} farmType={farmType} />
    </div>
  );
};

export default FarmerPage;
