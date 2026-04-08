"use client";

import { useAuth } from "@/contexts/AuthContext";
import { useBreadcrumb } from "@/contexts/BreadcrumbContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { formatTimeAgo } from "@/lib/communityData";
import { API_BASE_URL } from "@/lib/utils";
import {
  Ban,
  Check,
  Flag,
  Heart,
  MessageCircle,
  Pencil,
  Send,
  Shield,
  Trash2,
  User,
  UserCheck,
  X,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import BanConfirmationModal from "./BanConfirmationModal";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import { Button } from "./ui/button";
import Link from "next/link";

const SUGGESTED_TAGS = [
  "Question",
  "Semaglutide",
  "GLP-1",
  "Type 1",
  "Type 2",
  "Diet",
  "Exercise",
  "Medication",
  "Insulin",
  "Weight Loss",
  "Success Story",
  "Tips",
  "Recipes",
  "Mental Health",
];

interface PostAuthor {
  id: string;
  email: string;
  name: string;
  role?: string;
  communityBanned?: boolean;
}

interface Post {
  id: string;
  title: string;
  content: string;
  author: PostAuthor;
  createdAt: string;
  likes: number;
  commentsCount: number;
  tags: string[];
  likedByMe: boolean;
  threadId: string | null;
}

interface ThreadInfo {
  id: string;
  title: string;
  category: { id: string; name: string; slug: string } | null;
}

interface Comment {
  id: string;
  postId: string;
  content: string;
  author: PostAuthor;
  createdAt: string;
  likes: number;
  likedByMe: boolean;
}

interface PostDetailClientProps {
  postId: string;
}

export default function PostDetailClient({ postId }: PostDetailClientProps) {
  const { t, locale } = useLanguage();
  const { user, token, isAdmin, isBanned, banUser, unbanUser, isLoading } =
    useAuth();
  const { setSegmentOverride, clearSegmentOverride, setCustomBreadcrumbs, clearCustomBreadcrumbs } = useBreadcrumb();
  const router = useRouter();

  const [post, setPost] = useState<Post | null>(null);
  const [thread, setThread] = useState<ThreadInfo | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [dataLoading, setDataLoading] = useState(true);
  const [newComment, setNewComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPostDeleted, setIsPostDeleted] = useState(false);
  const [banModalState, setBanModalState] = useState<{
    isOpen: boolean;
    userId: string;
    userName: string;
    isBanned: boolean;
  }>({ isOpen: false, userId: "", userName: "", isBanned: false });
  const [deleteModalState, setDeleteModalState] = useState<{
    isOpen: boolean;
    type: "post" | "comment";
    id: string;
    title?: string;
  }>({ isOpen: false, type: "post", id: "" });
  const [reportState, setReportState] = useState<{
    commentId: string | null;
    reason: string;
    submitting: boolean;
    submitted: Set<string>;
  }>({ commentId: null, reason: "", submitting: false, submitted: new Set() });
  const [postReportState, setPostReportState] = useState<{
    isOpen: boolean;
    reason: string;
    submitting: boolean;
    submitted: boolean;
  }>({ isOpen: false, reason: "", submitting: false, submitted: false });
  const [postEditState, setPostEditState] = useState<{
    isEditing: boolean;
    title: string;
    content: string;
    tags: string[];
    saving: boolean;
  }>({ isEditing: false, title: "", content: "", tags: [], saving: false });
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);
  const [commentEditContent, setCommentEditContent] = useState("");
  const [commentEditSaving, setCommentEditSaving] = useState(false);

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login");
    }
  }, [user, isLoading, router]);

  // Fetch post and comments
  useEffect(() => {
    if (isLoading || !user) return;

    const headers: Record<string, string> = {};
    if (token) headers["Authorization"] = `Bearer ${token}`;

    Promise.all([
      fetch(`${API_BASE_URL}/community/posts/${postId}`, { headers }).then(
        (r) => (r.ok ? r.json() : null),
      ),
      fetch(`${API_BASE_URL}/community/posts/${postId}/comments`, {
        headers,
      }).then((r) => (r.ok ? r.json() : [])),
    ])
      .then(([postData, commentsData]) => {
        if (!postData) {
          router.push("/community");
          return;
        }
        setPost(postData);
        setComments(Array.isArray(commentsData) ? commentsData : []);

        if (postData.threadId) {
          fetch(`${API_BASE_URL}/community/threads/${postData.threadId}`)
            .then((r) => (r.ok ? r.json() : null))
            .then((threadData) => {
              if (threadData) {
                setThread(threadData);
                const catKey = threadData.category
                  ? `community.hub.categories.${threadData.category.slug}.name`
                  : null;
                const catVal = catKey ? t(catKey) : null;
                const categoryLabel =
                  catVal && catVal !== catKey
                    ? catVal
                    : threadData.category?.name ?? t("community.breadcrumb.threads");
                setCustomBreadcrumbs([
                  { label: t("community.breadcrumb.home"), href: "/" },
                  { label: t("community.breadcrumb.community"), href: "/community" },
                  { label: categoryLabel, href: "/community" },
                  { label: threadData.title, href: `/community/threads/${postData.threadId}` },
                  { label: postData.title, href: `/community/${postId}` },
                ]);
              } else {
                setSegmentOverride(postId, postData.title);
              }
            })
            .catch(() => setSegmentOverride(postId, postData.title));
        } else {
          setSegmentOverride(postId, postData.title);
        }
      })
      .catch(() => router.push("/community"))
      .finally(() => setDataLoading(false));

    return () => {
      clearSegmentOverride(postId);
      clearCustomBreadcrumbs();
    };
  }, [isLoading, user, token, postId, router]);

  const handleLikePost = async () => {
    if (!user || isBanned || !token || !post) return;

    const res = await fetch(`${API_BASE_URL}/community/posts/${post.id}/like`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) return;

    const { liked, likes } = await res.json();
    setPost((prev) => (prev ? { ...prev, likes, likedByMe: liked } : prev));
  };

  const handleLikeComment = async (commentId: string) => {
    if (!user || isBanned || !token) return;

    const res = await fetch(
      `${API_BASE_URL}/community/comments/${commentId}/like`,
      {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
      },
    );
    if (!res.ok) return;

    const { liked, likes } = await res.json();
    setComments((prev) =>
      prev.map((c) =>
        c.id === commentId ? { ...c, likes, likedByMe: liked } : c,
      ),
    );
  };

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user || isBanned || !newComment.trim() || !token) return;

    setIsSubmitting(true);

    try {
      const res = await fetch(
        `${API_BASE_URL}/community/posts/${postId}/comments`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ content: newComment.trim() }),
        },
      );

      if (!res.ok) return;

      const newCommentObj: Comment = await res.json();
      setComments((prev) => [newCommentObj, ...prev]);
      setNewComment("");
      setPost((prev) =>
        prev ? { ...prev, commentsCount: prev.commentsCount + 1 } : prev,
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeletePost = () => {
    if (!post) return;
    setDeleteModalState({
      isOpen: true,
      type: "post",
      id: post.id,
      title: post.title,
    });
  };

  const handleDeleteComment = (commentId: string) => {
    setDeleteModalState({ isOpen: true, type: "comment", id: commentId });
  };

  const handleConfirmDelete = async () => {
    if (!token) return;

    if (deleteModalState.type === "post") {
      const res = await fetch(
        `${API_BASE_URL}/community/posts/${deleteModalState.id}`,
        { method: "DELETE", headers: { Authorization: `Bearer ${token}` } },
      );
      if (res.ok) {
        setIsPostDeleted(true);
        const dest = post?.threadId
          ? `/community/threads/${post.threadId}`
          : "/community";
        setTimeout(() => router.push(dest), 1000);
      }
    } else {
      const res = await fetch(
        `${API_BASE_URL}/community/comments/${deleteModalState.id}`,
        { method: "DELETE", headers: { Authorization: `Bearer ${token}` } },
      );
      if (res.ok) {
        setComments((prev) => prev.filter((c) => c.id !== deleteModalState.id));
        setPost((prev) =>
          prev
            ? { ...prev, commentsCount: Math.max(0, prev.commentsCount - 1) }
            : prev,
        );
      }
    }
  };

  const handleBanUser = (
    userId: string,
    userName: string,
    currentlyBanned: boolean,
  ) => {
    setBanModalState({
      isOpen: true,
      userId,
      userName,
      isBanned: currentlyBanned,
    });
  };

  const handleConfirmBan = async () => {
    if (banModalState.isBanned) {
      await unbanUser(banModalState.userId);
    } else {
      await banUser(banModalState.userId);
    }
    const newBanStatus = !banModalState.isBanned;
    // Update ban status in post author and comments
    setPost((prev) =>
      prev && prev.author.id === banModalState.userId
        ? { ...prev, author: { ...prev.author, communityBanned: newBanStatus } }
        : prev,
    );
    setComments((prev) =>
      prev.map((c) =>
        c.author.id === banModalState.userId
          ? { ...c, author: { ...c.author, communityBanned: newBanStatus } }
          : c,
      ),
    );
  };

  const handleSubmitReport = async (commentId: string) => {
    if (!token) return;
    setReportState((prev) => ({ ...prev, submitting: true }));
    try {
      const res = await fetch(
        `${API_BASE_URL}/community/comments/${commentId}/report`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            reason: reportState.reason.trim() || undefined,
          }),
        },
      );
      if (res.ok) {
        setReportState((prev) => ({
          ...prev,
          commentId: null,
          reason: "",
          submitted: new Set([...prev.submitted, commentId]),
        }));
      }
    } finally {
      setReportState((prev) => ({ ...prev, submitting: false }));
    }
  };

  const handleStartEditPost = () => {
    if (!post) return;
    setPostEditState({
      isEditing: true,
      title: post.title,
      content: post.content,
      tags: [...post.tags],
      saving: false,
    });
  };

  const handleEditTagToggle = (tag: string) => {
    setPostEditState((prev) => ({
      ...prev,
      tags: prev.tags.includes(tag)
        ? prev.tags.filter((t) => t !== tag)
        : [...prev.tags, tag],
    }));
  };

  const handleSavePost = async () => {
    if (!token || !post) return;
    setPostEditState((prev) => ({ ...prev, saving: true }));
    try {
      const res = await fetch(`${API_BASE_URL}/community/posts/${post.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title: postEditState.title.trim(),
          content: postEditState.content.trim(),
          tags: postEditState.tags,
        }),
      });
      if (res.ok) {
        const updated = await res.json();
        setPost((prev) =>
          prev
            ? {
                ...prev,
                title: updated.title,
                content: updated.content,
                tags: updated.tags,
              }
            : prev,
        );
        setPostEditState((prev) => ({ ...prev, isEditing: false }));
      }
    } finally {
      setPostEditState((prev) => ({ ...prev, saving: false }));
    }
  };

  const handleStartEditComment = (comment: Comment) => {
    setEditingCommentId(comment.id);
    setCommentEditContent(comment.content);
  };

  const handleSaveComment = async (commentId: string) => {
    if (!token) return;
    setCommentEditSaving(true);
    try {
      const res = await fetch(
        `${API_BASE_URL}/community/comments/${commentId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ content: commentEditContent.trim() }),
        },
      );
      if (res.ok) {
        setComments((prev) =>
          prev.map((c) =>
            c.id === commentId
              ? { ...c, content: commentEditContent.trim() }
              : c,
          ),
        );
        setEditingCommentId(null);
      }
    } finally {
      setCommentEditSaving(false);
    }
  };

  const handleSubmitPostReport = async () => {
    if (!token || !post) return;
    setPostReportState((prev) => ({ ...prev, submitting: true }));
    try {
      const res = await fetch(
        `${API_BASE_URL}/community/posts/${post.id}/report`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            reason: postReportState.reason.trim() || undefined,
          }),
        },
      );
      if (res.ok) {
        setPostReportState({
          isOpen: false,
          reason: "",
          submitting: false,
          submitted: true,
        });
      }
    } finally {
      setPostReportState((prev) => ({ ...prev, submitting: false }));
    }
  };

  // Show loading state while checking auth
  if (isLoading || dataLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500">{t("community.loading")}</p>
      </div>
    );
  }

  // Don't render if not authenticated
  if (!user || !post) {
    return null;
  }

  if (isPostDeleted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Trash2 className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <p className="text-gray-600">{t("community.detail.postDeleted")}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <BanConfirmationModal
        isOpen={banModalState.isOpen}
        onClose={() =>
          setBanModalState({
            isOpen: false,
            userId: "",
            userName: "",
            isBanned: false,
          })
        }
        onConfirm={handleConfirmBan}
        userName={banModalState.userName}
        isBanned={banModalState.isBanned}
      />

      <DeleteConfirmationModal
        isOpen={deleteModalState.isOpen}
        onClose={() =>
          setDeleteModalState({ isOpen: false, type: "post", id: "" })
        }
        onConfirm={handleConfirmDelete}
        type={deleteModalState.type}
        title={deleteModalState.title}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Banned User Banner */}
        {isBanned && (
          <div className="bg-red-500 text-white py-3">
            <div className="max-w-4xl mx-auto px-4 flex items-center gap-2">
              <Ban className="w-5 h-5" />
              <span>{t("community.detail.bannedBanner")}</span>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 py-6">
          {/* Post Card */}
          <div className="bg-white border border-gray-200 p-6 mb-6">
            {/* Author Info */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-medium text-gray-800">
                      {post.author.name}
                    </p>
                    {post.author.communityBanned && (
                      <span className="text-xs text-red-500 bg-red-50 px-2 py-0.5 rounded">
                        {t("community.bannedBadge")}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500">
                    {formatTimeAgo(post.createdAt, locale)}
                  </p>
                </div>
              </div>

              {/* Post Controls */}
              {isAdmin ? (
                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      handleBanUser(
                        post.author.id,
                        post.author.name,
                        !!post.author.communityBanned,
                      )
                    }
                    className={`p-2 rounded transition-colors ${
                      post.author.communityBanned
                        ? "text-green-600 hover:bg-green-50"
                        : "text-orange-500 hover:bg-orange-50"
                    }`}
                    title={
                      post.author.communityBanned ? t("community.tooltips.unbanUser") : t("community.tooltips.banUser")
                    }
                  >
                    {post.author.communityBanned ? (
                      <UserCheck className="w-5 h-5" />
                    ) : (
                      <Ban className="w-5 h-5" />
                    )}
                  </button>
                  <button
                    onClick={handleDeletePost}
                    className="p-2 text-red-500 hover:bg-red-50 rounded transition-colors"
                    title={t("community.tooltips.deletePost")}
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ) : user && post.author.id === user.id ? (
                <div className="flex items-center gap-1">
                  <button
                    onClick={handleStartEditPost}
                    className="p-2 text-gray-400 hover:text-primary hover:bg-primary/10 rounded transition-colors"
                    title={t("community.tooltips.editPost")}
                  >
                    <Pencil className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleDeletePost}
                    className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded transition-colors"
                    title={t("community.tooltips.deleteYourPost")}
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ) : null}
            </div>

            {/* Post Title / Content / Tags — edit mode or read mode */}
            {postEditState.isEditing ? (
              <div className="mb-4 space-y-3">
                <input
                  type="text"
                  value={postEditState.title}
                  onChange={(e) =>
                    setPostEditState((prev) => ({
                      ...prev,
                      title: e.target.value,
                    }))
                  }
                  className="w-full px-3 py-2 text-xl font-bold border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder={t("community.detail.postTitlePlaceholder")}
                />
                <textarea
                  value={postEditState.content}
                  onChange={(e) =>
                    setPostEditState((prev) => ({
                      ...prev,
                      content: e.target.value,
                    }))
                  }
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                  placeholder={t("community.detail.postContentPlaceholder")}
                />
                <div>
                  {postEditState.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-2">
                      {postEditState.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-primary text-white text-sm font-medium"
                        >
                          {tag}
                          <button
                            type="button"
                            onClick={() => handleEditTagToggle(tag)}
                            className="hover:bg-white/20 rounded-full p-0.5"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {SUGGESTED_TAGS.filter(
                      (t) => !postEditState.tags.includes(t),
                    ).map((tag) => (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => handleEditTagToggle(tag)}
                        className="px-3 py-1 border border-gray-300 text-gray-600 text-sm hover:border-primary hover:text-primary transition-colors"
                      >
                        + {tag}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="primary"
                    onClick={handleSavePost}
                    disabled={
                      postEditState.saving ||
                      !postEditState.title.trim() ||
                      !postEditState.content.trim() ||
                      postEditState.tags.length === 0
                    }
                    className="px-4 py-1 shadow-none"
                  >
                    <Check className="w-5 h-5" />
                    {postEditState.saving ? t("community.detail.saving") : t("community.detail.save")}
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() =>
                      setPostEditState((prev) => ({
                        ...prev,
                        isEditing: false,
                      }))
                    }
                    className="px-4 py-1"
                  >
                    <X className="w-5 h-5" />
                    {t("community.detail.cancel")}
                  </Button>
                </div>
              </div>
            ) : (
              <>
                <h1 className="text-2xl font-bold text-gray-900 mb-4">
                  {post.title}
                </h1>
                <p className="text-gray-700 whitespace-pre-wrap mb-4">
                  {post.content}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </>
            )}

            {/* Actions */}
            <div className="flex items-center gap-6 pt-4 border-t border-gray-100">
              <button
                onClick={handleLikePost}
                disabled={isBanned}
                className={`flex items-center gap-2 transition-colors ${
                  isBanned
                    ? "text-gray-300 cursor-not-allowed"
                    : post.likedByMe
                      ? "text-red-500"
                      : "text-gray-500 hover:text-red-500"
                }`}
              >
                <Heart
                  className={`w-6 h-6 ${post.likedByMe && !isBanned ? "fill-current" : ""}`}
                />
                <span className="font-medium">{post.likes}</span>
              </button>
              <div className="flex items-center gap-2 text-gray-500">
                <MessageCircle className="w-6 h-6" />
                <span className="font-medium">{comments.length} {t("community.detail.commentsCount")}</span>
              </div>

              {/* Post report — non-admin users who didn't write this post */}
              {user &&
                !isAdmin &&
                post.author.id !== user.id &&
                (postReportState.submitted ? (
                  <span className="ml-auto flex items-center gap-1 text-xs text-gray-400">
                    <Flag className="w-3.5 h-3.5" />
                    {t("community.detail.reported")}
                  </span>
                ) : postReportState.isOpen ? (
                  <div className="ml-auto flex items-center gap-2">
                    <input
                      type="text"
                      value={postReportState.reason}
                      onChange={(e) =>
                        setPostReportState((prev) => ({
                          ...prev,
                          reason: e.target.value,
                        }))
                      }
                      placeholder={t("community.detail.reasonPlaceholder")}
                      className="text-xs px-2 py-1 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                    <button
                      onClick={handleSubmitPostReport}
                      disabled={postReportState.submitting}
                      className="text-xs px-2 py-1 bg-primary text-white transition-colors disabled:opacity-60"
                    >
                      {postReportState.submitting ? t("community.detail.sending") : t("community.detail.send")}
                    </button>
                    <button
                      onClick={() =>
                        setPostReportState((prev) => ({
                          ...prev,
                          isOpen: false,
                          reason: "",
                        }))
                      }
                      className="text-xs text-gray-400 hover:text-gray-600"
                    >
                      {t("community.detail.cancel")}
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() =>
                      setPostReportState((prev) => ({
                        ...prev,
                        isOpen: true,
                        reason: "",
                      }))
                    }
                    className="ml-auto flex items-center gap-1 text-xs text-gray-400 hover:text-primary transition-colors"
                  >
                    <Flag className="w-3.5 h-3.5" />
                    {t("community.detail.report")}
                  </button>
                ))}
            </div>
          </div>

          {/* Comment Form */}
          <div className="bg-white border border-gray-200 p-4 mb-6">
            <h3 className="font-semibold text-gray-800 mb-3">{t("community.detail.addComment")}</h3>
            {user ? (
              isBanned ? (
                <div className="text-center py-4 bg-gray-50 rounded">
                  <Ban className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">
                    {t("community.detail.bannedComment")}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmitComment}>
                  <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder={t("community.detail.commentPlaceholder")}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary resize-none"
                  />
                  <div className="flex justify-end mt-3">
                    <Button
                      type="submit"
                      variant="primary"
                      disabled={!newComment.trim() || isSubmitting}
                    >
                      <Send className="w-4 h-4" />
                      {isSubmitting ? t("community.detail.posting") : t("community.detail.postComment")}
                    </Button>
                  </div>
                </form>
              )
            ) : (
              <div className="text-center py-4">
                <p className="text-gray-600 mb-3">
                  {t("community.detail.loginPrompt")}
                </p>
                <Link href="/login">
                  <Button variant="primary">{t("community.detail.loginButton")}</Button>
                </Link>
              </div>
            )}
          </div>

          {/* Comments List */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-800">
              {t("community.detail.commentsHeading")} ({comments.length})
            </h3>

            {comments.length === 0 ? (
              <div className="bg-white border border-gray-200 p-8 text-center">
                <MessageCircle className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                <p className="text-gray-500">
                  {t("community.detail.noComments")}
                </p>
              </div>
            ) : (
              comments.map((comment) => (
                <div
                  key={comment.id}
                  className="bg-white border border-gray-200 p-4"
                >
                  {/* Comment Author */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <User className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-medium text-gray-800 text-sm">
                            {comment.author.name}
                          </p>
                          {comment.author.role === "admin" && (
                            <span className="inline-flex items-center justify-center w-6 h-6 bg-primary border border-primary rounded text-primary">
                              <Shield className="w-4 h-4 text-white" />
                            </span>
                          )}
                          {comment.author.communityBanned && (
                            <span className="text-xs text-red-500 bg-red-50 px-2 py-0.5 rounded">
                              {t("community.bannedBadge")}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-gray-500">
                          {formatTimeAgo(comment.createdAt, locale)}
                        </p>
                      </div>
                    </div>

                    {/* Admin Controls for Comment */}
                    {isAdmin ? (
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            handleBanUser(
                              comment.author.id,
                              comment.author.name,
                              !!comment.author.communityBanned,
                            )
                          }
                          className={`p-1.5 rounded transition-colors ${
                            comment.author.communityBanned
                              ? "text-green-600 hover:bg-green-50"
                              : "text-orange-500 hover:bg-orange-50"
                          }`}
                          title={
                            comment.author.communityBanned
                              ? t("community.tooltips.unbanUser")
                              : t("community.tooltips.banUser")
                          }
                        >
                          {comment.author.communityBanned ? (
                            <UserCheck className="w-4 h-4" />
                          ) : (
                            <Ban className="w-4 h-4" />
                          )}
                        </button>
                        <button
                          onClick={() => handleDeleteComment(comment.id)}
                          className="p-1.5 text-red-500 hover:bg-red-50 rounded transition-colors"
                          title={t("community.tooltips.deleteComment")}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ) : user && comment.author.id === user.id ? (
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => handleStartEditComment(comment)}
                          className="p-1.5 text-gray-400 hover:text-primary hover:bg-primary/10 rounded transition-colors"
                          title={t("community.tooltips.editComment")}
                        >
                          <Pencil className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleDeleteComment(comment.id)}
                          className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded transition-colors"
                          title={t("community.tooltips.deleteYourComment")}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ) : null}
                  </div>

                  {/* Comment Content */}
                  {editingCommentId === comment.id ? (
                    <div className="mb-3 space-y-2">
                      <textarea
                        value={commentEditContent}
                        onChange={(e) => setCommentEditContent(e.target.value)}
                        rows={3}
                        className="w-full px-3 py-2 text-sm border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                      />
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleSaveComment(comment.id)}
                          disabled={
                            commentEditSaving || !commentEditContent.trim()
                          }
                          className="flex items-center gap-1 px-2.5 py-1 text-xs bg-primary text-white hover:bg-primary/90 transition-colors disabled:opacity-50"
                        >
                          <Check className="w-3.5 h-3.5" />
                          {commentEditSaving ? t("community.detail.saving") : t("community.detail.save")}
                        </button>
                        <button
                          onClick={() => setEditingCommentId(null)}
                          className="flex items-center gap-1 px-2.5 py-1 text-xs border border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors"
                        >
                          <X className="w-3.5 h-3.5" />
                          {t("community.detail.cancel")}
                        </button>
                      </div>
                    </div>
                  ) : (
                    <p className="text-gray-700 mb-3">{comment.content}</p>
                  )}

                  {/* Comment Actions */}
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => handleLikeComment(comment.id)}
                      disabled={isBanned}
                      className={`flex items-center gap-2 text-sm transition-colors ${
                        isBanned
                          ? "text-gray-300 cursor-not-allowed"
                          : comment.likedByMe
                            ? "text-red-500"
                            : "text-gray-500 hover:text-red-500"
                      }`}
                    >
                      <Heart
                        className={`w-4 h-4 ${
                          comment.likedByMe && !isBanned ? "fill-current" : ""
                        }`}
                      />
                      <span>{comment.likes}</span>
                    </button>

                    {/* Report button — non-admin users who didn't write this comment */}
                    {user &&
                      !isAdmin &&
                      comment.author.id !== user.id &&
                      (reportState.submitted.has(comment.id) ? (
                        <span className="text-xs text-gray-400 flex items-center gap-1">
                          <Flag className="w-3.5 h-3.5" />
                          {t("community.detail.reported")}
                        </span>
                      ) : reportState.commentId === comment.id ? (
                        <div className="flex-1 flex items-center gap-2">
                          <input
                            type="text"
                            value={reportState.reason}
                            onChange={(e) =>
                              setReportState((prev) => ({
                                ...prev,
                                reason: e.target.value,
                              }))
                            }
                            placeholder={t("community.detail.reasonPlaceholder")}
                            className="flex-1 text-xs px-2 py-1 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary"
                          />
                          <button
                            onClick={() => handleSubmitReport(comment.id)}
                            disabled={reportState.submitting}
                            className="text-xs px-2 py-1 bg-primary text-white transition-colors disabled:opacity-60"
                          >
                            {reportState.submitting ? t("community.detail.sending") : t("community.detail.send")}
                          </button>
                          <button
                            onClick={() =>
                              setReportState((prev) => ({
                                ...prev,
                                commentId: null,
                                reason: "",
                              }))
                            }
                            className="text-xs text-gray-400 hover:text-gray-600"
                          >
                            {t("community.detail.cancel")}
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() =>
                            setReportState((prev) => ({
                              ...prev,
                              commentId: comment.id,
                              reason: "",
                            }))
                          }
                          className="flex items-center gap-1 text-xs text-gray-400 hover:text-primary transition-colors"
                        >
                          <Flag className="w-3.5 h-3.5" />
                          {t("community.detail.report")}
                        </button>
                      ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}
