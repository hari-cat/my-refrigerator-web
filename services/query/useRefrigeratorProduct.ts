import { useQuery } from "@tanstack/react-query";
import { getRefrigerator } from "../api/refrigeratorProductApi";

export const useGetRefrigerator = (param: number) => {
  return useQuery({
    queryKey: ["getRefrigeratorProducts"],
    queryFn: () => getRefrigerator(param),
  });
};
