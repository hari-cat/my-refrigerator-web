// "use client";

// import { ReactNode } from "react";

// interface FullScreenModalProps {
//   open: boolean;
//   title: string;
//   onClose: () => void;
//   children: ReactNode;
// }

// export default function FullScreenModal({
//   open,
//   title,
//   onClose,
// }: FullScreenModalProps) {
//   if (!open) return null;

//   return (
//     <div className="modal-overlay">
//       <div className="modal-container">
//         <header className="modal-header">
//           <h2>{title}</h2>
//           <button onClick={onClose}>✕</button>
//         </header>

//         <main className="modal-content">
//           <ul>
//             <li>
//               <span>카테고리: </span>
//               <span>
//                 <Dropdown
//                   value={category}
//                   onChange={(value) => {
//                     setCategory(value);
//                     setCreateProduct((prev) => ({ ...prev, category: value }));
//                   }}
//                   options={[
//                     {
//                       value: "MEAT",
//                       label: "육류",
//                     },
//                     {
//                       value: "VEGETABLE",
//                       label: "채소",
//                     },
//                     {
//                       value: "DRINK",
//                       label: "음료",
//                     },
//                     {
//                       value: "DAIRY",
//                       label: "음료",
//                     },
//                     {
//                       value: "FROZEN",
//                       label: "냉동",
//                     },
//                   ]}
//                 />
//               </span>
//             </li>
//             <li className="mt-5 flex">
//               <span>이름:</span>
//               <span className="ml-3">
//                 <Input
//                   onChange={(e) =>
//                     setCreateProduct((prev) => ({
//                       ...prev,
//                       name: e.target.value,
//                     }))
//                   }
//                 />
//               </span>
//             </li>
//             <li className="mt-5 flex">
//               <span>유통기한:</span>
//               <span className="ml-3">
//                 <DatePicker
//                   value={creatProduct.expiredAt}
//                   onChange={(value) =>
//                     setCreateProduct((prev) => ({ ...prev, expiredAt: value }))
//                   }
//                 />
//               </span>
//             </li>
//             <li className="mt-5 flex">
//               <span>원산지:</span>
//               <span className="ml-3">
//                 <Input
//                   onChange={(e) =>
//                     setCreateProduct((prev) => ({
//                       ...prev,
//                       origin: e.target.value,
//                     }))
//                   }
//                 />
//               </span>
//             </li>
//             <li className="mt-5 flex">
//               <span>수량:</span>
//               <span className="ml-3">
//                 <QuantityStepper
//                   value={creatProduct.quantity}
//                   onChange={(value: number) =>
//                     setCreateProduct((prev) => ({ ...prev, quantity: value }))
//                   }
//                 />
//               </span>
//             </li>
//           </ul>
//           <div className="mt-10">
//             <Button
//               className={"bg-amber-400 p-3 rounded-lg "}
//               onClick={() => {
//                 const isEmpty = Object.values(creatProduct).some(
//                   (value) => value === 0 || value === "",
//                 );
//                 if (isEmpty) return;
//                 setCheckRegistPopup(true);
//               }}
//             >
//               등록하기
//             </Button>
//           </div>
//         </main>
//       </div>

//       <style jsx>{`
//         .modal-overlay {
//           position: fixed;
//           inset: 0;
//           z-index: 9999;
//           background: rgba(0, 0, 0, 0.5);
//         }

//         .modal-container {
//           width: 100vw;
//           height: 100vh;
//           background: white;
//           display: flex;
//           flex-direction: column;
//         }

//         .modal-header {
//           height: 60px;
//           padding: 0 20px;
//           border-bottom: 1px solid #ddd;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//         }

//         .modal-content {
//           flex: 1;
//           overflow-y: auto;
//           padding: 20px;
//         }

//         button {
//           cursor: pointer;
//           font-size: 18px;
//           border: none;
//           background: none;
//         }
//       `}</style>
//     </div>
//   );
// }
