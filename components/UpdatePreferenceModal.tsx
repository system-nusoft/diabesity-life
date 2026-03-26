"use client";

import { useAuth } from "@/contexts/AuthContext";
import { API_BASE_URL } from "@/lib/utils";
import { X } from "lucide-react";
import { useState } from "react";
import FrequencySelector from "./FrequencySelector";

interface UpdatePreferenceModalProps {
  toolType: "bmi" | "hba1c";
  currentFrequency: string;
  onClose: () => void;
  onSaved: (newFrequency: string) => void;
}

export default function UpdatePreferenceModal({
  toolType,
  currentFrequency,
  onClose,
  onSaved,
}: UpdatePreferenceModalProps) {
  const { token } = useAuth();
  const [frequency, setFrequency] = useState(currentFrequency);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const toolLabel = toolType === "bmi" ? "BMI" : "HbA1c";

  const handleSave = async () => {
    setSaving(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE_URL}/tracking/preferences`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ toolType, frequency }),
      });
      if (!res.ok) throw new Error("Failed to update preference");
      onSaved(frequency);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="bg-white w-full max-w-md border border-gray-200 shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-bold text-gray-900">
            Update {toolLabel} tracking goal
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="px-6 py-5 space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              How often do you want to track your {toolLabel}?
            </label>
            <FrequencySelector value={frequency} onChange={setFrequency} />
          </div>

          {error && (
            <p className="text-red-600 text-sm bg-red-50 border border-red-200 px-3 py-2">
              {error}
            </p>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-200 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-2 border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex-1 py-2 bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {saving ? "Saving..." : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
}
