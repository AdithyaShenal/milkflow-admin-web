import { use, useState } from "react";
import { Search } from "lucide-react";

const FleetPage = () => {
  const [activeTab, setActiveTab] = useState<"Trucks" | "Drivers">("Drivers");
  const [search, setSearch] = useState("");
  const [truck, setTruck] = useState("");
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
    </div>
  );
};

export default FleetPage;
