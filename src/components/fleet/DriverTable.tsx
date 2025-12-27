import { Edit3, Trash2 } from "lucide-react";

export type Driver = {
  id: string;
  name: string;
  username: string;
  truck: string;
  status: "Active" | "Inactive";
  availability: "Set Active" | "Set Inactive" | "On Route";
};

interface DriverTableProps {
  drivers: Driver[];
  onEdit: (driver: Driver) => void;
  onDelete: (driver: Driver) => void;
}
export default function DriverTable({
  drivers,
  onEdit,
  onDelete,
}: DriverTableProps) {
  return (
    <div className="overflow-x-auto rounded-xl border">
      <table className="table w-full">
        <thead>
          <tr className="text-sm text-gray-500">
            <th>Name</th>
            <th>Username</th>
            <th>Assigned Truck</th>
            <th>Status</th>
            <th>Availability</th>
            <th className="text-right pr-6">Actions</th>
          </tr>
        </thead>
        <tbody>
          {drivers.map((d) => (
            <tr key={d.id} className="hover">
              <td className="font-medium">{d.name}</td>
              <td>{d.username}</td>
              <td>{d.truck}</td>
              <td>
                <span
                  className={`badge ${
                    d.status === "Active" ? "badge-primary" : "badge-ghost"
                  }`}
                >
                  {d.status}
                </span>
              </td>
              <td>
                <td>
                  <td className="text-center">
                    {d.availability === "Set Inactive" && (
                      <button className="btn btn-sm bg-blue-600 hover:bg-blue-700 text-white border-none">
                        Set Inactive
                      </button>
                    )}

                    {d.availability === "On Route" && (
                      <button className="btn btn-sm bg-blue-400 hover:bg-blue-500 text-white border-none">
                        On Route
                      </button>
                    )}

                    {d.availability === "Set Active" && (
                      <button className="btn btn-sm btn-outline">
                        Set Active
                      </button>
                    )}
                  </td>
                </td>
              </td>
              <td className="text-right pr-6">
                <div className="flex justify-end gap-3">
                  <button
                    className="gtn btn-ghost btn-sm text-primary"
                    onClick={() => onEdit(d)}
                  >
                    <Edit3 size={18} />
                  </button>
                  <button
                    className="btn btn-ghost btn-sm text-error"
                    onClick={() => onDelete(d)}
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {drivers.length === 0 && (
        <div className="text-center text-gray-500 py-6 text-sm">
          No drivers found.
        </div>
      )}
    </div>
  );
}
