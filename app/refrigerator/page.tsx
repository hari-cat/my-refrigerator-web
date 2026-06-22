"use client";
import Link from "next/link";
import { Logo } from "@/components/refrigerator/logo";
import { FreshnessHeader } from "@/components/refrigerator/freshness-header";
import { IngredientList } from "@/components/refrigerator/ingredient-list";
import {
  useCreateRefrigeratorProduct,
  useGetRefrigeratorProducts,
} from "@/services/query/useRefrigeratorProduct";
import {
  CreateProductRequest,
  RefreigeratorRequest,
} from "@/services/api/refrigeratorProductApi";
import { useState } from "react";
import Dropdown from "@/components/common/dropdown";
import { Input } from "@/components/ui/input";
import { Button } from "@base-ui/react";
import DatePicker from "@/components/common/datepicker";
import ConfirmModal from "@/components/common/confirmmodal";
import { error } from "console";
import QuantityStepper from "@/components/common/quantitystepper";
import FullScreenModal from "@/components/common/fullScreenModal";
import AlertModal from "@/components/common/alertmodal";
import RefrigeratorProductDetail from "@/components/refrigerator/refrigeratorproductdetail";

const INITIAL_PEGISTER_PRODUCT_REQUEST = {
  category: "",
  expiredAt: "",
  name: "",
  origin: "",
  quantity: 1,
};

export default function DashboardPage() {
  const [category, setCategory] = useState("");
  const [openRegistPopup, setOpenRegistPopup] = useState(false);
  const [checkRegistPopup, setCheckRegistPopup] = useState(false);
  const [creatProduct, setCreateProduct] = useState(
    INITIAL_PEGISTER_PRODUCT_REQUEST,
  );
  const [openRegistResultModal, setOpenRegistResultModal] = useState(false);
  const [registResultInfo, setRegistResultInfo] = useState({
    title: "",
    message: "",
  });

  const getRefrigeratorRequest: RefreigeratorRequest = {
    page: 1,
    size: 20,
  };
  const { data } = useGetRefrigeratorProducts(getRefrigeratorRequest);
  const createRefrigeratorProduct = useCreateRefrigeratorProduct();

  const products = data?.content ?? [];

  const registerRefrigeratorProduct = () => {
    const createRefrigeratorProductRequest: CreateProductRequest = {
      productId: 1,
      quantity: creatProduct.quantity,
      expiredAt: creatProduct.expiredAt,
      origin: creatProduct.origin,
    };

    createRefrigeratorProduct
      .mutateAsync(createRefrigeratorProductRequest)
      .then((res) => {
        console.log(res);
        setCheckRegistPopup(false);
        setOpenRegistPopup(false);
        setCreateProduct(INITIAL_PEGISTER_PRODUCT_REQUEST);
        setRegistResultInfo({ title: "등록완료", message: res });
        setOpenRegistResultModal(true);
        setCategory("ALL");
      })
      .catch((err) => {
        console.log(err);
        setCheckRegistPopup(false);
        setOpenRegistPopup(false);
        setRegistResultInfo({ title: "등록실패", message: err });
        setOpenRegistResultModal(true);
      });
  };

  console.log(creatProduct);
  return (
    <main className="min-h-screen bg-background">
      <header className="flex items-center justify-between bg-card px-6 py-5">
        <Logo markSize={36} />
        <Link
          href="/refrigerator"
          aria-label="홈으로"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          <HomeIcon className="size-7" />
        </Link>
      </header>
      <FreshnessHeader />
      <button
        key={"add-refrigerator-product"}
        type="button"
        onClick={() => setOpenRegistPopup(true)}
        className={
          "rounded-full px-6 py-2.5 text-base font-bold shadow-sm transition-colors bg-brand text-brand-foreground"
        }
        style={{ marginLeft: "250px" }}
      >
        {"냉장고 추가"}
      </button>
      <IngredientList products={products} />
      <FullScreenModal
        open={openRegistPopup}
        title="냉장고 물품 추가"
        onClose={() => setOpenRegistPopup(false)}
      >
        <ul>
          <li>
            <span>카테고리: </span>
            <span>
              <Dropdown
                value={category}
                onChange={(value) => {
                  setCategory(value);
                  setCreateProduct((prev) => ({ ...prev, category: value }));
                }}
                options={[
                  {
                    value: "MEAT",
                    label: "육류",
                  },
                  {
                    value: "VEGETABLE",
                    label: "채소",
                  },
                  {
                    value: "DRINK",
                    label: "음료",
                  },
                  {
                    value: "DAIRY",
                    label: "유제품",
                  },
                  {
                    value: "FROZEN",
                    label: "냉동",
                  },
                ]}
              />
            </span>
          </li>
          <li className="mt-5 flex">
            <span>이름:</span>
            <span className="ml-3">
              <Input
                onChange={(e) =>
                  setCreateProduct((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }))
                }
              />
            </span>
          </li>
          <li className="mt-5 flex">
            <span>유통기한:</span>
            <span className="ml-3">
              <DatePicker
                value={creatProduct.expiredAt}
                onChange={(value) =>
                  setCreateProduct((prev) => ({ ...prev, expiredAt: value }))
                }
              />
            </span>
          </li>
          <li className="mt-5 flex">
            <span>원산지:</span>
            <span className="ml-3">
              <Input
                onChange={(e) =>
                  setCreateProduct((prev) => ({
                    ...prev,
                    origin: e.target.value,
                  }))
                }
              />
            </span>
          </li>
          <li className="mt-5 flex">
            <span>수량:</span>
            <span className="ml-3">
              <QuantityStepper
                value={creatProduct.quantity}
                onChange={(value: number) =>
                  setCreateProduct((prev) => ({ ...prev, quantity: value }))
                }
              />
            </span>
          </li>
        </ul>
        <div className="mt-10">
          <Button
            className={"bg-amber-400 p-3 rounded-lg "}
            onClick={() => {
              const isEmpty = Object.values(creatProduct).some(
                (value) => value === 0 || value === "",
              );
              if (isEmpty) return;
              setCheckRegistPopup(true);
            }}
          >
            등록하기
          </Button>
        </div>
      </FullScreenModal>
      <ConfirmModal
        open={checkRegistPopup}
        title="냉장고 물품 등록"
        message="냉장고에 물품을 등록할까요?"
        onCancel={() => setCheckRegistPopup(false)}
        onConfirm={registerRefrigeratorProduct}
      />
      <AlertModal
        open={openRegistResultModal}
        title={registResultInfo.title}
        message={registResultInfo.message}
        onClose={() => setOpenRegistResultModal(false)}
      />
    </main>
  );
}

function HomeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M11.47 3.84a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 0 1-1.06 1.06l-.22-.22V20a1.5 1.5 0 0 1-1.5 1.5h-3a.75.75 0 0 1-.75-.75V15a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0-.75.75v5.75a.75.75 0 0 1-.75.75H7.5A1.5 1.5 0 0 1 6 20v-6.63l-.22.22a.75.75 0 0 1-1.06-1.06l6.75-6.69Z" />
    </svg>
  );
}
