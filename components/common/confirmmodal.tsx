"use client";

interface ConfirmModalProps {
  open: boolean;
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmModal({
  open,
  title,
  message,
  onConfirm,
  onCancel,
}: ConfirmModalProps) {
  if (!open) return null;

  return (
    <div className="overlay">
      <div className="modal">
        <h3>{title}</h3>

        <p>{message}</p>

        <div className="button-group">
          <button className="cancel-button" onClick={onCancel}>
            취소
          </button>

          <button className="confirm-button" onClick={onConfirm}>
            확인
          </button>
        </div>
      </div>

      <style jsx>{`
        .overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);

          display: flex;
          justify-content: center;
          align-items: center;

          z-index: 9999;
        }

        .modal {
          width: 360px;
          background: white;
          border-radius: 12px;
          padding: 24px;
        }

        h3 {
          margin-bottom: 12px;
        }

        p {
          margin-bottom: 24px;
        }

        .button-group {
          display: flex;
          gap: 8px;
          justify-content: flex-end;
        }

        button {
          min-width: 80px;
          height: 40px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
