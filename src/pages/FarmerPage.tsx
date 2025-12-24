import { useState } from "react";
import FarmerTable from "../components/farmers/FarmerTable";
import AddFarmerModal from "../components/farmers/AddFarmerModal";
import EditFarmerModal from "../components/farmers/EditFarmerModal";
import DeleteFarmerModal from "../components/farmers/DeleteFarmerModal";

export type Farmer = {
  id: number;
  name: string;
  nic: string;
  contact: string;
  farmType: string;
  capacity: string;
  location: string;
};

const initialFarmers: Farmer[] = [
  {
    id: 1,
    name: "Sunil Perera",
    nic: "892345678V",
    contact: "+94 71 234 5678",
    farmType: "Dairy Farm",
    capacity: "125L/day",
    location: "123 Main Road, Colombo",
  },
  {
    id: 2,
    name: "Kamala Silva",
    nic: "912345678V",
    contact: "+94 77 987 6543",
    farmType: "Organic Dairy",
    capacity: "98L/day",
    location: "45 Temple Road, Kandy",
  },
];

export default function FarmerPage() {
  const [search, setSearch] = useState("");
  const [farmType, setFarmType] = useState("");
  const [farmers, setFarmers] = useState<Farmer[]>(initialFarmers);
  const [showModal, setShowModal] = useState(false);
  const [editingFarmer, setEditingFarmer] = useState<Farmer | null>(null);
  const [deletingFarmer, setDeletingFarmer] = useState<Farmer | null>(null);

  const handleAddFarmer = (data: Omit<Farmer, "id">) => {
    setFarmers((prev) => [...prev, { id: prev.length + 1, ...data }]);
  };

  const handleUpdateFarmer = (updated: Farmer) => {
    setFarmers((prev) => prev.map((f) => (f.id === updated.id ? updated : f)));
  };

  const handleDeleteFarmer = () => {
    if (!deletingFarmer) return;
    setFarmers((prev) => prev.filter((f) => f.id !== deletingFarmer.id));
    setDeletingFarmer(null);
  };

  return (
    <div className="p-7 w-full">
      <h1 className="text-2xl font-semibold">Farmer Management</h1>
      <p className="text-gray-500 text-sm mb-6">
        Manage farmer profiles and information
      </p>

      <div className="flex flex-wrap items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name or NIC..."
          className="input input-bordered w-full max-w-md"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="select select-bordered w-52"
          value={farmType}
          onChange={(e) => setFarmType(e.target.value)}
        >
          <option value="">Filter by farm type</option>
          <option value="Dairy Farm">Dairy Farm</option>
          <option value="Organic Dairy">Organic Dairy</option>
          <option value="Mixed Farm">Mixed Farm</option>
        </select>

        <button
          className="btn btn-primary ml-auto"
          onClick={() => setShowModal(true)}
        >
          + Add Farmer
        </button>
      </div>

      <FarmerTable
        farmers={farmers}
        search={search}
        farmType={farmType}
        onEdit={(f) => setEditingFarmer(f)}
        onDelete={(f) => setDeletingFarmer(f)}
      />

      <AddFarmerModal
        open={showModal}
        onClose={() => setShowModal(false)}
        onSave={handleAddFarmer}
      />

      <EditFarmerModal
        open={!!editingFarmer}
        farmer={editingFarmer}
        onClose={() => setEditingFarmer(null)}
        onUpdate={handleUpdateFarmer}
      />

      <DeleteFarmerModal
        open={!!deletingFarmer}
        farmerName={deletingFarmer?.name}
        onClose={() => setDeletingFarmer(null)}
        onConfirm={handleDeleteFarmer}
      />
    </div>
  );
}
