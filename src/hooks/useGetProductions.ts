import { useQuery } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import axios from "axios";

export interface FarmerProps {
  _id: string;
  name: string;
  phone: string;
  location: {
    lat: number;
    lon: number;
  };
  address: string;
  route: number;
}

interface QualityProps {
  fat: number;
  lat: number;
  density: number;
  water_ratio: number;
}

export interface ProductionProps {
  _id: string;
  farmer: FarmerProps;
  volume: number;
  registration_time: string;
  failure_reason: string;
  status: string;
  collectedVolume: number;
  blocked: boolean;
  quality: QualityProps;
}

export interface APIError {
  message: string;
  details: string | null;
  status: number;
  code: string;
}

interface QueryParams {
  search: string;
  filterBy: string;
  date: string;
  status: string;
}

const useGetProductions = (filters: QueryParams) => {
  return useQuery<ProductionProps[], AxiosError<APIError>>({
    queryKey: ["productions", { ...filters }],
    queryFn: () =>
      axios
        .get("http://localhost:4000/api/production", {
          params: filters,
        })
        .then((res) => res.data),
    enabled: !!filters,
  });
};

export default useGetProductions;
