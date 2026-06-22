"use client";

interface RefrigeratorProduct {
  id: number;
  name: string;
  quantity: number;
  expiredAt: string;
  createdAt: string;
}

interface Props {
  product: RefrigeratorProduct;
}

export default function RefrigeratorProductDetail({ product }: Props) {
  return (
    <div className="detail-container">
      <h2>{product.name}</h2>

      <div className="detail-item">
        <span>수량</span>
        <span>{product.quantity}개</span>
      </div>

      <div className="detail-item">
        <span>유통기한</span>
        <span>{product.expiredAt}</span>
      </div>

      <div className="detail-item">
        <span>등록일</span>
        <span>{product.createdAt}</span>
      </div>
    </div>
  );
}
