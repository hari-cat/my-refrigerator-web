// services/api/foodApi.ts

import { api } from "./axios";

export interface RefreigeratorRequest {
  page: number;
  size: number;
}

export interface RefrigeratorProduct {
  id: number;
  name: string;
  quantity: number;
  expiredAt: string;
  origin: string;
}
export interface RefreigeratorResponse {
  content: RefrigeratorProduct[];
  totalElements: number;
  hasNext: boolean;
  page: number;
  size: number;
  totalPages: number;
}

export const getRefrigeratorProducts = async (
  param: RefreigeratorRequest,
): Promise<RefreigeratorResponse> => {
  const response = await api.get("/api/refrigerator-product", {
    params: param,
  });

  return response.data;
};
