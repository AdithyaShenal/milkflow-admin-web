import { MapPin, Edit3, Trash2 } from "lucide-react";
import type { Farmer } from "../../pages/FarmerPage";

interface FarmerTableProps {
  farmers: Farmer[];
  search: string;
  farmType: string;
  onEdit: (farmer: Farmer) => void;
  onDelete: (farmer: Farmer) => void;
}

export default function FarmerTable({
  farmers,
  search,
  farmType,
  onEdit,
  onDelete,
}: FarmerTableProps) {
  const filtered = farmers
    .filter(
      (f) =>
        f.name.toLowerCase().includes(search.toLowerCase()) ||
        f.nic.includes(search)
    )
    .filter((f) => (farmType ? f.farmType === farmType : true));

  return (
    <div className="overflow-x-auto rounded-xl shadow-md bg-base-100 p-2">
      <table className="table table-zebra w-full">
        <thead className="bg-base-200">
          <tr className="text-base font-semibold">
            <th>Full Name</th>
            <th>NIC</th>
            <th>Contact</th>
            <th>Farm Type</th>
            <th>Capacity</th>
            <th>Location</th>
            <th className="text-right pr-5">Actions</th>
          </tr>
        </thead>

        <tbody>
          {filtered.map((f) => (
            <tr key={f.id} className="hover">
              <td className="font-semibold">{f.name}</td>
              <td>{f.nic}</td>
              <td>{f.contact}</td>
              <td>{f.farmType}</td>
              <td>{f.capacity}</td>

              <td className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                {f.location}
              </td>

              <td>
                <div className="flex justify-end gap-3">
                  {/* EDIT */}
                  <button
                    className="btn btn-ghost btn-sm text-primary"
                    onClick={() => onEdit(f)}
                  >
                    <Edit3 size={18} />
                  </button>

                  {/* DELETE */}
                  <button
                    className="btn btn-ghost btn-sm text-error"
                    onClick={() => onDelete(f)}
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {filtered.length === 0 && (
        <div className="text-center text-gray-500 py-6 text-sm">
          No farmers found.
        </div>
      )}
    </div>
  );
}
