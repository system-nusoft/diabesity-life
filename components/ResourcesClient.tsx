"use client";

import BlogsList from "@/components/BlogsList";
import NewsList from "@/components/NewsList";
import RecipeList from "@/components/RecipeList";
import ResearchList from "@/components/ResearchList";
import { BlogArticle } from "@/lib/blogContent";
import { NewsArticle } from "@/lib/newsContent";
import { Recipe } from "@/lib/recipeContent";
import { ResearchArticle } from "@/lib/researchContent";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import HeroImage from "../public/diabetes-resources.png";

interface ResourcesClientProps {
  blogs: BlogArticle[];
  news: NewsArticle[];
  research: ResearchArticle[];
  recipes: Recipe[];
}

export default function ResourcesClient({
  blogs,
  news,
  research,
  recipes,
}: ResourcesClientProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const tabParam = searchParams.get("tab");
  const [activeTab, setActiveTab] = useState<
    "blogs" | "news" | "research" | "recipes"
  >(
    tabParam === "news"
      ? "news"
      : tabParam === "research"
      ? "research"
      : tabParam === "recipes"
      ? "recipes"
      : "blogs"
  );

  useEffect(() => {
    if (
      tabParam === "news" ||
      tabParam === "blogs" ||
      tabParam === "research" ||
      tabParam === "recipes"
    ) {
      setActiveTab(tabParam);
    }
  }, [tabParam]);

  const handleTabChange = (tab: "blogs" | "news" | "research" | "recipes") => {
    setActiveTab(tab);
    router.push(`/resources?tab=${tab}`, { scroll: false });
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="grid grid-cols-2 max-w-7xl mx-auto gap-8 md:gap-24 py-16 md:py-20 px-6">
        {/* Introduction Section */}
        <div className="flex col-span-2 md:col-span-1 justify-center items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-medium text-gray-900 mb-6">
              Resources
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed max-w-5xl mb-2">
              Explore our comprehensive collection of blogs, news, articles and
              recipes.
            </p>
          </div>
        </div>
        {/* Hero Image */}
        <div className="flex col-span-2 md:col-span-1 items-center justify-center">
          <Image
            src={HeroImage}
            alt="Resources Hero"
            className="relative overflow-hidden bg-cover bg-center"
          />
        </div>
      </section>

      {/* Tabs Section */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          {/* Mobile Dropdown */}
          <div className="md:hidden py-4">
            <select
              value={activeTab}
              onChange={(e) =>
                handleTabChange(
                  e.target.value as "blogs" | "news" | "research" | "recipes"
                )
              }
              className="w-full px-2 py-3 text-base font-medium bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="blogs">Blogs</option>
              <option value="news">News</option>
              <option value="research">Research</option>
              <option value="recipes">Recipes</option>
            </select>
          </div>

          {/* Desktop Tabs */}
          <div className="hidden md:flex gap-0">
            <button
              onClick={() => handleTabChange("blogs")}
              className={`px-8 py-4 text-lg font-medium transition-colors ${
                activeTab === "blogs"
                  ? "bg-white text-primary border-b-2 border-primary"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Blogs
            </button>
            <button
              onClick={() => handleTabChange("news")}
              className={`px-8 py-4 text-lg font-medium transition-colors ${
                activeTab === "news"
                  ? "bg-white text-primary border-b-2 border-primary"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              News
            </button>
            <button
              onClick={() => handleTabChange("research")}
              className={`px-8 py-4 text-lg font-medium transition-colors ${
                activeTab === "research"
                  ? "bg-white text-primary border-b-2 border-primary"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Research
            </button>
            <button
              onClick={() => handleTabChange("recipes")}
              className={`px-8 py-4 text-lg font-medium transition-colors ${
                activeTab === "recipes"
                  ? "bg-white text-primary border-b-2 border-primary"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Recipes
            </button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section id="content" className="pb-16 md:pb-24 bg-white">
        {activeTab === "blogs" ? (
          <BlogsList blogs={blogs} />
        ) : activeTab === "news" ? (
          <NewsList news={news} />
        ) : activeTab === "research" ? (
          <ResearchList research={research} />
        ) : (
          <RecipeList recipes={recipes} />
        )}
      </section>
    </div>
  );
}
