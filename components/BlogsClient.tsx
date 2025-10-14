"use client";

import { Card } from "@/components/ui/card";
import { Post } from "@/lib/wordpress";
import Link from "next/link";

interface BlogsClientProps {
  posts: Post[];
}

export default function BlogsClient({ posts }: BlogsClientProps) {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section
        className="relative h-[500px] md:h-[550px] overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2100')",
        }}
      >
        <div className="absolute inset-0 bg-gray-500/60"></div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">
            Stories, Science, and Solutions for Pakistan
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed max-w-5xl mb-2">
            Welcome to the Diabesity Blog—your go-to hub for cutting-edge
            insights on diabesity in Pakistan. From the latest research on
            diabetes and obesity prevention to heartfelt stories of weight loss
            for diabetics, we cover it all. Whether you're navigating side
            effects, seeking healthy living tips tailored to Pakistani diets, or
            exploring genetic risks, our posts deliver actionable advice backed
            by science and real experiences. New articles drop weekly—subscribe
            to never miss out!
          </p>
        </div>
      </section>

      {/* Blogs Grid Section */}
      <section className="pb-16 md:pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-8">
            Blogs
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(0, 8).map((post, idx) => (
              <Link key={idx} href={`/blogs/${post.slug}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow py-0 rounded-none cursor-pointer h-full">
                  <div className="relative h-64 bg-gray-200">
                    <div className="absolute bottom-4 left-4 bg-primary text-white px-3 py-1 text-xs font-semibold">
                      {new Date(post.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                      })}
                    </div>
                    <img
                      src={post.featuredImage?.node.sourceUrl || ""}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="px-6 py-6">
                    <p className="text-gray-600 text-sm mb-2">Blog</p>
                    <h3 className="font-bold text-gray-900 text-xl leading-tight">
                      {post.title}
                    </h3>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
