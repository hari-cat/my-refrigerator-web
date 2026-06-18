import { useQuery } from "@tanstack/react-query";
import {
  getRefrigeratorProducts,
  RefreigeratorRequest,
} from "../api/refrigeratorProductApi";

export const useGetRefrigeratorProducts = (param: RefreigeratorRequest) => {
  return useQuery({
    queryKey: ["getRefrigeratorProducts"],
    queryFn: () => getRefrigeratorProducts(param),
  });
};
