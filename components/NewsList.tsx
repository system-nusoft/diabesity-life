"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { NewsArticle } from "@/lib/newsContent";
import Link from "next/link";

interface NewsListProps {
  news: NewsArticle[];
}

export default function NewsList({ news }: NewsListProps) {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-12">
      <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-8">
        News
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {news.map((article, idx) => (
          <Link key={idx} href={`/news/${article.slug}`}>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow bg-white py-0 pb-6 rounded-none h-full cursor-pointer">
              <div className="relative bg-gray-200">
                <div
                  className={`absolute top-0 left-0 ${article.color} text-white px-3 py-1 text-xs font-semibold`}
                >
                  {article.category}
                </div>
              </div>
              <div className="p-4 flex flex-col justify-between h-full gap-4">
                <h3 className="font-medium text-gray-900 mb-4 text-lg leading-snug line-clamp-3 min-h-[4.5rem]">
                  {article.title}
                </h3>
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover mb-4"
                />
                <Button variant="outlined" size="sm" className="w-fit">
                  Read more
                </Button>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
