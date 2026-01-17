import { useQuery } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import axios from "axios";
import type { APIError } from "./useGetProductions";

export interface Truck {
  _id: string;
  license_no: string;
  capacity?: number;
  status: "available" | "unavailable" | "inService";
  model: string;
  distance_travelled?: number;
  route?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

interface QueryParams {
  search: string;
  filterBy: string;
  status: string;
}

const useGetTrucks = (filters: QueryParams) => {
  return useQuery<Truck[], AxiosError<APIError>>({
    queryKey: ["trucks", { ...filters }],
    queryFn: () =>
      axios
        .get("http://localhost:4000/api/trucks", {
          params: filters,
        })
        .then((res) => res.data),
    enabled: !!filters,
  });
};

export default useGetTrucks;
