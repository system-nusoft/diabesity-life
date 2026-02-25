"use client";

import { useAuth } from "@/contexts/AuthContext";
import { formatTimeAgo, getAllPosts, Post } from "@/lib/communityData";
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

export default function CommunityClient() {
  const {
    user,
    isAdmin,
    isBanned,
    banUser,
    unbanUser,
    isUserBanned,
    isLoading,
  } = useAuth();
  const router = useRouter();

  // All hooks must be called before any conditional returns
  const [posts, setPosts] = useState<Post[]>(getAllPosts());
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set());
  const [deletedPosts, setDeletedPosts] = useState<Set<string>>(new Set());
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

  // Show loading state while checking auth
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  // Don't render if not authenticated
  if (!user) {
    return null;
  }

  const handleLikePost = (postId: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!user) {
      router.push("/login");
      return;
    }

    if (isBanned) return;

    setLikedPosts((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  const handleCreatePost = () => {
    if (!user) {
      router.push("/login");
      return;
    }
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

    setDeleteModalState({
      isOpen: true,
      postId,
      postTitle,
    });
  };

  const handleConfirmDelete = () => {
    setDeletedPosts((prev) => new Set([...prev, deleteModalState.postId]));
    setPosts((prev) => prev.filter((p) => p.id !== deleteModalState.postId));
  };

  const handleBanUser = (
    userId: string,
    userName: string,
    e: React.MouseEvent,
  ) => {
    e.preventDefault();
    e.stopPropagation();

    setBanModalState({
      isOpen: true,
      userId,
      userName,
      isBanned: isUserBanned(userId),
    });
  };

  const handleConfirmBan = () => {
    if (banModalState.isBanned) {
      unbanUser(banModalState.userId);
    } else {
      banUser(banModalState.userId);
    }
  };

  const visiblePosts = posts.filter((post) => !deletedPosts.has(post.id));

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
              <h1 className="text-3xl font-bold">Our community</h1>
              {isAdmin && (
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-white/20 text-sm rounded">
                  <Shield className="w-4 h-4" />
                  Admin
                </span>
              )}
            </div>
            <p className="text-white/80">
              Connect with others, share experiences, and support each other on
              your health journey.
            </p>
          </div>
        </div>

        {/* Banned User Banner */}
        {isBanned && (
          <div className="bg-red-500 text-white py-3">
            <div className="max-w-4xl mx-auto px-4 flex items-center gap-2">
              <Ban className="w-5 h-5" />
              <span>
                You have been banned from the community. You can view content
                but cannot post or interact.
              </span>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 py-6">
          {/* Create Post Button */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Latest posts
            </h2>
            <Button
              variant="primary"
              onClick={handleCreatePost}
              disabled={isBanned}
              className={isBanned ? "opacity-50 cursor-not-allowed" : ""}
            >
              <Plus className="w-4 h-4" />
              Create post
            </Button>
          </div>

          {/* Posts List */}
          <div className="flex flex-col space-y-4">
            {visiblePosts.map((post) => (
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
                          {isUserBanned(post.author.id) && (
                            <span className="text-xs text-red-500 bg-red-50 px-2 py-0.5 rounded">
                              Banned
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-500">
                          {formatTimeAgo(post.createdAt)}
                        </p>
                      </div>
                    </div>

                    {/* Admin Controls */}
                    {isAdmin && (
                      <div className="flex items-center gap-2">
                        <button
                          onClick={(e) =>
                            handleBanUser(post.author.id, post.author.name, e)
                          }
                          className={`p-2 rounded transition-colors ${
                            isUserBanned(post.author.id)
                              ? "text-green-600 hover:bg-green-50"
                              : "text-orange-500 hover:bg-orange-50"
                          }`}
                          title={
                            isUserBanned(post.author.id)
                              ? "Unban user"
                              : "Ban user"
                          }
                        >
                          {isUserBanned(post.author.id) ? (
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
                          title="Delete post"
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
                          : likedPosts.has(post.id)
                            ? "text-red-500"
                            : "text-gray-500 hover:text-red-500"
                      }`}
                    >
                      <Heart
                        className={`w-5 h-5 ${
                          likedPosts.has(post.id) && !isBanned
                            ? "fill-current"
                            : ""
                        }`}
                      />
                      <span>
                        {post.likes + (likedPosts.has(post.id) ? 1 : 0)}
                      </span>
                    </button>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <MessageCircle className="w-5 h-5" />
                      <span>{post.commentsCount} comments</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
