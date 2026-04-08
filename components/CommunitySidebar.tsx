"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { getAllBlogArticles } from "@/lib/blogContent";
import { getAllNewsArticles } from "@/lib/newsContent";
import { getAllResearchArticles } from "@/lib/researchContent";
import Link from "next/link";

interface SidebarItem {
  type: "Blog" | "News" | "Research";
  title: string;
  titleUr?: string;
  href: string;
  date: string;
}

function getRecentItems(): SidebarItem[] {
  const blogs = getAllBlogArticles()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3)
    .map(
      (b): SidebarItem => ({
        type: "Blog",
        title: b.title,
        titleUr: b.urdu?.title,
        href: `/blogs/${b.slug}`,
        date: b.date,
      }),
    );

  const news = getAllNewsArticles()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3)
    .map(
      (n): SidebarItem => ({
        type: "News",
        title: n.title,
        titleUr: n.titleUr,
        href: `/news/${n.slug}`,
        date: n.date,
      }),
    );

  const research = getAllResearchArticles()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3)
    .map(
      (r): SidebarItem => ({
        type: "Research",
        title: r.title,
        titleUr: r.titleUr,
        href: `/research/${r.slug}`,
        date: r.date,
      }),
    );

  return [...blogs, ...news, ...research]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);
}

export default function CommunitySidebar() {
  const { t, locale } = useLanguage();
  const items = getRecentItems();

  return (
    <aside className="bg-white border border-gray-200 p-5">
      <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4 pb-3 border-b border-gray-100">
        {t("community.sidebar.relatedResources")}
      </h2>
      <div className="space-y-4">
        {items.map((item, i) => (
          <Link key={i} href={item.href} className="flex gap-3 group">
            <span className="shrink-0 w-16 h-6 flex items-center justify-center bg-primary text-[10px] font-bold text-white uppercase tracking-wide">
              {t(`community.sidebar.types.${item.type.toLowerCase()}`)}
            </span>
            <p className="text-sm text-gray-700 group-hover:text-primary transition-colors leading-snug line-clamp-2">
              {locale === "ur" && item.titleUr ? item.titleUr : item.title}
            </p>
          </Link>
        ))}
      </div>
    </aside>
  );
}
