import { MapPin } from "lucide-react";

export interface ProductionRequest {
  id: string;
  farmerName: string;
  volume: number;
  timeWindow: string;
  registeredAt: string;
  status: "Active" | "Blocked";
}

interface ProductionTableProps {
  requests: ProductionRequest[];
  onMap: (request: ProductionRequest) => void;
  onBlock: (request: ProductionRequest) => void;
}

const ProductionTable = ({
  requests,
  onMap,
  onBlock,
}: ProductionTableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr className="text-sm text-gray-500">
            <th>Farmer ID</th>
            <th>Farmer Name</th>
            <th>Volume (L)</th>
            <th>Time Window</th>
            <th>Registration Time</th>
            <th>Status</th>
            <th className="text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((r) => (
            <tr key={r.id} className="hover">
              <td>{r.id}</td>
              <td className="font-medium">{r.farmerName}</td>
              <td>{r.volume}</td>
              <td>{r.timeWindow}</td>
              <td>{r.registeredAt}</td>
              <td>
                <span className="text-success font-medium">{r.status}</span>
              </td>
              <td className="text-right space-x-2">
                <button
                  className="btn btn-sm btn-outline"
                  onClick={() => onMap(r)}
                >
                  <MapPin size={14} />
                  Map
                </button>

                <button
                  className="btn btn-sm btn-error"
                  onClick={() => onBlock(r)}
                >
                  Block
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductionTable;
