"use client";

import { useState } from "react";

type Gender = "male" | "female";
type HeightUnit = "ft-in" | "m";
type WeightUnit = "kg" | "lbs";

interface BmiResult {
  bmi: number;
  category: string;
  color: string;
  description: string;
  isChild: boolean;
  childNote?: string;
}

function classifyAdultBmi(bmi: number): { category: string; color: string; description: string } {
  if (bmi < 18.5) {
    return {
      category: "Underweight",
      color: "#3b82f6",
      description: "A BMI below 18.5 may indicate insufficient body weight. Consider consulting a healthcare provider about nutrition.",
    };
  }
  if (bmi < 25) {
    return {
      category: "Normal",
      color: "#22c55e",
      description: "Your BMI is within the healthy range. Maintain your current lifestyle with balanced nutrition and regular activity.",
    };
  }
  if (bmi < 30) {
    return {
      category: "Overweight",
      color: "#f59e0b",
      description: "A BMI of 25–29.9 indicates overweight. Small changes in diet and activity can help reduce health risks.",
    };
  }
  if (bmi < 35) {
    return {
      category: "Obese (Class I)",
      color: "#f97316",
      description: "A BMI of 30–34.9 is classified as Class I obesity. Lifestyle changes and medical guidance can support better health.",
    };
  }
  if (bmi < 40) {
    return {
      category: "Obese (Class II)",
      color: "#ef4444",
      description: "A BMI of 35–39.9 is classified as Class II obesity. Please consult a healthcare provider for personalised advice.",
    };
  }
  return {
    category: "Obese (Class III)",
    color: "#dc2626",
    description: "A BMI of 40 or above is classified as Class III obesity. Medical support is recommended for safe, effective management.",
  };
}

const childThresholds: number[][] = [
  [2, 14.7, 18.2, 19.4, 14.4, 18.0, 19.1],
  [3, 14.3, 17.4, 18.3, 14.0, 17.2, 18.3],
  [4, 13.9, 17.0, 17.8, 13.7, 16.8, 17.9],
  [5, 13.8, 17.0, 18.0, 13.5, 16.8, 18.0],
  [6, 13.7, 17.4, 18.5, 13.4, 17.1, 18.5],
  [7, 13.8, 17.9, 19.2, 13.4, 17.6, 19.2],
  [8, 14.0, 18.6, 20.1, 13.5, 18.3, 20.1],
  [9, 14.2, 19.4, 21.1, 13.7, 19.1, 21.1],
  [10, 14.4, 20.1, 22.1, 14.0, 19.9, 22.1],
  [11, 14.7, 20.9, 23.0, 14.4, 20.7, 23.0],
  [12, 15.1, 21.7, 23.9, 14.8, 21.5, 23.9],
  [13, 15.5, 22.4, 24.8, 15.3, 22.1, 24.6],
  [14, 16.0, 23.1, 25.5, 15.7, 22.7, 25.2],
  [15, 16.5, 23.6, 26.0, 16.1, 23.1, 25.6],
  [16, 17.0, 24.1, 26.5, 16.4, 23.5, 26.0],
  [17, 17.4, 24.5, 27.0, 16.6, 23.7, 26.2],
];

function classifyChildBmi(
  bmi: number,
  age: number,
  gender: "male" | "female"
): { category: string; color: string; childNote: string } {
  const row = childThresholds.find((r) => r[0] === Math.round(age)) ||
    childThresholds[childThresholds.length - 1];

  const p5 = gender === "male" ? row[1] : row[4];
  const p85 = gender === "male" ? row[2] : row[5];
  const p95 = gender === "male" ? row[3] : row[6];

  let category: string;
  let color: string;

  if (bmi < p5) {
    category = "Underweight";
    color = "#3b82f6";
  } else if (bmi < p85) {
    category = "Healthy weight";
    color = "#22c55e";
  } else if (bmi < p95) {
    category = "Overweight";
    color = "#f59e0b";
  } else {
    category = "Obese";
    color = "#ef4444";
  }

  return {
    category,
    color,
    childNote:
      "For children and teens (ages 2–17), BMI is interpreted using age and gender-specific percentiles. Please consult a paediatrician for a full assessment.",
  };
}

function calculateBmi(
  heightCm: number,
  weightKg: number,
  age: number,
  gender: "male" | "female"
): BmiResult | null {
  if (heightCm <= 0 || weightKg <= 0) return null;
  const heightM = heightCm / 100;
  const bmi = weightKg / (heightM * heightM);
  const rounded = Math.round(bmi * 10) / 10;

  if (age >= 2 && age <= 17) {
    const child = classifyChildBmi(rounded, age, gender);
    return {
      bmi: rounded,
      category: child.category,
      color: child.color,
      description: child.childNote,
      isChild: true,
      childNote: child.childNote,
    };
  }

  const adult = classifyAdultBmi(rounded);
  return { bmi: rounded, ...adult, isChild: false };
}

function BmiGauge({ bmi }: { bmi: number | null }) {
  const minBmi = 10;
  const maxBmi = 45;
  const clampedBmi = bmi ? Math.min(Math.max(bmi, minBmi), maxBmi) : minBmi;

  // Map BMI to angle: left side (-180°) = 10, right side (0°) = 45
  // In SVG coords: angle in degrees where 0° = 3 o'clock, going clockwise
  // We want a top half-circle: from 180° (9 o'clock / left) to 360°/0° (3 o'clock / right)
  const needleAngleDeg =
    180 + ((clampedBmi - minBmi) / (maxBmi - minBmi)) * 180;

  const cx = 150;
  const cy = 155;
  const r = 120;

  // Segments defined as percentage of the 180° arc (left to right)
  // BMI ranges: <18.5, 18.5-25, 25-30, 30-35, 35-40, 40+
  // Mapped to 0-100% of the arc based on BMI range 10-45
  const segments = [
    { label: "Underweight", color: "#3b82f6", startPct: 0, endPct: 24.3 },
    { label: "Normal", color: "#22c55e", startPct: 24.3, endPct: 42.9 },
    { label: "Overweight", color: "#f59e0b", startPct: 42.9, endPct: 57.1 },
    { label: "Obese I", color: "#f97316", startPct: 57.1, endPct: 71.4 },
    { label: "Obese II", color: "#ef4444", startPct: 71.4, endPct: 85.7 },
    { label: "Obese III", color: "#dc2626", startPct: 85.7, endPct: 100 },
  ];

  // Convert percentage (0-100) to angle in radians
  // 0% = 180° (left), 100% = 360° (right)
  const pctToRad = (pct: number) => ((180 + (pct / 100) * 180) * Math.PI) / 180;

  // Needle endpoint
  const needleRad = (needleAngleDeg * Math.PI) / 180;
  const needleLen = r - 20;
  const nx = cx + needleLen * Math.cos(needleRad);
  const ny = cy + needleLen * Math.sin(needleRad);

  return (
    <div className="flex flex-col items-center">
      <svg viewBox="0 0 300 185" className="w-full max-w-sm">
        {/* Arc segments */}
        {segments.map((seg, i) => {
          const a1 = pctToRad(seg.startPct);
          const a2 = pctToRad(seg.endPct);

          const x1 = cx + r * Math.cos(a1);
          const y1 = cy + r * Math.sin(a1);
          const x2 = cx + r * Math.cos(a2);
          const y2 = cy + r * Math.sin(a2);

          const sweepDeg = (seg.endPct - seg.startPct) / 100 * 180;
          const largeArc = sweepDeg > 180 ? 1 : 0;

          return (
            <path
              key={i}
              d={`M ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2}`}
              fill="none"
              stroke={seg.color}
              strokeWidth="24"
              strokeLinecap="butt"
            />
          );
        })}

        {/* Needle */}
        {bmi !== null && (
          <>
            <line
              x1={cx}
              y1={cy}
              x2={nx}
              y2={ny}
              stroke="#1f2937"
              strokeWidth="3"
              strokeLinecap="round"
              style={{
                transition: "x2 0.7s ease-out, y2 0.7s ease-out",
              }}
            />
            <circle cx={cx} cy={cy} r="8" fill="#1f2937" />
            <circle cx={cx} cy={cy} r="4" fill="white" />
          </>
        )}

        {/* Center dot when no result */}
        {bmi === null && (
          <>
            <circle cx={cx} cy={cy} r="8" fill="#d1d5db" />
            <circle cx={cx} cy={cy} r="4" fill="white" />
          </>
        )}

      </svg>
    </div>
  );
}

export default function BmiCalculatorClient() {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState<Gender>("male");
  const [heightUnit, setHeightUnit] = useState<HeightUnit>("ft-in");
  const [weightUnit, setWeightUnit] = useState<WeightUnit>("kg");
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");
  const [meters, setMeters] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState<BmiResult | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = () => {
    setError(null);

    // Validate age
    const ageNum = parseFloat(age);
    if (!age || isNaN(ageNum) || ageNum < 0) {
      setError("Please enter a valid age.");
      return;
    }
    if (ageNum < 2) {
      setError("BMI calculation is not reliable for children under 2 years old.");
      return;
    }
    if (ageNum > 120) {
      setError("Please enter a valid age (2–120).");
      return;
    }

    // Validate height
    let heightCm = 0;
    if (heightUnit === "ft-in") {
      const ft = parseFloat(feet) || 0;
      const inc = parseFloat(inches) || 0;
      if (ft < 0 || inc < 0) {
        setError("Height values cannot be negative.");
        return;
      }
      if (ft === 0 && inc === 0) {
        setError("Please enter your height.");
        return;
      }
      heightCm = ft * 30.48 + inc * 2.54;
    } else {
      const m = parseFloat(meters) || 0;
      if (m < 0) {
        setError("Height cannot be negative.");
        return;
      }
      if (m === 0) {
        setError("Please enter your height.");
        return;
      }
      heightCm = m * 100;
    }

    // Validate weight
    const w = parseFloat(weight) || 0;
    if (w < 0) {
      setError("Weight cannot be negative.");
      return;
    }
    if (w === 0) {
      setError("Please enter your weight.");
      return;
    }

    let weightKg = w;
    if (weightUnit === "lbs") {
      weightKg = w * 0.453592;
    }

    const bmiResult = calculateBmi(heightCm, weightKg, Math.floor(ageNum), gender);
    setResult(bmiResult);
    setShowResult(true);
  };

  const handleReset = () => {
    setAge("");
    setGender("male");
    setFeet("");
    setInches("");
    setMeters("");
    setWeight("");
    setResult(null);
    setShowResult(false);
    setError(null);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-white py-16 md:py-20 border-b border-gray-200">
        <div className="max-w-4xl lg:max-w-6xl mx-auto px-6 lg:px-0">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              BMI Calculator
            </h1>
            <p className="text-gray-700 text-md leading-relaxed max-w-2xl mx-auto">
              Body Mass Index (BMI) is a simple screening tool that uses your
              height and weight to estimate body fat. Enter your details below to
              calculate your BMI.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Input Form */}
            <div className="bg-white p-8 border border-gray-200 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Your Details
              </h2>

              <div className="space-y-4">
                {/* Age */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Age
                  </label>
                  <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="Enter your age"
                    min="1"
                    max="120"
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                {/* Gender */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Gender
                  </label>
                  <div className="flex gap-4">
                    <button
                      onClick={() => setGender("male")}
                      className={`flex-1 py-3 px-4 border font-medium transition-all ${
                        gender === "male"
                          ? "bg-primary text-white border-primary"
                          : "bg-white text-gray-700 border-gray-300 hover:border-primary"
                      }`}
                    >
                      Male
                    </button>
                    <button
                      onClick={() => setGender("female")}
                      className={`flex-1 py-3 px-4 border font-medium transition-all ${
                        gender === "female"
                          ? "bg-primary text-white border-primary"
                          : "bg-white text-gray-700 border-gray-300 hover:border-primary"
                      }`}
                    >
                      Female
                    </button>
                  </div>
                </div>

                {/* Height */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Height
                    </label>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setHeightUnit("ft-in")}
                        className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${
                          heightUnit === "ft-in"
                            ? "bg-primary text-white"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                      >
                        ft / in
                      </button>
                      <button
                        onClick={() => setHeightUnit("m")}
                        className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${
                          heightUnit === "m"
                            ? "bg-primary text-white"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                      >
                        m
                      </button>
                    </div>
                  </div>
                  {heightUnit === "ft-in" ? (
                    <div className="flex gap-4">
                      <div className="flex-1">
                        <input
                          type="number"
                          value={feet}
                          onChange={(e) => setFeet(e.target.value)}
                          placeholder="Feet"
                          min="0"
                          max="9"
                          className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                      <div className="flex-1">
                        <input
                          type="number"
                          value={inches}
                          onChange={(e) => setInches(e.target.value)}
                          placeholder="Inches"
                          min="0"
                          max="11"
                          className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                    </div>
                  ) : (
                    <input
                      type="number"
                      value={meters}
                      onChange={(e) => setMeters(e.target.value)}
                      placeholder="Meters (e.g. 1.75)"
                      step="0.01"
                      min="0"
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  )}
                </div>

                {/* Weight */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Weight
                    </label>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setWeightUnit("kg")}
                        className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${
                          weightUnit === "kg"
                            ? "bg-primary text-white"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                      >
                        kg
                      </button>
                      <button
                        onClick={() => setWeightUnit("lbs")}
                        className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${
                          weightUnit === "lbs"
                            ? "bg-primary text-white"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                      >
                        lbs
                      </button>
                    </div>
                  </div>
                  <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder={
                      weightUnit === "kg"
                        ? "Weight in kg"
                        : "Weight in pounds"
                    }
                    min="0"
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                {/* Error Message */}
                {error && (
                  <p className="text-red-600 text-sm font-medium bg-red-50 border border-red-200 px-4 py-3">
                    {error}
                  </p>
                )}

                {/* Buttons */}
                <div className="flex gap-4 pt-2">
                  <button
                    onClick={handleCalculate}
                    className="flex-1 bg-primary text-white py-3 px-6 font-medium hover:bg-primary/90 transition-all"
                  >
                    Calculate BMI
                  </button>
                  <button
                    onClick={handleReset}
                    className="px-6 py-3 border border-gray-300 font-medium text-gray-700 hover:bg-gray-50 transition-all"
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>

            {/* Result Section */}
            <div className="bg-white p-8 border border-gray-200 shadow-sm flex flex-col items-center justify-center">
              {showResult && result ? (
                <>
                  <BmiGauge bmi={result.bmi} />
                  <div className="text-center mt-6">
                    <p className="text-5xl font-bold" style={{ color: result.color }}>
                      {result.bmi}
                    </p>
                    <p
                      className="text-xl font-semibold mt-2"
                      style={{ color: result.color }}
                    >
                      {result.category}
                    </p>
                    <p className="text-gray-500 text-sm mt-4 max-w-xs leading-relaxed">
                      {result.description}
                    </p>
                  </div>
                </>
              ) : (
                <div className="text-center">
                  <BmiGauge bmi={null} />
                  <p className="text-gray-400 mt-6 text-lg">
                    Enter your details and click &quot;Calculate BMI&quot; to see
                    your result.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Understanding Your BMI
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-blue-500 flex-shrink-0" />
                <p className="text-gray-700">
                  <strong>Below 18.5</strong> — Underweight
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-green-500 flex-shrink-0" />
                <p className="text-gray-700">
                  <strong>18.5 – 24.9</strong> — Normal weight
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-yellow-500 flex-shrink-0" />
                <p className="text-gray-700">
                  <strong>25.0 – 29.9</strong> — Overweight
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-orange-500 flex-shrink-0" />
                <p className="text-gray-700">
                  <strong>30.0 – 34.9</strong> — Obese (Class I)
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-red-500 flex-shrink-0" />
                <p className="text-gray-700">
                  <strong>35.0 – 39.9</strong> — Obese (Class II)
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-red-600 flex-shrink-0" />
                <p className="text-gray-700">
                  <strong>40.0+</strong> — Obese (Class III)
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-gray-50 border border-gray-200">
            <p className="text-gray-600 text-sm leading-relaxed">
              <strong>Note:</strong> BMI is a screening tool, not a diagnostic
              measure. It does not account for muscle mass, bone density, or
              ethnic differences. Always consult a healthcare
              professional for a comprehensive assessment.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
