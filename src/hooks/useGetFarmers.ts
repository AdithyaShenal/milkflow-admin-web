import { useQuery } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import axios from "axios";
import type { APIError, FarmerProps } from "./useGetProductions";

interface QueryParams {
  search: string;
  filterBy: string;
  route: string;
}

const useGetFarmers = (filters: QueryParams) => {
  return useQuery<FarmerProps[], AxiosError<APIError>>({
    queryKey: ["farmers", { ...filters }],
    queryFn: () =>
      axios
        .get("http://localhost:4000/api/farmer", {
          params: filters,
        })
        .then((res) => res.data),
    enabled: !!filters,
  });
};

export default useGetFarmers;
