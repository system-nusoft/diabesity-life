"use client";

import { Card } from "@/components/ui/card";
import Link from "next/link";

interface NewsArticleCard {
  category: string;
  title: string;
  image: string;
  color: string;
  slug?: string;
}

interface NewsClientProps {
  news: NewsArticleCard[];
}

export default function NewsClient({ news }: NewsClientProps) {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section
        className="relative h-[500px] md:h-[550px] overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2100')",
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

      {/* News Grid Section */}
      <section className="pb-16 md:pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
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
                    <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-5 py-2 font-medium transition-colors w-fit">
                      Learn more
                    </button>
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
