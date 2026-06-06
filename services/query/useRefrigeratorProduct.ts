import { useQuery } from "@tanstack/react-query";
import { getRefrigeratorProducts } from "../api/refrigeratorProductApi";

export const useGetRefrigeratorProducts= () => {
  return useQuery({
    queryKey: ["getRefrigeratorProducts"],
    queryFn: getRefrigeratorProducts,
  });
};