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
  category: string;
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

export interface CreateProductRequest {
  productId: number;
  quantity: number;
  expiredAt: string;
  origin: string;
}

export const createRefrigeratorProduct = async (
  request: CreateProductRequest,
) => {
  const response = await api.post("/api/refrigerator-product", request);

  return response.data;
};

export const deleteRefrigeratorProduct = async (productId: number) => {
  const response = await api.delete(`/api/refrigerator-product/${productId}`);

  return response.data;
};
export interface StaticsRefrigeratorResponse {
  refrigeratorScore: number;
  expiringProductCount: number;
  expiredProductCount: number;
}
/**
 * 냉장고 통계
 */
export const retrieveRefrigeratorStatistics =
  async (): Promise<StaticsRefrigeratorResponse> => {
    const response = await api.get(`/api/refrigerator-product/statics`);

    return response.data;
  };
