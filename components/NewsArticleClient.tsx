"use client";

import { NewsArticle } from "@/lib/newsContent";

interface NewsArticleClientProps {
  article: NewsArticle;
}

export default function NewsArticleClient({
  article,
}: NewsArticleClientProps) {
  return (
    <div className="flex flex-col">
      {/* News Article Content */}
      <article className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            {article.title}
          </h1>

          {/* Featured Image */}
          <div className="mb-12">
            <img
              src={article.image}
              alt={article.imageAlt}
              className="w-full h-80 object-cover"
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            {article.content}
          </div>
        </div>
      </article>
    </div>
  );
}
