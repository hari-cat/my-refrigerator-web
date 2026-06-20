"use client";

interface AlertModalProps {
  open: boolean;
  title: string;
  message: string;
  onClose: () => void;
}

export default function AlertModal({
  open,
  title,
  message,
  onClose,
}: AlertModalProps) {
  if (!open) return null;

  return (
    <div className="overlay">
      <div className="alert">
        <h3>{title}</h3>

        <p>{message}</p>

        <button onClick={onClose}>확인</button>
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

        .alert {
          width: 320px;
          background: white;
          border-radius: 12px;
          padding: 24px;
        }

        h3 {
          margin-bottom: 12px;
        }

        p {
          margin-bottom: 20px;
        }

        button {
          width: 100%;
          height: 40px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
