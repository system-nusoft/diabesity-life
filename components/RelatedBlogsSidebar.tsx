"use client";

import { BlogArticle, getBlogArticle } from "@/lib/blogContent";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";

interface RelatedBlogsSidebarProps {
  slugs: string[];
  title?: string;
}

export default function RelatedBlogsSidebar({
  slugs,
  title,
}: RelatedBlogsSidebarProps) {
  const { locale } = useLanguage();
  const blogs = slugs
    .map((slug) => getBlogArticle(slug))
    .filter((blog): blog is BlogArticle => blog !== null);

  if (blogs.length === 0) {
    return null;
  }

  const heading = title ?? (locale === "ur" ? "متعلقہ بلاگز" : "Related blogs");

  return (
    <div className="bg-gray-50 border-l-4 border-primary p-6">
      <h2 className="text-2xl font-bold text-primary mb-6">{heading}</h2>

      <ul className="space-y-4">
        {blogs.map((blog) => (
          <li key={blog.slug}>
            <Link
              href={`/blogs/${blog.slug}`}
              className="text-primary-text hover:text-primary transition-colors text-lg font-medium underline decoration-primary underline-offset-4"
              dir={locale === "ur" && blog.urdu ? "rtl" : undefined}
            >
              {locale === "ur" && blog.urdu ? blog.urdu.title : blog.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
