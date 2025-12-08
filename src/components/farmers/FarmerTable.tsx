import { MapPin, Edit3, Trash2 } from "lucide-react";

type Farmer = {
  id: number;
  name: string;
  nic: string;
  contact: string;
  farmType: string;
  capacity: string;
  location: string;
};

const farmerData: Farmer[] = [
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
  {
    id: 3,
    name: "Nimal Fernando",
    nic: "852345678V",
    contact: "+94 76 456 7890",
    farmType: "Mixed Farm",
    capacity: "156L/day",
    location: "78 Lake View, Galle",
  },
];

export default function FarmerTable({
  search,
  farmType,
}: {
  search: string;
  farmType: string;
}) {
  const filtered = farmerData
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
                  <button className="btn btn-ghost btn-sm text-primary">
                    <Edit3 size={18} />
                  </button>
                  <button className="btn btn-ghost btn-sm text-error">
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
