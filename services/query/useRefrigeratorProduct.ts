import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createRefrigeratorProduct,
  deleteRefrigeratorProduct,
  getRefrigeratorProducts,
  RefreigeratorRequest,
  retrieveRefrigeratorStatistics,
} from "../api/refrigeratorProductApi";

export const useGetRefrigeratorProducts = (param: RefreigeratorRequest) => {
  return useQuery({
    queryKey: ["getRefrigeratorProducts"],
    queryFn: () => getRefrigeratorProducts(param),
  });
};

export const useCreateRefrigeratorProduct = () => {
  return useMutation({
    mutationFn: createRefrigeratorProduct,

    onSuccess: (data) => {
      console.log("등록 성공", data);
    },

    onError: (error) => {
      console.error("등록 실패", error);
    },
  });
};

export const useDeleteRefrigeratorProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteRefrigeratorProduct,

    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["getRefrigeratorProducts"] });
      console.log("삭제 성공", data);
    },

    onError: (error) => {
      console.error("삭제 실패", error);
    },
  });
};

export const useRetrieveRefrigeratorStatistics = () => {
  return useQuery({
    queryKey: ["retrieveRefrigeratorStatistics"],
    queryFn: retrieveRefrigeratorStatistics,
  });
};
