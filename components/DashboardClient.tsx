"use client";

import { useAuth } from "@/contexts/AuthContext";
import { API_BASE_URL } from "@/lib/utils";
import AdminDashboardClient from "./AdminDashboardClient";
import { Trash2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import {
  Line,
  LineChart,
  ReferenceArea,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface ToolLog {
  id: string;
  toolType: string;
  loggedAt: string;
  notes: string | null;
  bmiValue: number | null;
  weightKg: number | null;
  heightCm: number | null;
  bmiCategory: string | null;
  hba1cPercent: number | null;
  eagMgDl: number | null;
  eagMmol: number | null;
  hba1cCategory: string | null;
}

interface TrackingPreference {
  toolType: string;
  frequency: string;
}

type TimeFilter = "3M" | "6M" | "1Y" | "All";

const TIME_FILTERS: TimeFilter[] = ["3M", "6M", "1Y", "All"];

function getFromDate(filter: TimeFilter): string | undefined {
  const now = new Date();
  if (filter === "3M") {
    now.setMonth(now.getMonth() - 3);
    return now.toISOString();
  }
  if (filter === "6M") {
    now.setMonth(now.getMonth() - 6);
    return now.toISOString();
  }
  if (filter === "1Y") {
    now.setFullYear(now.getFullYear() - 1);
    return now.toISOString();
  }
  return undefined;
}

function formatDate(isoStr: string): string {
  return new Date(isoStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function isOverdue(frequency: string, logs: ToolLog[]): boolean {
  if (frequency === "manual") return false;
  if (logs.length === 0) return true;

  const latest = new Date(logs[0].loggedAt);
  const now = new Date();
  const diffDays = (now.getTime() - latest.getTime()) / (1000 * 60 * 60 * 24);

  if (frequency === "weekly") return diffDays > 7;
  if (frequency === "monthly") return diffDays > 31;
  if (frequency === "quarterly") return diffDays > 92;
  return false;
}

function getTrendArrow(logs: ToolLog[], toolType: "bmi" | "hba1c"): string {
  if (logs.length < 2) return "";
  const latest = toolType === "bmi" ? logs[0].bmiValue : logs[0].hba1cPercent;
  const prev = toolType === "bmi" ? logs[1].bmiValue : logs[1].hba1cPercent;
  if (latest === null || prev === null) return "";
  if (latest < prev) return "↓";
  if (latest > prev) return "↑";
  return "→";
}

function getBmiCategoryColor(category: string | null): string {
  if (!category) return "#6b7280";
  const lower = category.toLowerCase();
  if (lower.includes("normal") || lower.includes("healthy")) return "#22c55e";
  if (lower.includes("underweight")) return "#3b82f6";
  if (lower.includes("overweight")) return "#f59e0b";
  return "#ef4444";
}

function getHba1cCategoryColor(category: string | null): string {
  if (!category) return "#6b7280";
  const lower = category.toLowerCase();
  if (lower === "normal") return "#22c55e";
  if (lower === "prediabetes") return "#f59e0b";
  return "#ef4444";
}

// Custom tooltip for recharts
function CustomTooltip({
  active,
  payload,
  label,
  toolType,
}: {
  active?: boolean;
  payload?: { value: number; payload: { category: string | null } }[];
  label?: string;
  toolType: "bmi" | "hba1c";
}) {
  if (!active || !payload || !payload.length) return null;
  const val = payload[0].value;
  const category = payload[0].payload.category;
  return (
    <div className="bg-white border border-gray-200 shadow-md px-3 py-2 text-xs">
      <p className="font-medium text-gray-700">{label}</p>
      <p className="text-primary font-bold">
        {toolType === "bmi" ? `BMI: ${val}` : `HbA1c: ${val}%`}
      </p>
      {category && <p className="text-gray-500">{category}</p>}
    </div>
  );
}

interface ToolSectionProps {
  toolType: "bmi" | "hba1c";
  logs: ToolLog[];
  preference: TrackingPreference | null;
  timeFilter: TimeFilter;
  onTimeFilterChange: (f: TimeFilter) => void;
  onDeleteLog: (id: string) => void;
  deleting: string | null;
}

function ToolSection({
  toolType,
  logs,
  preference,
  timeFilter,
  onTimeFilterChange,
  onDeleteLog,
  deleting,
}: ToolSectionProps) {
  const label = toolType === "bmi" ? "BMI" : "HbA1c";
  const toolUrl = toolType === "bmi" ? "/bmi-calculator" : "/hba1c-translator";

  // Filter logs by time
  const fromDate = getFromDate(timeFilter);
  const filteredLogs = fromDate
    ? logs.filter((l) => new Date(l.loggedAt) >= new Date(fromDate))
    : logs;

  // Sort filtered logs newest first for the list, oldest first for the chart
  const sortedNewest = [...filteredLogs].sort(
    (a, b) => new Date(b.loggedAt).getTime() - new Date(a.loggedAt).getTime(),
  );
  const chartData = [...filteredLogs]
    .sort(
      (a, b) => new Date(a.loggedAt).getTime() - new Date(b.loggedAt).getTime(),
    )
    .map((l) => ({
      date: formatDate(l.loggedAt),
      value: toolType === "bmi" ? l.bmiValue : l.hba1cPercent,
      category: toolType === "bmi" ? l.bmiCategory : l.hba1cCategory,
    }))
    .filter((d) => d.value !== null) as {
    date: string;
    value: number;
    category: string | null;
  }[];

  const latestLog = sortedNewest[0] ?? null;
  const latestValue = latestLog
    ? toolType === "bmi"
      ? latestLog.bmiValue
      : latestLog.hba1cPercent
    : null;
  const latestCategory = latestLog
    ? toolType === "bmi"
      ? latestLog.bmiCategory
      : latestLog.hba1cCategory
    : null;
  const trend = getTrendArrow(sortedNewest, toolType);
  const categoryColor =
    toolType === "bmi"
      ? getBmiCategoryColor(latestCategory)
      : getHba1cCategoryColor(latestCategory);

  // Healthy range band
  const yMin = toolType === "bmi" ? 10 : 3;
  const yMax = toolType === "bmi" ? 45 : 12;
  const healthyLow = toolType === "bmi" ? 18.5 : 3;
  const healthyHigh = toolType === "bmi" ? 23.4 : 5.69;

  return (
    <div className="bg-white border border-gray-200 shadow-sm p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">{label} progress</h2>

      {logs.length === 0 ? (
        /* Empty State */
        <div className="text-center py-12 text-gray-500">
          <p className="mb-2">No {label} logs yet.</p>
          <p className="text-sm">
            Use the{" "}
            <Link href={toolUrl} className="text-primary hover:underline">
              {label} {toolType === "bmi" ? "Calculator" : "Translator"}
            </Link>{" "}
            and save your first result.
          </p>
        </div>
      ) : (
        <>
          {/* Summary Row */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            {latestValue !== null && (
              <div className="flex items-center gap-2">
                <span
                  className="text-2xl font-bold"
                  style={{ color: categoryColor }}
                >
                  {toolType === "bmi" ? latestValue : `${latestValue}%`}
                </span>
                {trend && (
                  <span
                    className="text-lg font-bold"
                    style={{
                      color:
                        trend === "↓"
                          ? "#22c55e"
                          : trend === "↑"
                            ? "#ef4444"
                            : "#6b7280",
                    }}
                  >
                    {trend}
                  </span>
                )}
                {latestCategory && (
                  <span
                    className="px-2 py-0.5 text-xs font-medium text-white"
                    style={{ backgroundColor: categoryColor }}
                  >
                    {latestCategory}
                  </span>
                )}
              </div>
            )}
            {preference && (
              <span
                className={`text-xs px-2 py-1 border font-medium ${
                  isOverdue(preference.frequency, sortedNewest)
                    ? "border-red-300 text-red-600 bg-red-50"
                    : "border-green-300 text-green-700 bg-green-50"
                }`}
              >
                {preference.frequency.charAt(0).toUpperCase() +
                  preference.frequency.slice(1)}{" "}
                ·{" "}
                {isOverdue(preference.frequency, sortedNewest)
                  ? "Overdue"
                  : "On track ✓"}
              </span>
            )}
          </div>

          {/* Time Filter Tabs */}
          <div className="flex gap-1 mb-4">
            {TIME_FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => onTimeFilterChange(f)}
                className={`px-3 py-1 text-xs font-medium transition-all ${
                  timeFilter === f
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Chart */}
          {chartData.length > 0 ? (
            <ResponsiveContainer width="100%" height={220}>
              <LineChart
                data={chartData}
                margin={{ top: 8, right: 8, bottom: 0, left: -10 }}
              >
                <XAxis
                  dataKey="date"
                  tick={{ fontSize: 10, fill: "#9ca3af" }}
                  tickLine={false}
                />
                <YAxis
                  domain={[yMin, yMax]}
                  tick={{ fontSize: 10, fill: "#9ca3af" }}
                  tickLine={false}
                  axisLine={false}
                />
                <ReferenceArea
                  y1={healthyLow}
                  y2={healthyHigh}
                  fill="#22c55e"
                  fillOpacity={0.08}
                  strokeOpacity={0}
                />
                <Tooltip content={<CustomTooltip toolType={toolType} />} />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#4f46e5"
                  strokeWidth={2}
                  dot={{ r: 4, fill: "#4f46e5", strokeWidth: 0 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <p className="text-gray-400 text-sm text-center py-8">
              No data in this time range.
            </p>
          )}

          {/* Log History */}
          {sortedNewest.length > 0 && (
            <div className="mt-5 border-t border-gray-100 pt-4 space-y-2">
              <h3 className="text-sm font-medium text-gray-700 mb-3">
                History
              </h3>
              {sortedNewest.map((log) => {
                const val =
                  toolType === "bmi" ? log.bmiValue : log.hba1cPercent;
                const cat =
                  toolType === "bmi" ? log.bmiCategory : log.hba1cCategory;
                const catColor =
                  toolType === "bmi"
                    ? getBmiCategoryColor(cat)
                    : getHba1cCategoryColor(cat);

                return (
                  <div
                    key={log.id}
                    className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0"
                  >
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <span className="text-xs text-gray-500 whitespace-nowrap">
                        {formatDate(log.loggedAt)}
                      </span>
                      <span className="font-medium text-sm">
                        {toolType === "bmi" ? val : `${val}%`}
                      </span>
                      {cat && (
                        <span
                          className="px-1.5 py-0.5 text-xs font-medium text-white whitespace-nowrap"
                          style={{ backgroundColor: catColor }}
                        >
                          {cat}
                        </span>
                      )}
                      {log.notes && (
                        <span className="text-xs text-gray-400 truncate hidden sm:block">
                          {log.notes}
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => onDeleteLog(log.id)}
                      disabled={deleting === log.id}
                      className="ml-3 text-gray-300 hover:text-red-500 transition-colors disabled:opacity-40"
                      aria-label="Delete log"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default function DashboardClient() {
  const { user, token, isLoading } = useAuth();
  const router = useRouter();

  const [bmiLogs, setBmiLogs] = useState<ToolLog[]>([]);
  const [hba1cLogs, setHba1cLogs] = useState<ToolLog[]>([]);
  const [preferences, setPreferences] = useState<TrackingPreference[]>([]);
  const [bmiTimeFilter, setBmiTimeFilter] = useState<TimeFilter>("3M");
  const [hba1cTimeFilter, setHba1cTimeFilter] = useState<TimeFilter>("3M");
  const [deleting, setDeleting] = useState<string | null>(null);
  const [fetchError, setFetchError] = useState<string | null>(null);

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login");
    }
  }, [user, isLoading, router]);

  const fetchData = useCallback(async () => {
    if (!token) return;
    try {
      const [bmiRes, hba1cRes, prefRes] = await Promise.all([
        fetch(`${API_BASE_URL}/tracking/logs?toolType=bmi`, {
          headers: { Authorization: `Bearer ${token}` },
        }),
        fetch(`${API_BASE_URL}/tracking/logs?toolType=hba1c`, {
          headers: { Authorization: `Bearer ${token}` },
        }),
        fetch(`${API_BASE_URL}/tracking/preferences`, {
          headers: { Authorization: `Bearer ${token}` },
        }),
      ]);

      if (bmiRes.ok) setBmiLogs(await bmiRes.json());
      if (hba1cRes.ok) setHba1cLogs(await hba1cRes.json());
      if (prefRes.ok) setPreferences(await prefRes.json());
    } catch {
      setFetchError("Failed to load data. Please refresh.");
    }
  }, [token]);

  useEffect(() => {
    if (token) fetchData();
  }, [token, fetchData]);

  const handleDeleteLog = async (id: string) => {
    if (!token) return;
    setDeleting(id);
    try {
      const res = await fetch(`${API_BASE_URL}/tracking/logs/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        // Optimistic removal
        setBmiLogs((prev) => prev.filter((l) => l.id !== id));
        setHba1cLogs((prev) => prev.filter((l) => l.id !== id));
      }
    } finally {
      setDeleting(null);
    }
  };

  if (isLoading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-400">Loading...</p>
      </div>
    );
  }

  if (user.role === "admin") {
    return <AdminDashboardClient />;
  }

  const bmiPref = preferences.find((p) => p.toolType === "bmi") ?? null;
  const hba1cPref = preferences.find((p) => p.toolType === "hba1c") ?? null;

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Progress dashboard
          </h1>
          <p className="text-gray-600 text-sm">Track your logs over time.</p>
        </div>
      </section>

      <section className="bg-gray-50 py-10">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          {fetchError && (
            <p className="text-red-600 text-sm bg-red-50 border border-red-200 px-4 py-3">
              {fetchError}
            </p>
          )}

          <ToolSection
            toolType="bmi"
            logs={bmiLogs}
            preference={bmiPref}
            timeFilter={bmiTimeFilter}
            onTimeFilterChange={setBmiTimeFilter}
            onDeleteLog={handleDeleteLog}
            deleting={deleting}
          />

          <ToolSection
            toolType="hba1c"
            logs={hba1cLogs}
            preference={hba1cPref}
            timeFilter={hba1cTimeFilter}
            onTimeFilterChange={setHba1cTimeFilter}
            onDeleteLog={handleDeleteLog}
            deleting={deleting}
          />
        </div>
      </section>
    </div>
  );
}
