"use client";

import { BlogArticle } from "@/lib/blogContent";
import { useState } from "react";
import RelatedBlogsSidebar from "./RelatedBlogsSidebar";

interface BlogPostClientProps {
  blog: BlogArticle;
}

export default function BlogPostClient({ blog }: BlogPostClientProps) {
  const [language, setLanguage] = useState<"en" | "ur">("en");
  const hasUrdu = !!blog.urdu;

  const currentTitle =
    language === "ur" && blog.urdu ? blog.urdu.title : blog.title;
  const currentAuthor =
    language === "ur" && blog.urdu?.author ? blog.urdu.author : blog.author;
  const currentContent =
    language === "ur" && blog.urdu ? blog.urdu.content : blog.content;

  return (
    <div className="flex flex-col">
      {/* Blog Post Content */}
      <article className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-0">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Blog Content */}
            <div className="flex-1 lg:max-w-4xl">
              {/* Language Toggle - Only show if Urdu translation is available */}
              {hasUrdu && (
                <div className="flex justify-end mb-6">
                  <div className="inline-flex shadow-sm" role="group">
                    <button
                      type="button"
                      onClick={() => setLanguage("en")}
                      className={`px-4 py-2 text-sm font-medium border ${
                        language === "en"
                          ? "bg-primary text-white border-primary"
                          : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                      } transition-colors`}
                    >
                      English
                    </button>
                    <button
                      type="button"
                      onClick={() => setLanguage("ur")}
                      className={`px-4 py-2 text-sm font-medium border-t border-b border-r ${
                        language === "ur"
                          ? "bg-primary text-white border-primary"
                          : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                      } transition-colors`}
                    >
                      اردو
                    </button>
                  </div>
                </div>
              )}

              {/* Title */}
              <h1
                className={`text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight ${
                  language === "ur" ? "text-right" : ""
                }`}
              >
                {currentTitle}
              </h1>

              {/* Date */}
              <div
                className={`flex items-center gap-4 mb-4 text-gray-600 ${
                  language === "ur" ? "flex-row-reverse" : ""
                }`}
              >
                <time dateTime={blog.date}>
                  {new Date(blog.date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
              </div>

              {/* Author */}
              {currentAuthor && (
                <p
                  className={`text-md text-gray-900 mb-4 leading-tight italic ${
                    language === "ur" ? "float-start text-right" : "float-end"
                  }`}
                >
                  {currentAuthor}
                </p>
              )}

              {/* Featured Image */}
              <div className="mb-12">
                <img
                  src={blog.image}
                  alt={blog.imageAlt}
                  className="w-full h-96 object-cover"
                />
              </div>

              {/* Blog Content */}
              <div
                className={`prose prose-lg max-w-none text-gray-700 leading-relaxed ${
                  language === "ur" ? "text-right" : ""
                }`}
              >
                {currentContent}
              </div>
            </div>

            {/* Sidebar - Related Blogs */}
            {blog.relatedBlogs && blog.relatedBlogs.length > 0 && (
              <aside className="lg:w-80 lg:max-w-2xl">
                <div className="lg:sticky lg:top-24">
                  <RelatedBlogsSidebar slugs={blog.relatedBlogs} />
                </div>
              </aside>
            )}
          </div>
        </div>
      </article>
    </div>
  );
}
