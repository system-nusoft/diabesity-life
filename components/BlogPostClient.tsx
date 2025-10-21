"use client";

import { BlogArticle } from "@/lib/blogContent";
import RelatedBlogs from "./RelatedBlogs";

interface BlogPostClientProps {
  blog: BlogArticle;
}

export default function BlogPostClient({ blog }: BlogPostClientProps) {
  return (
    <div className="flex flex-col">
      {/* Blog Post Content */}
      <article className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {blog.title}
          </h1>

          {/* Date */}
          <div className="flex items-center gap-4 mb-4 text-gray-600">
            <time dateTime={blog.date}>
              {new Date(blog.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
          </div>

          {/* Author */}
          <p className="text-md text-gray-900 mb-4 leading-tight float-end italic">
            {blog.author}
          </p>

          {/* Featured Image */}
          <div className="mb-12">
            <img
              src={blog.image}
              alt={blog.imageAlt}
              className="w-full h-96 object-cover"
            />
          </div>

          {/* Blog Content */}
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            {blog.content}
          </div>
        </div>
      </article>

      {/* Related Blogs Section */}
      {blog.relatedBlogs && blog.relatedBlogs.length > 0 && (
        <RelatedBlogs slugs={blog.relatedBlogs} />
      )}
    </div>
  );
}
