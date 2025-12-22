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
