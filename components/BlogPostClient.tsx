"use client";

import { Post } from "@/lib/wordpress";

interface BlogPostClientProps {
  post: Post;
  content: React.ReactNode;
}

export default function BlogPostClient({ post, content }: BlogPostClientProps) {
  return (
    <div className="flex flex-col">
      {/* Blog Post Content */}
      <article className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            {post.title}
          </h1>

          {/* Date */}
          <div className="flex items-center gap-4 mb-8 text-gray-600">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
          </div>

          {/* Featured Image */}
          {post.featuredImage?.node.sourceUrl && (
            <div className="mb-12">
              <img
                src={post.featuredImage.node.sourceUrl}
                alt={post.featuredImage.node.altText || post.title}
                className="w-full h-auto object-cover"
              />
            </div>
          )}

          {/* Blog Content */}
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            {content}
          </div>
        </div>
      </article>
    </div>
  );
}
