"use client";

interface FrequencySelectorProps {
  value: string;
  onChange: (value: string) => void;
}

const FREQUENCY_OPTIONS = [
  { value: "weekly", label: "Weekly" },
  { value: "monthly", label: "Monthly" },
  { value: "quarterly", label: "Quarterly" },
  { value: "manual", label: "Manual (log whenever I want)" },
];

export default function FrequencySelector({
  value,
  onChange,
}: FrequencySelectorProps) {
  return (
    <div className="space-y-2">
      {FREQUENCY_OPTIONS.map((opt) => (
        <label
          key={opt.value}
          className="flex items-center gap-3 cursor-pointer"
        >
          <input
            type="radio"
            name="frequency"
            value={opt.value}
            checked={value === opt.value}
            onChange={() => onChange(opt.value)}
            className="accent-primary"
          />
          <span className="text-sm text-gray-700">{opt.label}</span>
        </label>
      ))}
    </div>
  );
}
