"use client";

import { useAuth } from "@/contexts/AuthContext";
import { formatTimeAgo } from "@/lib/communityData";
import { Ban, CheckCircle, ExternalLink, Flag, Trash2 } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import BanConfirmationModal from "./BanConfirmationModal";
import DeleteConfirmationModal from "./DeleteConfirmationModal";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

interface CommentReport {
  id: string;
  commentId: string | null;
  commentContent: string;
  commentAuthorId: string;
  commentAuthorName: string;
  postId: string | null;
  reporterName: string;
  reason: string | null;
  status: string;
  createdAt: string;
}

export default function AdminDashboardClient() {
  const { token, banUser } = useAuth();
  const [reports, setReports] = useState<CommentReport[]>([]);
  const [loading, setLoading] = useState(true);
  const [actionPending, setActionPending] = useState<string | null>(null);
  const [pendingAction, setPendingAction] = useState<{
    type: "delete" | "ban";
    report: CommentReport;
  } | null>(null);

  const fetchReports = useCallback(async () => {
    if (!token) return;
    try {
      const res = await fetch(`${API_BASE_URL}/community/reports`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) setReports(await res.json());
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    fetchReports();
  }, [fetchReports]);

  const removeReport = (reportId: string) =>
    setReports((prev) => prev.filter((r) => r.id !== reportId));

  const handleIgnore = async (reportId: string) => {
    setActionPending(reportId + ":ignore");
    try {
      const res = await fetch(`${API_BASE_URL}/community/reports/${reportId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) removeReport(reportId);
    } finally {
      setActionPending(null);
    }
  };

  const execDeleteComment = async (report: CommentReport) => {
    if (!report.commentId) return;
    setActionPending(report.id + ":delete");
    try {
      const res = await fetch(
        `${API_BASE_URL}/community/comments/${report.commentId}`,
        {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      if (res.ok) {
        await fetch(`${API_BASE_URL}/community/reports/${report.id}`, {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` },
        });
        removeReport(report.id);
      }
    } finally {
      setActionPending(null);
    }
  };

  const execBanAuthor = async (report: CommentReport) => {
    setActionPending(report.id + ":ban");
    try {
      await banUser(report.commentAuthorId);
      await fetch(`${API_BASE_URL}/community/reports/${report.id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      removeReport(report.id);
    } finally {
      setActionPending(null);
    }
  };

  return (
    <>
      <DeleteConfirmationModal
        isOpen={pendingAction?.type === "delete"}
        onClose={() => setPendingAction(null)}
        onConfirm={() => {
          if (pendingAction?.type === "delete") execDeleteComment(pendingAction.report);
        }}
        type="comment"
      />
      <BanConfirmationModal
        isOpen={pendingAction?.type === "ban"}
        onClose={() => setPendingAction(null)}
        onConfirm={() => {
          if (pendingAction?.type === "ban") execBanAuthor(pendingAction.report);
        }}
        userName={pendingAction?.report.commentAuthorName ?? ""}
        isBanned={false}
      />
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Admin dashboard
          </h1>
          <p className="text-gray-600 text-sm">
            Review comments reported by users.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-10">
        <div className="max-w-4xl mx-auto px-6">
          {loading ? (
            <p className="text-gray-400 text-center py-16">
              Loading reports...
            </p>
          ) : reports.length === 0 ? (
            <div className="bg-white border border-gray-200 shadow-sm p-12 text-center">
              <CheckCircle className="w-10 h-10 text-green-500 mx-auto mb-3" />
              <p className="text-gray-700 font-medium">No pending reports</p>
              <p className="text-gray-400 text-sm mt-1">
                All clear — no comments have been reported.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-sm text-gray-500">
                {reports.length} pending report
                {reports.length !== 1 ? "s" : ""}
              </p>

              {reports.map((report) => {
                const isBusy = actionPending?.startsWith(report.id);
                return (
                  <div
                    key={report.id}
                    className="bg-white border border-gray-200 shadow-sm p-5"
                  >
                    {/* Report meta */}
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Flag className="w-3.5 h-3.5 text-orange-400" />
                        <span>
                          Reported by{" "}
                          <span className="font-medium text-gray-700">
                            {report.reporterName}
                          </span>{" "}
                          · {formatTimeAgo(report.createdAt)}
                        </span>
                      </div>
                      {report.postId && (
                        <Link
                          href={`/community/${report.postId}`}
                          className="flex items-center gap-1 text-xs text-primary hover:underline whitespace-nowrap"
                          target="_blank"
                        >
                          View post
                          <ExternalLink className="w-3 h-3" />
                        </Link>
                      )}
                    </div>

                    {/* Comment content */}
                    <div className="bg-gray-50 border border-gray-200 rounded px-4 py-3 mb-3">
                      <p className="text-xs text-gray-500 mb-1">
                        Comment by{" "}
                        <span className="font-medium text-gray-700">
                          {report.commentAuthorName}
                        </span>
                      </p>
                      <p className="text-gray-800 text-sm">
                        {report.commentContent}
                      </p>
                    </div>

                    {/* Report reason */}
                    {report.reason && (
                      <p className="text-xs text-gray-500 mb-3 italic">
                        Reason: &ldquo;{report.reason}&rdquo;
                      </p>
                    )}

                    {/* Actions */}
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => setPendingAction({ type: "delete", report })}
                        disabled={isBusy || !report.commentId}
                        className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-red-600 border border-red-200 hover:bg-red-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        Delete comment
                      </button>
                      <button
                        onClick={() => setPendingAction({ type: "ban", report })}
                        disabled={isBusy}
                        className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-orange-600 border border-orange-200 hover:bg-orange-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                      >
                        <Ban className="w-3.5 h-3.5" />
                        Ban author
                      </button>
                      <button
                        onClick={() => handleIgnore(report.id)}
                        disabled={isBusy}
                        className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-500 border border-gray-200 hover:bg-gray-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                      >
                        <CheckCircle className="w-3.5 h-3.5" />
                        Ignore
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
    </>
  );
}
