"use client";

import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { API_BASE_URL } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Suspense } from "react";
import { Button } from "@/components/ui/button";

interface Category {
  id: string;
  name: string;
  slug: string;
  description: string | null;
}

function CreateThreadForm() {
  const { user, token, isLoading, isBanned } = useAuth();
  const { t } = useLanguage();
  const router = useRouter();
  const searchParams = useSearchParams();
  const preselectedCategoryId = searchParams.get("categoryId") ?? "";

  const [categories, setCategories] = useState<Category[]>([]);
  const [categoryId, setCategoryId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  // Helper: look up translated category name, fall back to API value
  const tCat = (slug: string, fallback: string) => {
    const key = `community.hub.categories.${slug}.name`;
    const val = t(key);
    return val === key ? fallback : val;
  };

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login");
    }
    if (!isLoading && isBanned) {
      router.push("/community");
    }
  }, [user, isLoading, isBanned, router]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/community/categories`)
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setCategories(data);
          // Pre-select from URL param, or fall back to first category
          const match = data.find((c: Category) => c.id === preselectedCategoryId);
          setCategoryId(match ? match.id : data[0]?.id ?? "");
        }
      })
      .catch(() => {});
  }, [preselectedCategoryId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !categoryId || !token) return;

    setIsSubmitting(true);
    setError("");

    try {
      const res = await fetch(`${API_BASE_URL}/community/threads`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          categoryId,
          title: title.trim(),
          description: description.trim() || undefined,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.message ?? "Failed to create thread.");
        return;
      }

      const thread = await res.json();
      router.push(`/community/threads/${thread.id}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500">{t("community.loading")}</p>
      </div>
    );
  }

  if (!user || isBanned) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-primary text-white py-4">
        <div className="max-w-4xl mx-auto px-4">
          <Link
            href="/community"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            {t("community.createThread.backLink")}
          </Link>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="bg-white border border-gray-200 p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            {t("community.createThread.heading")}
          </h1>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 mb-4 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Category */}
            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                {t("community.createThread.categoryLabel")} <span className="text-red-500">*</span>
              </label>
              <select
                id="category"
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary bg-white"
              >
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {tCat(cat.slug, cat.name)}
                  </option>
                ))}
              </select>
            </div>

            {/* Title */}
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                {t("community.createThread.titleLabel")} <span className="text-red-500">*</span>
              </label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder={t("community.createThread.titlePlaceholder")}
                required
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
              />
            </div>

            {/* Description */}
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                {t("community.createThread.descriptionLabel")}{" "}
                <span className="text-gray-400 font-normal">{t("community.createThread.descriptionOptional")}</span>
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder={t("community.createThread.descriptionPlaceholder")}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary resize-none"
              />
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
              <Link href="/community">
                <Button type="button" variant="outlined">
                  {t("community.createThread.cancel")}
                </Button>
              </Link>
              <Button
                type="submit"
                variant="primary"
                disabled={!title.trim() || !categoryId || isSubmitting}
              >
                {isSubmitting ? t("community.createThread.submitting") : t("community.createThread.submit")}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default function CreateThreadPage() {
  return (
    <Suspense>
      <CreateThreadForm />
    </Suspense>
  );
}
