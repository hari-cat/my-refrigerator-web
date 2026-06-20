import { useMutation, useQuery } from "@tanstack/react-query";
import {
  createRefrigeratorProduct,
  getRefrigeratorProducts,
  RefreigeratorRequest,
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
