"use client";

import { ResearchArticle } from "@/lib/researchContent";

interface ResearchArticleClientProps {
  article: ResearchArticle;
}

export default function ResearchArticleClient({
  article,
}: ResearchArticleClientProps) {
  return (
    <div className="flex flex-col">
      {/* Research Article Content */}
      <article className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {article.title}
          </h1>

          {/* Metadata */}
          <div className="flex flex-col gap-2 mb-8 text-gray-600">
            {/* <div className="flex items-center gap-2">
              <span className="font-semibold">Authors:</span>
              <span>{article.authors}</span>
            </div> */}
            <div className="flex items-center gap-2">
              <span className="font-semibold">Journal:</span>
              <span className="italic">{article.journal}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">Published:</span>
              <time dateTime={article.date}>
                {new Date(article.date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-12">
            <img
              src={article.image}
              alt={article.imageAlt}
              className="w-full h-96 object-cover"
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
