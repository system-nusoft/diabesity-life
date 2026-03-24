"use client";

import { useAuth } from "@/contexts/AuthContext";
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

export default function CommunityClient() {
  const { t, locale } = useLanguage();
  const { user, token, isAdmin, isBanned, banUser, unbanUser, isLoading } =
    useAuth();
  const router = useRouter();

  const [posts, setPosts] = useState<Post[]>([]);
  const [postsLoading, setPostsLoading] = useState(true);
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [banModalState, setBanModalState] = useState<{
    isOpen: boolean;
    userId: string;
    userName: string;
    isBanned: boolean;
  }>({ isOpen: false, userId: "", userName: "", isBanned: false });
  const [deleteModalState, setDeleteModalState] = useState<{
    isOpen: boolean;
    postId: string;
    postTitle: string;
  }>({ isOpen: false, postId: "", postTitle: "" });

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login");
    }
  }, [user, isLoading, router]);

  // Fetch posts from API
  useEffect(() => {
    if (isLoading) return;
    if (!user) return;

    const headers: Record<string, string> = {};
    if (token) headers["Authorization"] = `Bearer ${token}`;

    fetch(`${API_BASE_URL}/community/posts`, { headers })
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data)) setPosts(data);
      })
      .catch(() => {})
      .finally(() => setPostsLoading(false));
  }, [isLoading, user, token]);

  // Show loading state while checking auth
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500">{t("community.loading")}</p>
      </div>
    );
  }

  // Don't render if not authenticated
  if (!user) {
    return null;
  }

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

  const handleCreatePost = () => {
    if (isBanned) return;
    router.push("/community/create");
  };

  const handleDeletePost = (
    postId: string,
    postTitle: string,
    e: React.MouseEvent,
  ) => {
    e.preventDefault();
    e.stopPropagation();
    setDeleteModalState({ isOpen: true, postId, postTitle });
  };

  const handleConfirmDelete = async () => {
    if (!token) return;
    const res = await fetch(
      `${API_BASE_URL}/community/posts/${deleteModalState.postId}`,
      {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      },
    );
    if (res.ok) {
      setPosts((prev) => prev.filter((p) => p.id !== deleteModalState.postId));
    }
  };

  const handleBanUser = (
    userId: string,
    userName: string,
    currentlyBanned: boolean,
    e: React.MouseEvent,
  ) => {
    e.preventDefault();
    e.stopPropagation();
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
    // Update author ban status in posts list
    setPosts((prev) =>
      prev.map((p) =>
        p.author.id === banModalState.userId
          ? {
              ...p,
              author: {
                ...p.author,
                communityBanned: !banModalState.isBanned,
              },
            }
          : p,
      ),
    );
  };

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
        isOpen={deleteModalState.isOpen}
        onClose={() =>
          setDeleteModalState({ isOpen: false, postId: "", postTitle: "" })
        }
        onConfirm={handleConfirmDelete}
        type="post"
        title={deleteModalState.postTitle}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Header Section */}
        <div className="bg-primary text-white py-8">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl font-bold">{t("community.heading")}</h1>
              {isAdmin && (
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-white/20 text-sm rounded">
                  <Shield className="w-4 h-4" />
                  {t("community.adminBadge")}
                </span>
              )}
            </div>
            <p className="text-white/80">
              {t("community.description")}
            </p>
          </div>
        </div>

        {/* Banned User Banner */}
        {isBanned && (
          <div className="bg-red-500 text-white py-3">
            <div className="max-w-4xl mx-auto px-4 flex items-center gap-2">
              <Ban className="w-5 h-5" />
              <span>{t("community.bannedBanner")}</span>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 py-6">
          {/* Create Post Button */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">
              {t("community.latestPosts")}
            </h2>
            <Button
              variant="primary"
              onClick={handleCreatePost}
              disabled={isBanned}
              className={isBanned ? "opacity-50 cursor-not-allowed" : ""}
            >
              <Plus className="w-4 h-4" />
              {t("community.createPost")}
            </Button>
          </div>

          {/* Tag Filter */}
          {!postsLoading && allTags.length > 0 && (
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

          {/* Posts List */}
          {postsLoading ? (
            <div className="text-center py-12 text-gray-500">
              {t("community.loadingPosts")}
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              {activeTag
                ? `${t("community.noPostsTaggedPrefix")} "${activeTag}"${t("community.noPostsTaggedSuffix")}`
                : t("community.noPosts")}
            </div>
          ) : (
            <div className="flex flex-col space-y-4">
              {filteredPosts.map((post) => (
                <Link href={`/community/${post.id}`} key={post.id}>
                  <div className="bg-white border border-gray-200 p-5 hover:border-primary transition-colors cursor-pointer">
                    {/* Author Info */}
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

                      {/* Admin Controls */}
                      {isAdmin && (
                        <div className="flex items-center gap-2">
                          <button
                            onClick={(e) =>
                              handleBanUser(
                                post.author.id,
                                post.author.name,
                                !!post.author.communityBanned,
                                e,
                              )
                            }
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
                            onClick={(e) =>
                              handleDeletePost(post.id, post.title, e)
                            }
                            className="p-2 text-red-500 hover:bg-red-50 rounded transition-colors"
                            title={t("community.tooltips.deletePost")}
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Post Title */}
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {post.title}
                    </h3>

                    {/* Post Content Preview */}
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {post.content}
                    </p>

                    {/* Tags */}
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

                    {/* Actions */}
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
                          className={`w-5 h-5 ${
                            post.likedByMe && !isBanned ? "fill-current" : ""
                          }`}
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
