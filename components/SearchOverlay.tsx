"use client";

import { getAllBlogArticles } from "@/lib/blogContent";
import { getAllNewsArticles } from "@/lib/newsContent";
import { getAllRecipes } from "@/lib/recipeContent";
import { getAllResearchArticles } from "@/lib/researchContent";
import { Search, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type ResultType = "Blog" | "News" | "Research" | "Recipe" | "Page" | "Tool";

interface SearchResult {
  title: string;
  href: string;
  type: ResultType;
  excerpt?: string;
}

const STATIC_PAGES: SearchResult[] = [
  { title: "BMI Calculator", href: "/bmi-calculator", type: "Tool" },
  { title: "HbA1c Translator", href: "/hba1c-translator", type: "Tool" },
  { title: "Calorie Counter", href: "/calorie-counter", type: "Tool" },
  { title: "Hypo Emergency Card", href: "/hypo-wallet-card", type: "Tool" },
  { title: "GLP-1 & Diabesity", href: "/glp-diabesity", type: "Page" },
  { title: "The GLP-1 Hub", href: "/glp-hub", type: "Page" },
  { title: "About Us", href: "/about", type: "Page" },
  { title: "FAQs", href: "/faqs", type: "Page" },
  { title: "Community", href: "/community", type: "Page" },
  { title: "Contact a Specialist", href: "/doctors", type: "Page" },
  { title: "Dashboard", href: "/dashboard", type: "Page" },
  { title: "Urdu Guides", href: "/urdu-guides", type: "Page" },
];

const TYPE_COLORS: Record<ResultType, string> = {
  Blog: "bg-primary",
  News: "bg-primary",
  Research: "bg-primary",
  Recipe: "bg-primary",
  Tool: "bg-primary",
  Page: "bg-primary",
};

function runSearch(query: string): SearchResult[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  const blogs = getAllBlogArticles()
    .filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.excerpt?.toLowerCase().includes(q),
    )
    .slice(0, 4)
    .map((a) => ({
      title: a.title,
      href: `/blogs/${a.slug}`,
      type: "Blog" as const,
      excerpt: a.excerpt,
    }));

  const news = getAllNewsArticles()
    .filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.excerpt?.toLowerCase().includes(q),
    )
    .slice(0, 4)
    .map((a) => ({
      title: a.title,
      href: `/news/${a.slug}`,
      type: "News" as const,
      excerpt: a.excerpt,
    }));

  const research = getAllResearchArticles()
    .filter((a) => a.title.toLowerCase().includes(q))
    .slice(0, 4)
    .map((a) => ({
      title: a.title,
      href: `/research/${a.slug}`,
      type: "Research" as const,
    }));

  const recipes = getAllRecipes()
    .filter((a) => a.title.toLowerCase().includes(q))
    .slice(0, 4)
    .map((a) => ({
      title: a.title,
      href: `/recipes/${a.slug}`,
      type: "Recipe" as const,
    }));

  const pages = STATIC_PAGES.filter((p) =>
    p.title.toLowerCase().includes(q),
  ).slice(0, 3);

  return [...blogs, ...news, ...research, ...recipes, ...pages];
}

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[] | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setResults(null);
      setIsSearching(false);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Reset results when query changes so button reappears
  useEffect(() => {
    setResults(null);
  }, [query]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const handleSearch = () => {
    if (!query.trim()) return;
    setIsSearching(true);
    setTimeout(() => {
      setResults(runSearch(query));
      setIsSearching(false);
    }, 500);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch();
  };

  const handleSelect = (href: string) => {
    router.push(href);
    onClose();
  };

  if (!isOpen) return null;

  const hasQuery = query.trim().length > 0;
  const searched = results !== null;

  return (
    <div
      className="fixed inset-0 bg-black/60 z-[60] flex items-start justify-center pt-20 px-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-white shadow-2xl flex flex-col"
        style={{ maxHeight: "70vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors z-10"
        >
          <X className="w-4 h-4 text-gray-600" />
        </button>

        {/* Input + Search button row */}
        <div className="flex">
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search..."
            className="flex-1 px-3 py-3 text-xs lg:px-4 lg:py-4 lg:text-sm text-gray-800 placeholder-gray-400 focus:outline-none"
          />
          <button
            onClick={handleSearch}
            disabled={!hasQuery || isSearching}
            className="flex items-center gap-1.5 px-3 py-3 lg:px-6 lg:py-4 bg-primary text-white text-xs lg:text-sm font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
          >
            Search diabesity.life
            <Search className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto">
          {/* Loader */}
          {isSearching && (
            <div className="flex justify-center py-6">
              <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
            </div>
          )}

          {/* No results */}
          {!isSearching && searched && results!.length === 0 && (
            <p className="px-4 py-6 text-sm text-gray-500 text-center">
              No results found for &ldquo;{query}&rdquo;
            </p>
          )}

          {/* Results */}
          {!isSearching && searched && results!.length > 0 && (
            <ul>
              {results!.map((result, i) => (
                <li key={`${result.href}-${i}`}>
                  <button
                    onClick={() => handleSelect(result.href)}
                    className="w-full flex items-start gap-3 px-4 py-3 hover:bg-gray-50 transition-colors text-left border-b border-gray-100 last:border-0"
                  >
                    <span
                      className={`shrink-0 mt-0.5 w-16 h-5 flex items-center justify-center text-[10px] font-bold text-white uppercase tracking-wide ${TYPE_COLORS[result.type]}`}
                    >
                      {result.type}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {result.title}
                      </p>
                      {result.excerpt && (
                        <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">
                          {result.excerpt}
                        </p>
                      )}
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
