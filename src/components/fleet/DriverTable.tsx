import { Edit3, Trash2 } from "lucide-react";

export type Driver = {
  id: string;
  name: string;
  username: string;
  truck: string;
  status: "Active" | "Inactive";
  availability: "Set Active" | "Set Inactive" | "On Route";
};
