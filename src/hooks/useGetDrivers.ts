import { useQuery } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import axios from "axios";
import type { APIError } from "./useGetProductions";

export interface Driver {
  _id: string;
  name: string;
  phone?: string;
  status: "available" | "unavailable" | "onDuty";
  driver_license_no: string;
  shortName: string;
  pinNo: string;
}

interface QueryParams {
  search: string;
  filterBy: string;
  status: string;
}

const useGetDrivers = (filters: QueryParams) => {
  return useQuery<Driver[], AxiosError<APIError>>({
    queryKey: ["drivers", { ...filters }],
    queryFn: () =>
      axios
        .get("http://localhost:4000/api/driver", {
          params: filters,
        })
        .then((res) => res.data),
    enabled: !!filters,
  });
};

export default useGetDrivers;
