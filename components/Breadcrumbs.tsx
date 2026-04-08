"use client";

import { useBreadcrumb } from "@/contexts/BreadcrumbContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const { locale } = useLanguage();
  const { segmentOverrides, customItems } = useBreadcrumb();
  const isUrdu = locale === "ur";

  if (pathname === "/") {
    return null;
  }

  if (customItems) {
    return (
      <nav
        className="bg-gray-50 border-b border-gray-200 sticky top-[52px] lg:top-[64px] z-40"
        aria-label="Breadcrumb"
      >
        <div className="max-w-4xl lg:max-w-6xl mx-auto py-3 px-6 lg:px-0">
          <ol className="flex items-center space-x-2 text-sm">
            {customItems.map((item, index) => {
              const isLast = index === customItems.length - 1;
              const isHome = index === 0;
              return (
                <li key={`${item.href}-${index}`} className="flex items-center">
                  {index > 0 && (
                    isUrdu
                      ? <ChevronLeft className="w-4 h-4 text-gray-400 mx-2" />
                      : <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
                  )}
                  {isLast ? (
                    <span className="text-gray-900 font-medium flex items-center">
                      {isHome && <Home className="w-4 h-4 mr-1" />}
                      {!isHome && item.label}
                    </span>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-gray-600 hover:text-primary transition-colors flex items-center"
                    >
                      {isHome && <Home className="w-4 h-4" />}
                      {!isHome && item.label}
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
    "glp-diabesity": "GLP-1 & Diabesity",
    "glp-hub": "The GLP-1 Hub",
    "bmi-calculator": "BMI Calculator",
    "calorie-counter": "Calorie Counter",
    "hba1c-translator": "HbA1c Translator",
    "hypo-wallet-card": "Hypo Emergency Card",
    community: "Community",
    threads: "Threads",
    create: "Create Post",
    dashboard: "Dashboard",
    tools: "Tools",
    login: "Login",
    signup: "Sign up",
    register: "Register",
    learn: "Learn",
    diet: "Diet",
    medication: "Medication",
    "how-to": "How To",
  };

  const labelMapUr: Record<string, string> = {
    blogs: "بلاگز",
    news: "خبریں",
    recipes: "ترکیبیں",
    research: "تحقیق",
    resources: "وسائل",
    about: "ہمارے بارے میں",
    faqs: "اکثر پوچھے گئے سوالات",
    doctors: "ماہر سے رابطہ کریں",
    contact: "رابطہ",
    products: "مصنوعات",
    "urdu-guides": "اردو رہنما",
    "five-ways-to-move-more": "زیادہ حرکت کے پانچ طریقے",
    "enjoy-food": "کھانے سے لطف اٹھائیں",
    "daily-care-and-monitoring": "روزانہ کی دیکھ بھال اور نگرانی",
    "privacy-policy": "رازداری کی پالیسی",
    "terms-of-use": "استعمال کی شرائط",
    "glp-diabesity": "GLP-1 اور ڈائیبیسٹی",
    "glp-hub": "GLP-1 ہب",
    "bmi-calculator": "BMI کیلکولیٹر",
    "calorie-counter": "کیلوری کاؤنٹر",
    "hba1c-translator": "HbA1c ٹرانسلیٹر",
    "hypo-wallet-card": "ہائپو ایمرجنسی کارڈ",
    community: "کمیونٹی",
    threads: "تھریڈز",
    create: "پوسٹ بنائیں",
    dashboard: "ڈیش بورڈ",
    tools: "ٹولز",
    login: "لاگ ان",
    signup: "سائن اپ",
    register: "رجسٹر",
    learn: "سیکھیں",
    diet: "غذا",
    medication: "ادویات",
    "how-to": "کیسے کریں",
  };

  const resourceTabMap: Record<string, string> = {
    blogs: "blog",
    news: "news",
    recipes: "recipes",
    research: "research",
  };

  const breadcrumbs = [
    { label: isUrdu ? "ہوم" : "Home", href: "/" },
    ...pathSegments.map((segment, index) => {
      let href = "/" + pathSegments.slice(0, index + 1).join("/");

      const label = segmentOverrides[segment] ||
        (isUrdu
          ? labelMapUr[segment] ||
            segment
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")
          : labelMap[segment] ||
            segment
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" "));

      if (index === 0 && resourceTabMap[segment]) {
        href = `/resources?tab=${resourceTabMap[segment]}`;
      }

      return { label, href };
    }),
  ];

  return (
    <nav
      className="bg-gray-50 border-b border-gray-200 sticky top-[52px] lg:top-[64px] z-40"
      aria-label="Breadcrumb"
    >
      <div className="max-w-4xl lg:max-w-6xl mx-auto py-3 px-6 lg:px-0">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbs.map((breadcrumb, index) => {
            const isLast = index === breadcrumbs.length - 1;
            const isHome = index === 0;

            return (
              <li key={breadcrumb.href} className="flex items-center">
                {index > 0 && (
                  isUrdu
                    ? <ChevronLeft className="w-4 h-4 text-gray-400 mx-2" />
                    : <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
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
