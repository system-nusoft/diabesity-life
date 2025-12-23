"use client";

import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  const pathSegments = pathname.split("/").filter((segment) => segment);

  const labelMap: Record<string, string> = {
    blogs: "Blogs",
    news: "News",
    recipes: "Recipes",
    research: "Research",
    resources: "Resources",
    about: "About",
    faqs: "FAQs",
    doctors: "Contact a Specialist",
    contact: "Contact",
    products: "Products",
    "urdu-guides": "Urdu Guides",
    "five-ways-to-move-more": "Five Ways to Move More",
    "enjoy-food": "Enjoy Food",
    "daily-care-and-monitoring": "Daily Care and Monitoring",
    "privacy-policy": "Privacy Policy",
    "terms-of-use": "Terms of Use",
  };

  const resourceTabMap: Record<string, string> = {
    blogs: "blog",
    news: "news",
    recipes: "recipe",
    research: "research",
  };

  const breadcrumbs = [
    { label: "Home", href: "/" },
    ...pathSegments.map((segment, index) => {
      let href = "/" + pathSegments.slice(0, index + 1).join("/");

      // Use custom label if available, otherwise format the segment
      const label =
        labelMap[segment] ||
        segment
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");

      if (index === 0 && resourceTabMap[segment]) {
        href = `/resources?tab=${resourceTabMap[segment]}`;
      }

      return { label, href };
    }),
  ];

  return (
    <nav
      className="bg-gray-50 border-b border-gray-200"
      aria-label="Breadcrumb"
    >
      <div className="max-w-7xl mx-auto px-6 py-3">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbs.map((breadcrumb, index) => {
            const isLast = index === breadcrumbs.length - 1;
            const isHome = index === 0;

            return (
              <li key={breadcrumb.href} className="flex items-center">
                {index > 0 && (
                  <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
                )}
                {isLast ? (
                  <span className="text-gray-900 font-medium flex items-center">
                    {isHome && <Home className="w-4 h-4 mr-1" />}
                    {breadcrumb.label}
                  </span>
                ) : (
                  <Link
                    href={breadcrumb.href}
                    className="text-gray-600 hover:text-primary transition-colors flex items-center"
                  >
                    {isHome && <Home className="w-4 h-4 mr-1" />}
                    {!isHome && breadcrumb.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
