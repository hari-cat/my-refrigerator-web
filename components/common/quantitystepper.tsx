"use client";

interface QuantityStepperProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}

export default function QuantityStepper({
  value,
  onChange,
  min = 1,
  max = 999,
}: QuantityStepperProps) {
  const decrease = () => {
    if (value <= min) return;
    onChange(value - 1);
  };

  const increase = () => {
    if (value >= max) return;
    onChange(value + 1);
  };

  return (
    <div className="stepper">
      <button
        type="button"
        className="bg-amber-400 pr-2.5 pl-2.5 rounded-xl"
        onClick={decrease}
      >
        -
      </button>

      <span className="m-3">{value}</span>

      <button
        type="button"
        className="bg-amber-400 pr-2.5 pl-2.5 rounded-xl"
        onClick={increase}
      >
        +
      </button>
    </div>
  );
}
