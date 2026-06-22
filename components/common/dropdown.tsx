"use client";

interface Option {
  value: string;
  label: string;
}

interface DropdownProps {
  value: string;
  options: Option[];
  onChange: (value: string) => void;
}

export default function Dropdown({ value, options, onChange }: DropdownProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="dropdown"
    >
      <option value="">선택하세요</option>

      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
