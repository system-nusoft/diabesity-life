"use client";

import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { formatTimeAgo } from "@/lib/communityData";
import { API_BASE_URL } from "@/lib/utils";
import {
  Ban,
  MessageSquare,
  Plus,
  Shield,
  Trash2,
  UserCheck,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import BanConfirmationModal from "./BanConfirmationModal";
import CommunitySidebar from "./CommunitySidebar";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import { Button } from "./ui/button";

interface ThreadAuthor {
  id: number;
  name: string;
  communityBanned: boolean;
  role?: string;
}

interface Thread {
  id: string;
  title: string;
  description: string | null;
  postCount: number;
  createdAt: string;
  author: ThreadAuthor;
  latestPost: { createdAt: string; authorName: string } | null;
}

interface Category {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  threads: Thread[];
}

export default function CommunityHubClient() {
  const { user, token, isAdmin, isBanned, banUser, unbanUser, isLoading } =
    useAuth();
  const { t, locale } = useLanguage();
  const router = useRouter();

  // Helper: look up translated category field, fall back to API value
  const tCat = (
    slug: string,
    field: "name" | "description",
    fallback: string,
  ) => {
    const key = `community.hub.categories.${slug}.${field}`;
    const val = t(key);
    return val === key ? fallback : val;
  };

  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login");
    }
  }, [user, isLoading, router]);
  const [banModalState, setBanModalState] = useState<{
    isOpen: boolean;
    userId: string;
    userName: string;
    isBanned: boolean;
  }>({ isOpen: false, userId: "", userName: "", isBanned: false });
  const [deleteModalState, setDeleteModalState] = useState<{
    isOpen: boolean;
    threadId: string;
    threadTitle: string;
  }>({ isOpen: false, threadId: "", threadTitle: "" });

  useEffect(() => {
    if (isLoading || !user) return;
    fetch(`${API_BASE_URL}/community/categories`)
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data)) setCategories(data);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [isLoading, user]);

  const handleStartThread = (categoryId: string) => {
    if (!user) {
      router.push("/login");
      return;
    }
    router.push(`/community/create-thread?categoryId=${categoryId}`);
  };

  const handleDeleteThread = (
    threadId: string,
    threadTitle: string,
    e: React.MouseEvent,
  ) => {
    e.preventDefault();
    e.stopPropagation();
    setDeleteModalState({ isOpen: true, threadId, threadTitle });
  };

  const handleConfirmDeleteThread = async () => {
    if (!token) return;
    const res = await fetch(
      `${API_BASE_URL}/community/threads/${deleteModalState.threadId}`,
      { method: "DELETE", headers: { Authorization: `Bearer ${token}` } },
    );
    if (res.ok) {
      setCategories((prev) =>
        prev.map((cat) => ({
          ...cat,
          threads: cat.threads.filter(
            (t) => t.id !== deleteModalState.threadId,
          ),
        })),
      );
    }
  };

  const handleBanUser = (
    userId: number,
    userName: string,
    currentlyBanned: boolean,
    e: React.MouseEvent,
  ) => {
    e.preventDefault();
    e.stopPropagation();
    setBanModalState({
      isOpen: true,
      userId: String(userId),
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
    setCategories((prev) =>
      prev.map((cat) => ({
        ...cat,
        threads: cat.threads.map((t) =>
          String(t.author.id) === banModalState.userId
            ? { ...t, author: { ...t.author, communityBanned: newBanStatus } }
            : t,
        ),
      })),
    );
  };

  if (isLoading || !user) return null;

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
          setDeleteModalState({
            isOpen: false,
            threadId: "",
            threadTitle: "",
          })
        }
        onConfirm={handleConfirmDeleteThread}
        type="thread"
        title={deleteModalState.threadTitle}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Page Header */}
        <div className="bg-primary text-white py-8">
          <div className="lg:max-w-4xl xl:max-w-6xl 2xl:max-w-6xl mx-auto px-6 lg:px-0">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl font-bold">
                {t("community.hub.heading")}
              </h1>
              {isAdmin && (
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-white/20 text-sm">
                  <Shield className="w-4 h-4" />
                  {t("community.adminBadge")}
                </span>
              )}
            </div>
            <p className="text-white/80">{t("community.hub.subtitle")}</p>
          </div>
        </div>

        {/* Banned Banner */}
        {isBanned && (
          <div className="bg-red-500 text-white py-3">
            <div className="lg:max-w-4xl xl:max-w-6xl 2xl:max-w-6xl mx-auto px-6 lg:px-0 flex items-center gap-2">
              <Ban className="w-5 h-5" />
              <span>{t("community.bannedBanner")}</span>
            </div>
          </div>
        )}

        {/* Main Layout */}
        <div className="lg:max-w-4xl xl:max-w-6xl 2xl:max-w-6xl mx-auto px-6 lg:px-0 py-8">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Categories column */}
            <div className="lg:col-span-2 space-y-6">
              {loading ? (
                <div className="text-center py-16 text-gray-500">
                  {t("community.hub.loadingCategories")}
                </div>
              ) : (
                categories.map((category) => (
                  <div
                    key={category.id}
                    className="bg-white border border-gray-200"
                  >
                    {/* Category header */}
                    <div className="bg-primary px-5 py-4">
                      <h2 className="text-lg font-bold text-white">
                        {tCat(category.slug, "name", category.name)}
                      </h2>
                      {category.description && (
                        <p className="text-white/80 text-sm mt-0.5">
                          {tCat(
                            category.slug,
                            "description",
                            category.description,
                          )}
                        </p>
                      )}
                    </div>

                    {/* Threads */}
                    {category.threads.length === 0 ? (
                      <div className="px-5 py-6 text-sm text-gray-500">
                        {t("community.hub.noThreads")}
                      </div>
                    ) : (
                      <div className="divide-y divide-gray-100">
                        {category.threads.map((thread) => (
                          <div key={thread.id} className="relative group">
                            <Link
                              href={`/community/threads/${thread.id}`}
                              className="flex items-start gap-4 px-5 py-4 hover:bg-gray-50 transition-colors"
                            >
                              {/* Icon */}
                              <div className="shrink-0 mt-0.5 w-9 h-9 bg-primary/10 flex items-center justify-center">
                                <MessageSquare className="w-5 h-5 text-primary" />
                              </div>

                              {/* Thread info */}
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 flex-wrap">
                                  <span className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                                    {thread.title}
                                  </span>
                                  {thread.author.communityBanned && (
                                    <span className="text-xs text-red-500 bg-red-50 px-2 py-0.5">
                                      {t("community.bannedBadge")}
                                    </span>
                                  )}
                                </div>
                                {thread.description && (
                                  <p className="text-sm text-gray-500 mt-0.5 line-clamp-1">
                                    {thread.description}
                                  </p>
                                )}
                                <div className="flex items-center gap-4 mt-1.5 text-xs">
                                  <span className="text-gray-500">
                                    {thread.postCount}{" "}
                                    {t("community.hub.posts")}
                                  </span>
                                  {thread.latestPost && (
                                    <span className="text-gray-500">
                                      {t("community.hub.latest")}{" "}
                                      {formatTimeAgo(
                                        thread.latestPost.createdAt,
                                        locale,
                                      )}
                                    </span>
                                  )}
                                  {thread.author.role !== "admin" && (
                                    <span className="italic text-gray-400">
                                      by {thread.author.name}
                                    </span>
                                  )}
                                </div>
                              </div>
                            </Link>

                            {/* Admin controls */}
                            {isAdmin && (
                              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                {thread.author.role !== "admin" && (
                                  <button
                                    onClick={(e) =>
                                      handleBanUser(
                                        thread.author.id,
                                        thread.author.name,
                                        thread.author.communityBanned,
                                        e,
                                      )
                                    }
                                    className={`p-1.5 rounded transition-colors ${
                                      thread.author.communityBanned
                                        ? "text-green-600 hover:bg-green-50"
                                        : "text-orange-500 hover:bg-orange-50"
                                    }`}
                                    title={
                                      thread.author.communityBanned
                                        ? t("community.tooltips.unbanUser")
                                        : t("community.tooltips.banUser")
                                    }
                                  >
                                    {thread.author.communityBanned ? (
                                      <UserCheck className="w-4 h-4" />
                                    ) : (
                                      <Ban className="w-4 h-4" />
                                    )}
                                  </button>
                                )}
                                <button
                                  onClick={(e) =>
                                    handleDeleteThread(
                                      thread.id,
                                      thread.title,
                                      e,
                                    )
                                  }
                                  className="p-1.5 text-red-500 hover:bg-red-50 rounded transition-colors"
                                  title={t("community.tooltips.deleteThread")}
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Start a thread */}
                    {!isBanned && (
                      <div className="px-5 py-3 border-t border-gray-100 bg-gray-50">
                        <button
                          onClick={() => handleStartThread(category.id)}
                          className="inline-flex items-center gap-1.5 text-sm text-primary font-medium hover:underline"
                        >
                          <Plus className="w-4 h-4" />
                          {t("community.hub.startThread")}
                        </button>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <CommunitySidebar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
