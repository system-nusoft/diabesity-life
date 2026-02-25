"use client";

import { useAuth } from "@/contexts/AuthContext";
import {
  Comment,
  formatTimeAgo,
  getCommentsByPostId,
  Post,
} from "@/lib/communityData";
import {
  ArrowLeft,
  Ban,
  Heart,
  MessageCircle,
  Send,
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

interface PostDetailClientProps {
  post: Post;
}

export default function PostDetailClient({ post }: PostDetailClientProps) {
  const { user, isAdmin, isBanned, banUser, unbanUser, isUserBanned, isLoading } =
    useAuth();
  const router = useRouter();
  const [comments, setComments] = useState<Comment[]>(
    getCommentsByPostId(post.id)
  );

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login");
    }
  }, [user, isLoading, router]);
  const [newComment, setNewComment] = useState("");
  const [isPostLiked, setIsPostLiked] = useState(false);
  const [likedComments, setLikedComments] = useState<Set<string>>(new Set());
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

  const handleLikePost = () => {
    if (!user) {
      router.push("/login");
      return;
    }
    if (isBanned) return;
    setIsPostLiked(!isPostLiked);
  };

  const handleLikeComment = (commentId: string) => {
    if (!user) {
      router.push("/login");
      return;
    }
    if (isBanned) return;

    setLikedComments((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(commentId)) {
        newSet.delete(commentId);
      } else {
        newSet.add(commentId);
      }
      return newSet;
    });
  };

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user) {
      router.push("/login");
      return;
    }

    if (isBanned) return;
    if (!newComment.trim()) return;

    setIsSubmitting(true);

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    const newCommentObj: Comment = {
      id: `c${Date.now()}`,
      postId: post.id,
      content: newComment.trim(),
      author: {
        id: user.id,
        email: user.email,
        name: user.email.split("@")[0],
      },
      createdAt: new Date().toISOString(),
      likes: 0,
    };

    setComments([newCommentObj, ...comments]);
    setNewComment("");
    setIsSubmitting(false);
  };

  const handleDeletePost = () => {
    setDeleteModalState({
      isOpen: true,
      type: "post",
      id: post.id,
      title: post.title,
    });
  };

  const handleDeleteComment = (commentId: string) => {
    setDeleteModalState({
      isOpen: true,
      type: "comment",
      id: commentId,
    });
  };

  const handleConfirmDelete = () => {
    if (deleteModalState.type === "post") {
      setIsPostDeleted(true);
      setTimeout(() => {
        router.push("/community");
      }, 1000);
    } else {
      setComments((prev) => prev.filter((c) => c.id !== deleteModalState.id));
    }
  };

  const handleBanUser = (userId: string, userName: string) => {
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

  if (isPostDeleted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Trash2 className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <p className="text-gray-600">Post deleted. Redirecting...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <BanConfirmationModal
        isOpen={banModalState.isOpen}
        onClose={() =>
          setBanModalState({ isOpen: false, userId: "", userName: "", isBanned: false })
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
        {/* Header */}
        <div className="bg-primary text-white py-4">
        <div className="max-w-4xl mx-auto px-4 flex items-center justify-between">
          <Link
            href="/community"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to community
          </Link>
          {isAdmin && (
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-white/20 text-sm rounded">
              <Shield className="w-4 h-4" />
              Admin
            </span>
          )}
        </div>
      </div>

      {/* Banned User Banner */}
      {isBanned && (
        <div className="bg-red-500 text-white py-3">
          <div className="max-w-4xl mx-auto px-4 flex items-center gap-2">
            <Ban className="w-5 h-5" />
            <span>
              You have been banned from the community. You can view content but
              cannot post or interact.
            </span>
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
                  <p className="font-medium text-gray-800">{post.author.name}</p>
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

            {/* Admin Controls for Post */}
            {isAdmin && (
              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    handleBanUser(post.author.id, post.author.name)
                  }
                  className={`p-2 rounded transition-colors ${
                    isUserBanned(post.author.id)
                      ? "text-green-600 hover:bg-green-50"
                      : "text-orange-500 hover:bg-orange-50"
                  }`}
                  title={
                    isUserBanned(post.author.id) ? "Unban user" : "Ban user"
                  }
                >
                  {isUserBanned(post.author.id) ? (
                    <UserCheck className="w-5 h-5" />
                  ) : (
                    <Ban className="w-5 h-5" />
                  )}
                </button>
                <button
                  onClick={handleDeletePost}
                  className="p-2 text-red-500 hover:bg-red-50 rounded transition-colors"
                  title="Delete post"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>

          {/* Post Title */}
          <h1 className="text-2xl font-bold text-gray-900 mb-4">{post.title}</h1>

          {/* Post Content */}
          <p className="text-gray-700 whitespace-pre-wrap mb-4">
            {post.content}
          </p>

          {/* Tags */}
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

          {/* Actions */}
          <div className="flex items-center gap-6 pt-4 border-t border-gray-100">
            <button
              onClick={handleLikePost}
              disabled={isBanned}
              className={`flex items-center gap-2 transition-colors ${
                isBanned
                  ? "text-gray-300 cursor-not-allowed"
                  : isPostLiked
                    ? "text-red-500"
                    : "text-gray-500 hover:text-red-500"
              }`}
            >
              <Heart
                className={`w-6 h-6 ${isPostLiked && !isBanned ? "fill-current" : ""}`}
              />
              <span className="font-medium">
                {post.likes + (isPostLiked ? 1 : 0)}
              </span>
            </button>
            <div className="flex items-center gap-2 text-gray-500">
              <MessageCircle className="w-6 h-6" />
              <span className="font-medium">{comments.length} comments</span>
            </div>
          </div>
        </div>

        {/* Comment Form */}
        <div className="bg-white border border-gray-200 p-4 mb-6">
          <h3 className="font-semibold text-gray-800 mb-3">Add a comment</h3>
          {user ? (
            isBanned ? (
              <div className="text-center py-4 bg-gray-50 rounded">
                <Ban className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500">
                  You cannot comment while banned.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitComment}>
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Share your thoughts..."
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
                    {isSubmitting ? "Posting..." : "Post comment"}
                  </Button>
                </div>
              </form>
            )
          ) : (
            <div className="text-center py-4">
              <p className="text-gray-600 mb-3">
                Please login to join the conversation
              </p>
              <Link href="/login">
                <Button variant="primary">Login to comment</Button>
              </Link>
            </div>
          )}
        </div>

        {/* Comments List */}
        <div className="space-y-4">
          <h3 className="font-semibold text-gray-800">
            Comments ({comments.length})
          </h3>

          {comments.length === 0 ? (
            <div className="bg-white border border-gray-200 p-8 text-center">
              <MessageCircle className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500">
                No comments yet. Be the first to share your thoughts!
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
                        {isUserBanned(comment.author.id) && (
                          <span className="text-xs text-red-500 bg-red-50 px-2 py-0.5 rounded">
                            Banned
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-500">
                        {formatTimeAgo(comment.createdAt)}
                      </p>
                    </div>
                  </div>

                  {/* Admin Controls for Comment */}
                  {isAdmin && (
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          handleBanUser(comment.author.id, comment.author.name)
                        }
                        className={`p-1.5 rounded transition-colors ${
                          isUserBanned(comment.author.id)
                            ? "text-green-600 hover:bg-green-50"
                            : "text-orange-500 hover:bg-orange-50"
                        }`}
                        title={
                          isUserBanned(comment.author.id)
                            ? "Unban user"
                            : "Ban user"
                        }
                      >
                        {isUserBanned(comment.author.id) ? (
                          <UserCheck className="w-4 h-4" />
                        ) : (
                          <Ban className="w-4 h-4" />
                        )}
                      </button>
                      <button
                        onClick={() => handleDeleteComment(comment.id)}
                        className="p-1.5 text-red-500 hover:bg-red-50 rounded transition-colors"
                        title="Delete comment"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Comment Content */}
                <p className="text-gray-700 mb-3">{comment.content}</p>

                {/* Comment Actions */}
                <button
                  onClick={() => handleLikeComment(comment.id)}
                  disabled={isBanned}
                  className={`flex items-center gap-2 text-sm transition-colors ${
                    isBanned
                      ? "text-gray-300 cursor-not-allowed"
                      : likedComments.has(comment.id)
                        ? "text-red-500"
                        : "text-gray-500 hover:text-red-500"
                  }`}
                >
                  <Heart
                    className={`w-4 h-4 ${
                      likedComments.has(comment.id) && !isBanned
                        ? "fill-current"
                        : ""
                    }`}
                  />
                  <span>
                    {comment.likes + (likedComments.has(comment.id) ? 1 : 0)}
                  </span>
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
    </>
  );
}
