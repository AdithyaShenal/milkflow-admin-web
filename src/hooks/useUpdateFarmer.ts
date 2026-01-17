import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../services/apiClient";
import type { APIError, FarmerProps } from "./useGetProductions";
import type { AxiosError } from "axios";
import toast from "react-hot-toast";

export interface UpdateFarmerProps {
  _id: string;
  name: string;
  address: string;
  phone: string;
  route: number;
}

interface Props {
  onSuccessClose: () => void;
}

const useUpdateFarmer = ({ onSuccessClose }: Props) => {
  const queryClient = useQueryClient();

  return useMutation<FarmerProps, AxiosError<APIError>, UpdateFarmerProps>({
    mutationFn: async (payload) => {
      const res = await api.put(`/farmer/${payload._id}`, {
        name: payload.name,
        address: payload.address,
        phone: payload.phone,
        route: payload.route,
      });
      return res.data;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["farmers"] });
      onSuccessClose();
      toast.success("Farmer updated successfully");
    },
  });
};

export default useUpdateFarmer;
