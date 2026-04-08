"use client";

import { useAuth } from "@/contexts/AuthContext";
import { useBreadcrumb } from "@/contexts/BreadcrumbContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { formatTimeAgo } from "@/lib/communityData";
import { API_BASE_URL } from "@/lib/utils";
import {
  Ban,
  Heart,
  MessageCircle,
  Plus,
  Shield,
  Trash2,
  User,
  UserCheck,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import BanConfirmationModal from "./BanConfirmationModal";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import { Button } from "./ui/button";

interface PostAuthor {
  id: string;
  email: string;
  name: string;
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
}

interface ThreadInfo {
  id: string;
  title: string;
  description: string | null;
  postCount: number;
  author: { id: string; name: string; communityBanned: boolean; role?: string } | null;
  category: { id: string; name: string; slug: string } | null;
}

interface CommunityThreadClientProps {
  threadId: string;
}

export default function CommunityThreadClient({
  threadId,
}: CommunityThreadClientProps) {
  const { user, token, isAdmin, isBanned, banUser, unbanUser, isLoading } =
    useAuth();
  const { setSegmentOverride, clearSegmentOverride } = useBreadcrumb();
  const { t, locale } = useLanguage();
  const router = useRouter();

  const [thread, setThread] = useState<ThreadInfo | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [dataLoading, setDataLoading] = useState(true);
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const [banModalState, setBanModalState] = useState<{
    isOpen: boolean;
    userId: string;
    userName: string;
    isBanned: boolean;
  }>({ isOpen: false, userId: "", userName: "", isBanned: false });
  const [deletePostModal, setDeletePostModal] = useState<{
    isOpen: boolean;
    postId: string;
    postTitle: string;
  }>({ isOpen: false, postId: "", postTitle: "" });
  const [deleteThreadModal, setDeleteThreadModal] = useState(false);

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login");
    }
  }, [user, isLoading, router]);

  useEffect(() => {
    if (isLoading || !user) return;

    const headers: Record<string, string> = {};
    if (token) headers["Authorization"] = `Bearer ${token}`;

    Promise.all([
      fetch(`${API_BASE_URL}/community/threads/${threadId}`).then((r) =>
        r.ok ? r.json() : null,
      ),
      fetch(`${API_BASE_URL}/community/posts?threadId=${threadId}`, {
        headers,
      }).then((r) => (r.ok ? r.json() : [])),
    ])
      .then(([threadData, postsData]) => {
        if (!threadData) {
          router.push("/community");
          return;
        }
        setThread(threadData);
        setSegmentOverride(threadId, threadData.title);
        if (threadData.category) {
          const catKey = `community.hub.categories.${threadData.category.slug}.name`;
          const catVal = t(catKey);
          setSegmentOverride(
            "threads",
            catVal === catKey ? threadData.category.name : catVal,
          );
        }
        if (Array.isArray(postsData)) setPosts(postsData);
      })
      .catch(() => router.push("/community"))
      .finally(() => setDataLoading(false));
  }, [isLoading, user, token, threadId, router]);

  useEffect(() => {
    return () => {
      clearSegmentOverride(threadId);
      clearSegmentOverride("threads");
    };
  }, [threadId]);

  const handleLikePost = async (postId: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isBanned || !token) return;

    const res = await fetch(`${API_BASE_URL}/community/posts/${postId}/like`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) return;
    const { liked, likes } = await res.json();
    setPosts((prev) =>
      prev.map((p) =>
        p.id === postId ? { ...p, likes, likedByMe: liked } : p,
      ),
    );
  };

  const handleConfirmDeletePost = async () => {
    if (!token) return;
    const res = await fetch(
      `${API_BASE_URL}/community/posts/${deletePostModal.postId}`,
      { method: "DELETE", headers: { Authorization: `Bearer ${token}` } },
    );
    if (res.ok) {
      setPosts((prev) => prev.filter((p) => p.id !== deletePostModal.postId));
    }
  };

  const handleConfirmDeleteThread = async () => {
    if (!token) return;
    const res = await fetch(`${API_BASE_URL}/community/threads/${threadId}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    if (res.ok) router.push("/community");
  };

  const handleConfirmBan = async () => {
    if (banModalState.isBanned) {
      await unbanUser(banModalState.userId);
    } else {
      await banUser(banModalState.userId);
    }
    const newStatus = !banModalState.isBanned;
    setPosts((prev) =>
      prev.map((p) =>
        p.author.id === banModalState.userId
          ? { ...p, author: { ...p.author, communityBanned: newStatus } }
          : p,
      ),
    );
    if (thread?.author && String(thread.author.id) === banModalState.userId) {
      setThread((prev) =>
        prev && prev.author
          ? { ...prev, author: { ...prev.author, communityBanned: newStatus } }
          : prev,
      );
    }
  };

  if (isLoading || dataLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500">{t("community.loading")}</p>
      </div>
    );
  }

  if (!user || !thread) return null;

  const allTags = Array.from(new Set(posts.flatMap((p) => p.tags))).sort();
  const filteredPosts = activeTag
    ? posts.filter((p) => p.tags.includes(activeTag))
    : posts;

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
        isOpen={deletePostModal.isOpen}
        onClose={() =>
          setDeletePostModal({ isOpen: false, postId: "", postTitle: "" })
        }
        onConfirm={handleConfirmDeletePost}
        type="post"
        title={deletePostModal.postTitle}
      />

      <DeleteConfirmationModal
        isOpen={deleteThreadModal}
        onClose={() => setDeleteThreadModal(false)}
        onConfirm={handleConfirmDeleteThread}
        type="thread"
        title={thread.title}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-primary text-white py-6">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold">{thread.title}</h1>
                {thread.description && (
                  <p className="text-white/80 text-sm mt-1">
                    {thread.description}
                  </p>
                )}
              </div>
              <div className="flex items-center gap-2 shrink-0">
                {isAdmin && (
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-white/20 text-sm">
                    <Shield className="w-4 h-4" />
                    {t("community.adminBadge")}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Banned Banner */}
        {isBanned && (
          <div className="bg-red-500 text-white py-3">
            <div className="max-w-4xl mx-auto px-4 flex items-center gap-2">
              <Ban className="w-5 h-5" />
              <span>{t("community.bannedBanner")}</span>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 py-6">
          {/* Actions bar */}
          <div className="flex justify-between items-center mb-6">
            <p className="text-sm text-gray-500">
              {posts.length} {posts.length !== 1 ? t("community.thread.postCountPlural") : t("community.thread.postCount")}
            </p>
            <div className="flex items-center gap-2">
              {isAdmin && thread.author && (
                <>
                  {thread.author.role !== "admin" && (
                    <button
                      onClick={() =>
                        setBanModalState({
                          isOpen: true,
                          userId: String(thread.author!.id),
                          userName: thread.author!.name,
                          isBanned: thread.author!.communityBanned,
                        })
                      }
                      className={`p-2 rounded transition-colors ${
                        thread.author.communityBanned
                          ? "text-green-600 hover:bg-green-50"
                          : "text-orange-500 hover:bg-orange-50"
                      }`}
                      title={
                        thread.author.communityBanned
                          ? t("community.tooltips.unbanThreadAuthor")
                          : t("community.tooltips.banThreadAuthor")
                      }
                    >
                      {thread.author.communityBanned ? (
                        <UserCheck className="w-5 h-5" />
                      ) : (
                        <Ban className="w-5 h-5" />
                      )}
                    </button>
                  )}
                  <button
                    onClick={() => setDeleteThreadModal(true)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded transition-colors"
                    title={t("community.tooltips.deleteThread")}
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </>
              )}
              {!isBanned && (
                <Button
                  variant="primary"
                  onClick={() =>
                    router.push(`/community/create?threadId=${threadId}`)
                  }
                >
                  <Plus className="w-4 h-4" />
                  {t("community.thread.createPost")}
                </Button>
              )}
            </div>
          </div>

          {/* Tag Filter */}
          {allTags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              <button
                onClick={() => setActiveTag(null)}
                className={`px-3 py-1.5 text-sm font-medium border transition-colors ${
                  activeTag === null
                    ? "bg-primary text-white border-primary"
                    : "bg-white text-gray-600 border-gray-300 hover:border-primary hover:text-primary"
                }`}
              >
                {t("community.allFilter")}
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                  className={`px-3 py-1.5 text-sm font-medium border transition-colors ${
                    activeTag === tag
                      ? "bg-primary text-white border-primary"
                      : "bg-white text-gray-600 border-gray-300 hover:border-primary hover:text-primary"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          )}

          {/* Posts */}
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12 text-gray-500 bg-white border border-gray-200">
              {activeTag
                ? `${t("community.noPostsTaggedPrefix")} "${activeTag}"${t("community.noPostsTaggedSuffix")}`
                : t("community.thread.noPosts")}
            </div>
          ) : (
            <div className="flex flex-col space-y-4">
              {filteredPosts.map((post) => (
                <Link href={`/community/${post.id}`} key={post.id}>
                  <div className="bg-white border border-gray-200 p-5 hover:border-primary transition-colors cursor-pointer">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <User className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="font-medium text-gray-800">
                              {post.author.name}
                            </p>
                            {post.author.communityBanned && (
                              <span className="text-xs text-red-500 bg-red-50 px-2 py-0.5">
                                {t("community.bannedBadge")}
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-gray-500">
                            {formatTimeAgo(post.createdAt, locale)}
                          </p>
                        </div>
                      </div>

                      {isAdmin && (
                        <div className="flex items-center gap-2">
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              setBanModalState({
                                isOpen: true,
                                userId: post.author.id,
                                userName: post.author.name,
                                isBanned: !!post.author.communityBanned,
                              });
                            }}
                            className={`p-2 rounded transition-colors ${
                              post.author.communityBanned
                                ? "text-green-600 hover:bg-green-50"
                                : "text-orange-500 hover:bg-orange-50"
                            }`}
                            title={
                              post.author.communityBanned
                                ? t("community.tooltips.unbanUser")
                                : t("community.tooltips.banUser")
                            }
                          >
                            {post.author.communityBanned ? (
                              <UserCheck className="w-5 h-5" />
                            ) : (
                              <Ban className="w-5 h-5" />
                            )}
                          </button>
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              setDeletePostModal({
                                isOpen: true,
                                postId: post.id,
                                postTitle: post.title,
                              });
                            }}
                            className="p-2 text-red-500 hover:bg-red-50 rounded transition-colors"
                            title={t("community.tooltips.deletePost")}
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      )}
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {post.content}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-6 pt-3 border-t border-gray-100">
                      <button
                        onClick={(e) => handleLikePost(post.id, e)}
                        disabled={isBanned}
                        className={`flex items-center gap-2 text-sm transition-colors ${
                          isBanned
                            ? "text-gray-300 cursor-not-allowed"
                            : post.likedByMe
                              ? "text-red-500"
                              : "text-gray-500 hover:text-red-500"
                        }`}
                      >
                        <Heart
                          className={`w-5 h-5 ${post.likedByMe && !isBanned ? "fill-current" : ""}`}
                        />
                        <span>{post.likes}</span>
                      </button>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <MessageCircle className="w-5 h-5" />
                        <span>{post.commentsCount} {t("community.comments")}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
