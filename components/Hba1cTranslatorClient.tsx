"use client";

import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRightLeft } from "lucide-react";
import { useState } from "react";
import LogProgressModal from "./LogProgressModal";

type ConversionMode = "hba1c-to-glucose" | "glucose-to-hba1c";
type GlucoseUnit = "mg/dL" | "mmol/L";

interface Result {
  hba1c: number;
  glucoseMgDl: number;
  glucoseMmol: number;
  category: string;
  categoryColor: string;
  description: string;
}

function calculateFromHba1c(hba1c: number): Result | null {
  if (hba1c < 3 || hba1c > 20) return null;

  // eAG (mg/dL) = 28.7 × HbA1c − 46.7
  const glucoseMgDl = 28.7 * hba1c - 46.7;
  const glucoseMmol = glucoseMgDl / 18.018;

  const { category, categoryColor, description } = getCategory(hba1c);

  return {
    hba1c: Math.round(hba1c * 10) / 10,
    glucoseMgDl: Math.round(glucoseMgDl),
    glucoseMmol: Math.round(glucoseMmol * 10) / 10,
    category,
    categoryColor,
    description,
  };
}

function calculateFromGlucose(
  glucose: number,
  unit: GlucoseUnit,
): Result | null {
  let glucoseMgDl = glucose;
  if (unit === "mmol/L") {
    glucoseMgDl = glucose * 18.018;
  }

  if (glucoseMgDl < 40 || glucoseMgDl > 500) return null;

  // HbA1c = (eAG + 46.7) / 28.7
  const hba1c = (glucoseMgDl + 46.7) / 28.7;
  const glucoseMmol = glucoseMgDl / 18.018;

  const { category, categoryColor, description } = getCategory(hba1c);

  return {
    hba1c: Math.round(hba1c * 10) / 10,
    glucoseMgDl: Math.round(glucoseMgDl),
    glucoseMmol: Math.round(glucoseMmol * 10) / 10,
    category,
    categoryColor,
    description,
  };
}

function getCategory(hba1c: number): {
  category: string;
  categoryColor: string;
  description: string;
} {
  if (hba1c < 5.7) {
    return {
      category: "Normal",
      categoryColor: "#22c55e",
      description:
        "Your blood sugar levels are within the normal range. Continue maintaining a healthy lifestyle.",
    };
  } else if (hba1c < 6.5) {
    return {
      category: "Prediabetes",
      categoryColor: "#f59e0b",
      description:
        "Your blood sugar levels indicate prediabetes. Lifestyle changes can help prevent progression to diabetes.",
    };
  } else {
    return {
      category: "Diabetes",
      categoryColor: "#ef4444",
      description:
        "Your blood sugar levels are in the diabetes range. Please consult with your healthcare provider for proper management.",
    };
  }
}

export default function Hba1cTranslatorClient() {
  const { user } = useAuth();
  const { t } = useLanguage();

  const categoryLabel: Record<string, string> = {
    Normal: t("hba1c.categories.normal"),
    Prediabetes: t("hba1c.categories.prediabetes"),
    Diabetes: t("hba1c.categories.diabetes"),
  };

  const descriptionLabel: Record<string, string> = {
    Normal: t("hba1c.descriptions.normal"),
    Prediabetes: t("hba1c.descriptions.prediabetes"),
    Diabetes: t("hba1c.descriptions.diabetes"),
  };
  const [mode, setMode] = useState<ConversionMode>("hba1c-to-glucose");
  const [hba1cInput, setHba1cInput] = useState("");
  const [glucoseInput, setGlucoseInput] = useState("");
  const [glucoseUnit, setGlucoseUnit] = useState<GlucoseUnit>("mg/dL");
  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showLogModal, setShowLogModal] = useState(false);

  const handleConvert = () => {
    setError(null);
    setResult(null);

    if (mode === "hba1c-to-glucose") {
      const hba1c = parseFloat(hba1cInput);
      if (!hba1cInput || isNaN(hba1c) || hba1c <= 0) {
        setError(t("hba1c.errors.invalidHba1c"));
        return;
      }
      if (hba1c < 3 || hba1c > 20) {
        setError(t("hba1c.errors.hba1cRange"));
        return;
      }
      const calculated = calculateFromHba1c(hba1c);
      setResult(calculated);
    } else {
      const glucose = parseFloat(glucoseInput);
      if (!glucoseInput || isNaN(glucose) || glucose <= 0) {
        setError(t("hba1c.errors.invalidGlucose"));
        return;
      }
      const minVal = glucoseUnit === "mg/dL" ? 40 : 2.2;
      const maxVal = glucoseUnit === "mg/dL" ? 500 : 28;
      if (glucose < minVal || glucose > maxVal) {
        setError(
          `${t("hba1c.errors.glucoseRangeBetween")} ${minVal} ${t("hba1c.errors.and")} ${maxVal} ${glucoseUnit}${t("hba1c.errors.glucoseRangeSuffix")}.`,
        );
        return;
      }
      const calculated = calculateFromGlucose(glucose, glucoseUnit);
      setResult(calculated);
    }
  };

  const handleReset = () => {
    setHba1cInput("");
    setGlucoseInput("");
    setResult(null);
    setError(null);
  };

  const toggleMode = () => {
    setMode((prev) =>
      prev === "hba1c-to-glucose" ? "glucose-to-hba1c" : "hba1c-to-glucose",
    );
    setResult(null);
    setError(null);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-white py-16 md:py-20 border-b border-gray-200">
        <div className="max-w-4xl lg:max-w-6xl mx-auto px-6 lg:px-0">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {t("hba1c.hero")}
            </h1>
            <p className="text-gray-700 text-md leading-relaxed max-w-2xl mx-auto">
              {t("hba1c.heroDescription")}
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="max-w-2xl mx-auto px-6">
          <div className="bg-white border border-gray-200 shadow-sm p-8">
            {/* Mode Toggle */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span
                className={`text-sm font-medium ${
                  mode === "hba1c-to-glucose" ? "text-primary" : "text-gray-400"
                }`}
              >
                {t("hba1c.modeHba1cToGlucose")}
              </span>
              <button
                onClick={toggleMode}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Toggle conversion mode"
              >
                <ArrowRightLeft className="w-5 h-5 text-gray-600" />
              </button>
              <span
                className={`text-sm font-medium ${
                  mode === "glucose-to-hba1c" ? "text-primary" : "text-gray-400"
                }`}
              >
                {t("hba1c.modeGlucoseToHba1c")}
              </span>
            </div>

            {/* Input Section */}
            <div className="space-y-6">
              {mode === "hba1c-to-glucose" ? (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t("hba1c.labelHba1c")}
                  </label>
                  <input
                    type="number"
                    value={hba1cInput}
                    onChange={(e) => setHba1cInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleConvert()}
                    placeholder="e.g. 6.5"
                    step="0.1"
                    min="3"
                    max="20"
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              ) : (
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-sm font-medium text-gray-700">
                      {t("hba1c.labelAvgGlucose")}
                    </label>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setGlucoseUnit("mg/dL")}
                        className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${
                          glucoseUnit === "mg/dL"
                            ? "bg-primary text-white"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                      >
                        mg/dL
                      </button>
                      <button
                        onClick={() => setGlucoseUnit("mmol/L")}
                        className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${
                          glucoseUnit === "mmol/L"
                            ? "bg-primary text-white"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                      >
                        mmol/L
                      </button>
                    </div>
                  </div>
                  <input
                    type="number"
                    value={glucoseInput}
                    onChange={(e) => setGlucoseInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleConvert()}
                    placeholder={
                      glucoseUnit === "mg/dL" ? "e.g. 126" : "e.g. 7.0"
                    }
                    step={glucoseUnit === "mg/dL" ? "1" : "0.1"}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              )}

              {/* Error Message */}
              {error && (
                <p className="text-red-600 text-sm font-medium bg-red-50 border border-red-200 px-4 py-3">
                  {error}
                </p>
              )}

              {/* Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={handleConvert}
                  className="flex-1 bg-primary text-white py-3 px-6 font-medium hover:bg-primary/90 transition-all"
                >
                  {t("hba1c.convert")}
                </button>
                <button
                  onClick={handleReset}
                  className="px-6 py-3 border border-gray-300 font-medium text-gray-700 hover:bg-gray-50 transition-all"
                >
                  {t("hba1c.reset")}
                </button>
              </div>
            </div>

            {/* Result Section */}
            {result && (
              <div className="mt-8 pt-8 border-t border-gray-200">
                {/* Category Badge */}
                <div className="text-center mb-6">
                  <span
                    className="inline-block px-4 py-2 text-sm font-semibold text-white"
                    style={{ backgroundColor: result.categoryColor }}
                  >
                    {categoryLabel[result.category] ?? result.category}
                  </span>
                </div>

                {/* Result Values */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-purple-50 p-4 text-center">
                    <p className="text-xs text-purple-600 font-medium mb-1">
                      HbA1c
                    </p>
                    <p className="text-2xl font-bold text-purple-700">
                      {result.hba1c}%
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 text-center">
                    <p className="text-xs text-blue-600 font-medium mb-1">
                      {t("hba1c.avgGlucoseMgDl")}
                    </p>
                    <p className="text-2xl font-bold text-blue-700">
                      {result.glucoseMgDl}
                    </p>
                  </div>
                  <div className="bg-teal-50 p-4 text-center">
                    <p className="text-xs text-teal-600 font-medium mb-1">
                      {t("hba1c.avgGlucoseMmol")}
                    </p>
                    <p className="text-2xl font-bold text-teal-700">
                      {result.glucoseMmol}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed text-center">
                  {descriptionLabel[result.category] ?? result.description}
                </p>

                {user && (
                  <div className="mt-5 text-center">
                    <button
                      onClick={() => setShowLogModal(true)}
                      className="px-5 py-2 bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-all"
                    >
                      {t("hba1c.saveProgress")}
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Log Progress Modal */}
          {showLogModal && result && (
            <LogProgressModal
              metricData={{
                toolType: "hba1c",
                hba1cPercent: result.hba1c,
                eagMgDl: result.glucoseMgDl,
                eagMmol: result.glucoseMmol,
                hba1cCategory: result.category,
              }}
              onClose={() => setShowLogModal(false)}
              onSaved={() => {}}
            />
          )}

          {/* Reference Table */}
          <div className="mt-8 bg-white border border-gray-200 shadow-sm p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              {t("hba1c.referenceChart")}
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left rtl:text-right py-2 pr-4 font-medium text-gray-700">
                      HbA1c (%)
                    </th>
                    <th className="text-left rtl:text-right py-2 pr-4 font-medium text-gray-700">
                      eAG (mg/dL)
                    </th>
                    <th className="text-left rtl:text-right py-2 pr-4 font-medium text-gray-700">
                      eAG (mmol/L)
                    </th>
                    <th className="text-left rtl:text-right py-2 font-medium text-gray-700">
                      {t("hba1c.tableCategory")}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { hba1c: 5.0, category: "Normal", color: "#22c55e" },
                    { hba1c: 5.5, category: "Normal", color: "#22c55e" },
                    { hba1c: 6.0, category: "Prediabetes", color: "#f59e0b" },
                    { hba1c: 6.5, category: "Diabetes", color: "#ef4444" },
                    { hba1c: 7.0, category: "Diabetes", color: "#ef4444" },
                    { hba1c: 8.0, category: "Diabetes", color: "#ef4444" },
                    { hba1c: 9.0, category: "Diabetes", color: "#ef4444" },
                    { hba1c: 10.0, category: "Diabetes", color: "#ef4444" },
                  ].map((row) => {
                    const mgDl = Math.round(28.7 * row.hba1c - 46.7);
                    const mmol = Math.round((mgDl / 18.018) * 10) / 10;
                    return (
                      <tr key={row.hba1c} className="border-b border-gray-100">
                        <td className="py-2 pr-4">{row.hba1c}%</td>
                        <td className="py-2 pr-4">{mgDl}</td>
                        <td className="py-2 pr-4">{mmol}</td>
                        <td className="py-2">
                          <span
                            className="inline-block px-2 py-0.5 text-xs font-medium text-white"
                            style={{ backgroundColor: row.color }}
                          >
                            {categoryLabel[row.category] ?? row.category}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="mt-8 p-4 bg-gray-50 border border-gray-200">
              <p className="text-xs text-gray-600">
                {/* <strong>Formula:</strong> eAG (mg/dL) = 28.7 × HbA1c − 46.7 */}
                {t("hba1c.note")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
