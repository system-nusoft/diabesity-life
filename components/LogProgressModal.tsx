"use client";

import { useAuth } from "@/contexts/AuthContext";
import { API_BASE_URL } from "@/lib/utils";
import { X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import FrequencySelector from "./FrequencySelector";

interface BmiMetricData {
  toolType: "bmi";
  bmiValue: number;
  weightKg: number;
  heightCm: number;
  bmiCategory: string;
}

interface Hba1cMetricData {
  toolType: "hba1c";
  hba1cPercent: number;
  eagMgDl: number;
  eagMmol: number;
  hba1cCategory: string;
}

type MetricData = BmiMetricData | Hba1cMetricData;

interface LogProgressModalProps {
  metricData: MetricData;
  onClose: () => void;
  onSaved: () => void;
}

export default function LogProgressModal({
  metricData,
  onClose,
  onSaved,
}: LogProgressModalProps) {
  const { token } = useAuth();
  const [hasPreference, setHasPreference] = useState(false);
  const [frequency, setFrequency] = useState("monthly");
  const [notes, setNotes] = useState("");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPreferences = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/tracking/preferences`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (res.ok) {
          const prefs: { toolType: string; frequency: string }[] =
            await res.json();
          const existing = prefs.find(
            (p) => p.toolType === metricData.toolType,
          );
          if (existing) {
            setHasPreference(true);
            setFrequency(existing.frequency);
          }
        }
      } catch {
        // ignore
      }
    };

    if (token) fetchPreferences();
  }, [token, metricData.toolType]);

  const handleSave = async () => {
    setSaving(true);
    setError(null);

    try {
      const body: Record<string, unknown> = {
        toolType: metricData.toolType,
        notes: notes.trim() || undefined,
      };

      if (!hasPreference) {
        body.frequency = frequency;
      }

      if (metricData.toolType === "bmi") {
        body.bmiValue = metricData.bmiValue;
        body.weightKg = metricData.weightKg;
        body.heightCm = metricData.heightCm;
        body.bmiCategory = metricData.bmiCategory;
      } else {
        body.hba1cPercent = metricData.hba1cPercent;
        body.eagMgDl = metricData.eagMgDl;
        body.eagMmol = metricData.eagMmol;
        body.hba1cCategory = metricData.hba1cCategory;
      }

      const res = await fetch(`${API_BASE_URL}/tracking/logs`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        throw new Error("Failed to save log");
      }

      setSaved(true);
      onSaved();
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
          <h2 className="text-lg font-bold text-gray-900">Save to Progress</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="px-6 py-5 space-y-5">
          {/* Metric Summary */}
          <div className="bg-gray-50 border border-gray-200 p-4">
            {metricData.toolType === "bmi" ? (
              <div className="space-y-1">
                <p className="text-sm font-medium text-gray-700">
                  BMI:{" "}
                  <span className="text-primary font-bold">
                    {metricData.bmiValue}
                  </span>
                  <span className="ml-2 text-xs text-gray-500">
                    ({metricData.bmiCategory})
                  </span>
                </p>
                <p className="text-xs text-gray-500">
                  Weight: {metricData.weightKg.toFixed(1)} kg · Height:{" "}
                  {metricData.heightCm.toFixed(1)} cm
                </p>
              </div>
            ) : (
              <div className="space-y-1">
                <p className="text-sm font-medium text-gray-700">
                  HbA1c:{" "}
                  <span className="text-primary font-bold">
                    {metricData.hba1cPercent}%
                  </span>
                  <span className="ml-2 text-xs text-gray-500">
                    ({metricData.hba1cCategory})
                  </span>
                </p>
                <p className="text-xs text-gray-500">
                  eAG: {metricData.eagMgDl} mg/dL · {metricData.eagMmol} mmol/L
                </p>
              </div>
            )}
          </div>

          {/* Frequency selector — only shown first time */}
          {!hasPreference && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                How often do you plan to track?
              </label>
              <FrequencySelector value={frequency} onChange={setFrequency} />
            </div>
          )}

          {/* Notes */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Notes{" "}
              <span className="text-gray-400 font-normal">(optional)</span>
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. After a week of reduced carbs..."
              rows={2}
              className="w-full px-3 py-2 border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
            />
          </div>

          {/* Error */}
          {error && (
            <p className="text-red-600 text-sm bg-red-50 border border-red-200 px-3 py-2">
              {error}
            </p>
          )}

          {/* Success */}
          {saved && (
            <div className="bg-green-50 border border-green-200 px-3 py-2 flex items-center justify-between">
              <span className="text-green-700 text-sm font-medium">Saved!</span>
              <Link
                href="/dashboard"
                className="text-primary text-sm font-medium hover:underline"
                onClick={onClose}
              >
                View Dashboard →
              </Link>
            </div>
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
            disabled={saving || saved}
            className="flex-1 py-2 bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {saving ? "Saving..." : saved ? "Saved" : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
}
