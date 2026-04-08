"use client";

import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { API_BASE_URL } from "@/lib/utils";
import { ArrowLeft, X } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const suggestedTags = [
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

export default function CreatePostClient() {
  const { t } = useLanguage();
  const { user, token, isLoading, isBanned } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const threadId = searchParams.get("threadId");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login");
    }
    if (!isLoading && isBanned) {
      router.push("/community");
    }
    if (!isLoading && user && !threadId) {
      router.push("/community");
    }
  }, [user, isLoading, isBanned, threadId, router]);

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !content.trim() || !token) return;

    setIsSubmitting(true);

    try {
      const res = await fetch(`${API_BASE_URL}/community/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title: title.trim(),
          content: content.trim(),
          tags: selectedTags,
          threadId: threadId ?? undefined,
        }),
      });

      if (!res.ok) throw new Error("Failed to create post");
      router.push(threadId ? `/community/threads/${threadId}` : "/community");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p>{t("community.loading")}</p>
      </div>
    );
  }

  if (!user || isBanned) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-primary text-white py-4">
        <div className="max-w-4xl mx-auto px-4">
          <Link
            href={threadId ? `/community/threads/${threadId}` : "/community"}
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            {t("community.createPage.backLink")}
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="bg-white border border-gray-200 p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            {t("community.createPage.heading")}
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title */}
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                {t("community.createPage.titleLabel")}
              </label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder={t("community.createPage.titlePlaceholder")}
                required
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
              />
            </div>

            {/* Content */}
            <div>
              <label
                htmlFor="content"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                {t("community.createPage.contentLabel")}
              </label>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder={t("community.createPage.contentPlaceholder")}
                rows={8}
                required
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary resize-none"
              />
            </div>

            {/* Tags */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t("community.createPage.tagsLabel")}
              </label>
              <p className="text-sm text-gray-500 mb-3">
                {t("community.createPage.tagsHint")}
              </p>

              {/* Selected Tags */}
              {selectedTags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {selectedTags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-primary text-white text-sm font-medium"
                    >
                      {tag}
                      <button
                        type="button"
                        onClick={() => handleTagToggle(tag)}
                        className="hover:bg-white/20 rounded-full p-0.5"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                </div>
              )}

              {/* Suggested Tags */}
              <div className="flex flex-wrap gap-2">
                {suggestedTags
                  .filter((tag) => !selectedTags.includes(tag))
                  .map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => handleTagToggle(tag)}
                      className="px-3 py-1 border border-gray-300 text-gray-600 text-sm hover:border-primary hover:text-primary transition-colors"
                    >
                      + {tag}
                    </button>
                  ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
              <Link
                href={
                  threadId ? `/community/threads/${threadId}` : "/community"
                }
              >
                <Button type="button" variant="outlined">
                  {t("community.createPage.cancel")}
                </Button>
              </Link>
              <Button
                type="submit"
                variant="primary"
                disabled={
                  !title.trim() ||
                  !content.trim() ||
                  selectedTags.length === 0 ||
                  isSubmitting
                }
              >
                {isSubmitting ? t("community.createPage.posting") : t("community.createPage.post")}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
