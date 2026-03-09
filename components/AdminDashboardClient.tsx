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
  kind: "comment";
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

interface PostReport {
  kind: "post";
  id: string;
  postId: string | null;
  postTitle: string;
  postAuthorId: string;
  postAuthorName: string;
  reporterName: string;
  reason: string | null;
  status: string;
  createdAt: string;
}

type Report = CommentReport | PostReport;

export default function AdminDashboardClient() {
  const { token, banUser } = useAuth();
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(true);
  const [actionPending, setActionPending] = useState<string | null>(null);
  const [pendingAction, setPendingAction] = useState<{
    type: "delete" | "ban";
    report: Report;
  } | null>(null);

  const fetchReports = useCallback(async () => {
    if (!token) return;
    try {
      const [commentRes, postRes] = await Promise.all([
        fetch(`${API_BASE_URL}/community/reports`, {
          headers: { Authorization: `Bearer ${token}` },
        }),
        fetch(`${API_BASE_URL}/community/post-reports`, {
          headers: { Authorization: `Bearer ${token}` },
        }),
      ]);

      const commentReports = commentRes.ok
        ? ((await commentRes.json()) as Omit<CommentReport, "kind">[]).map(
            (r) => ({ ...r, kind: "comment" as const })
          )
        : [];
      const postReports = postRes.ok
        ? ((await postRes.json()) as Omit<PostReport, "kind">[]).map((r) => ({
            ...r,
            kind: "post" as const,
          }))
        : [];

      const combined = [...commentReports, ...postReports].sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      setReports(combined);
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    fetchReports();
  }, [fetchReports]);

  const removeReport = (reportId: string) =>
    setReports((prev) => prev.filter((r) => r.id !== reportId));

  const handleIgnore = async (report: Report) => {
    const reportId = report.id;
    setActionPending(reportId + ":ignore");
    try {
      const endpoint =
        report.kind === "post"
          ? `${API_BASE_URL}/community/post-reports/${reportId}`
          : `${API_BASE_URL}/community/reports/${reportId}`;
      const res = await fetch(endpoint, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) removeReport(reportId);
    } finally {
      setActionPending(null);
    }
  };

  const execDelete = async (report: Report) => {
    setActionPending(report.id + ":delete");
    try {
      if (report.kind === "comment") {
        if (!report.commentId) return;
        const res = await fetch(
          `${API_BASE_URL}/community/comments/${report.commentId}`,
          {
            method: "DELETE",
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        if (res.ok) {
          await fetch(`${API_BASE_URL}/community/reports/${report.id}`, {
            method: "DELETE",
            headers: { Authorization: `Bearer ${token}` },
          });
          removeReport(report.id);
        }
      } else {
        if (!report.postId) return;
        const res = await fetch(
          `${API_BASE_URL}/community/posts/${report.postId}`,
          {
            method: "DELETE",
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        if (res.ok) {
          await fetch(`${API_BASE_URL}/community/post-reports/${report.id}`, {
            method: "DELETE",
            headers: { Authorization: `Bearer ${token}` },
          });
          removeReport(report.id);
        }
      }
    } finally {
      setActionPending(null);
    }
  };

  const execBan = async (report: Report) => {
    const authorId =
      report.kind === "comment" ? report.commentAuthorId : report.postAuthorId;
    setActionPending(report.id + ":ban");
    try {
      await banUser(authorId);
      const endpoint =
        report.kind === "post"
          ? `${API_BASE_URL}/community/post-reports/${report.id}`
          : `${API_BASE_URL}/community/reports/${report.id}`;
      await fetch(endpoint, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      removeReport(report.id);
    } finally {
      setActionPending(null);
    }
  };

  const getAuthorName = (report: Report) =>
    report.kind === "comment" ? report.commentAuthorName : report.postAuthorName;

  const deleteModalType = (report: Report): "comment" | "post" =>
    report.kind === "comment" ? "comment" : "post";

  return (
    <>
      <DeleteConfirmationModal
        isOpen={pendingAction?.type === "delete"}
        onClose={() => setPendingAction(null)}
        onConfirm={() => {
          if (pendingAction?.type === "delete") execDelete(pendingAction.report);
        }}
        type={pendingAction ? deleteModalType(pendingAction.report) : "comment"}
      />
      <BanConfirmationModal
        isOpen={pendingAction?.type === "ban"}
        onClose={() => setPendingAction(null)}
        onConfirm={() => {
          if (pendingAction?.type === "ban") execBan(pendingAction.report);
        }}
        userName={pendingAction ? getAuthorName(pendingAction.report) : ""}
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
            Review posts and comments reported by users.
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
                All clear — nothing has been reported.
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
                const authorName = getAuthorName(report);
                const isPost = report.kind === "post";
                const canDelete = isPost ? !!report.postId : !!report.commentId;

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
                          {isPost ? (
                            <span className="font-medium text-orange-600 mr-1">Post</span>
                          ) : (
                            <span className="font-medium text-blue-600 mr-1">Comment</span>
                          )}
                          reported by{" "}
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

                    {/* Content snapshot */}
                    <div className="bg-gray-50 border border-gray-200 rounded px-4 py-3 mb-3">
                      <p className="text-xs text-gray-500 mb-1">
                        {isPost ? "Post" : "Comment"} by{" "}
                        <span className="font-medium text-gray-700">
                          {authorName}
                        </span>
                      </p>
                      <p className="text-gray-800 text-sm">
                        {isPost
                          ? report.postTitle
                          : report.commentContent}
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
                        disabled={isBusy || !canDelete}
                        className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-red-600 border border-red-200 hover:bg-red-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        Delete {isPost ? "post" : "comment"}
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
                        onClick={() => handleIgnore(report)}
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
