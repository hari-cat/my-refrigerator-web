// services/api/foodApi.ts

import { api } from "./axios";

export interface RefreigeratorResponse {
  id: string;
  name: string;
}

export const getRefrigerator= async (param:number): Promise<RefreigeratorResponse> => {
  const response = await api.get(`/api/refrigerator/${param}`);

  return response.data;
};