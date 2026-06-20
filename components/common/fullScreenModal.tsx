"use client";

import { ReactNode } from "react";

interface FullScreenModalProps {
  open: boolean;
  title: string;
  onClose: () => void;
  children: ReactNode;
}

export default function FullScreenModal({
  open,
  title,
  onClose,
  children,
}: FullScreenModalProps) {
  if (!open) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <header className="modal-header">
          <h2>{title}</h2>
          <button onClick={onClose}>✕</button>
        </header>

        <main className="modal-content">{children}</main>
      </div>

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: rgba(0, 0, 0, 0.5);
        }

        .modal-container {
          width: 100vw;
          height: 100vh;
          background: white;
          display: flex;
          flex-direction: column;
        }

        .modal-header {
          height: 60px;
          padding: 0 20px;
          border-bottom: 1px solid #ddd;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .modal-content {
          flex: 1;
          overflow-y: auto;
          padding: 20px;
        }

        button {
          cursor: pointer;
          font-size: 18px;
          border: none;
          background: none;
        }
      `}</style>
    </div>
  );
}
