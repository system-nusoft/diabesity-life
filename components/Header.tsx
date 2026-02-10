"use client";

import { ChevronDown, Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import HealthcareProfessionalModal from "./HealthcareProfessionalModal";
import { Button } from "./ui/button";

interface MenuItem {
  label: string;
  url?: string;
  children?: MenuItem[];
  columns?: MenuColumn[];
}

interface MenuColumn {
  heading: string;
  items: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    label: "GLP-1 & Diabesity",
    columns: [
      {
        heading: "GLP-1 & Diabesity",
        items: [
          {
            label: "What is Diabesity?",
            url: "/glp-diabesity#obesity-diabetes-connection",
          },
          { label: "What is Diabetes?", url: "/glp-diabesity#diabetes-101" },
          { label: "What is Obesity?", url: "/glp-diabesity#obesity-101" },
          {
            label: "GLP-1 Agonists & Newer Agents",
            url: "/glp-diabesity#glp1-agonists",
          },
          { label: "Clinical Corner", url: "/glp-diabesity#clinical-corner" },
          {
            label: "GLP-1 Based Treatments",
            url: "/glp-diabesity#glp1-treatments",
          },
        ],
      },
      {
        heading: "Learn",
        items: [
          {
            label: "Risk Factors & Screening",
            url: "/learn#risk-factors-screening",
          },
          { label: "Common Myths vs. Facts", url: "/learn#myths-vs-facts" },
          { label: "Clinical Corner", url: "/learn#clinical-corner" },
        ],
      },
      {
        heading: "Diet",
        items: [
          {
            label: "Ask a Nutritionist",
            url: "/diet#ask-a-nutritionist",
          },
          {
            label: "Desi Meal Makeovers",
            url: "/diet#desi-meal-makeovers",
          },
          {
            label: "Low-GI & Glycaemic Load Tips",
            url: "/diet#low-gi-tips",
          },
          {
            label: "Portion Control & Practical Guides",
            url: "/diet#portion-control",
          },
          {
            label: "Sample Diet Plans",
            url: "/diet#sample-diet-plans",
          },
          {
            label: "Snacking & Street-Food Survival",
            url: "/diet#snacking-street-food",
          },
          {
            label: "Supplements & Herbal Remedies",
            url: "/diet#supplements-herbal-remedies",
          },
          {
            label: "Behavioural Tools",
            url: "/diet#behavioural-tools",
          },
        ],
      },
      {
        heading: "Medication",
        items: [
          {
            label: "First-line & Common Drugs",
            url: "/medication#first-line-drugs",
          },
          {
            label: "Injectables: Handling & Storage",
            url: "/medication#injectables-handling",
          },
          {
            label: "Safety, Interactions & Monitoring",
            url: "/medication#safety-interactions-monitoring",
          },
          {
            label: "Affordability & Access",
            url: "/medication#affordability-access",
          },
          {
            label: "Surgery & Advanced Therapies",
            url: "/medication#surgery-advanced-therapies",
          },
        ],
      },
    ],
  },
  {
    label: "Tools",
    columns: [
      {
        heading: "Tools",
        items: [
          { label: "BMI Calculator", url: "/bmi-calculator" },
          { label: "Calorie Counter", url: "/calorie-counter" },
          { label: "HbA1c Translator", url: "/hba1c-translator" },
          { label: "Hypo Emergency Card", url: "/hypo-wallet-card" },
        ],
      },
    ],
  },
  {
    label: "Resources",
    columns: [
      {
        heading: "How To",
        items: [
          { label: "How to Start?", url: "/how-to#how-to-start" },
          { label: "How to Exercise at Home?", url: "/how-to#how-to-exercise" },
          {
            label: "How to Read Food Labels?",
            url: "/how-to#how-to-read-labels",
          },
          {
            label: "How to Handle Social Events?",
            url: "/how-to#how-to-handle-social-events",
          },
          {
            label: "How to Use Prescription Treatments?",
            url: "/how-to#how-to-use-prescription-treatments",
          },
          {
            label: "How to Handle Blood Sugar?",
            url: "/how-to#how-to-handle-blood-sugar",
          },
        ],
      },
      {
        heading: "Resources",
        items: [
          { label: "Blogs", url: "/resources?tab=blogs" },
          { label: "News articles", url: "/resources?tab=news" },
          { label: "Research articles", url: "/resources?tab=research" },
          { label: "Recipes", url: "/resources?tab=recipes" },
        ],
      },
    ],
  },
  {
    label: "Frequently asked questions",
    url: "/faqs",
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeLevel2, setActiveLevel2] = useState<string | null>(null);
  const [activeLevel3, setActiveLevel3] = useState<string | null>(null);
  const [mobileExpandedItems, setMobileExpandedItems] = useState<string[]>([]);
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const isTransitioningRef = useRef<boolean>(false);

  useEffect(() => {
    let ticking = false;
    const threshold = 50;
    const hysteresis = 25;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Don't change state while header is transitioning
          if (isTransitioningRef.current) {
            ticking = false;
            return;
          }

          const scrollY = window.scrollY;

          // Use hysteresis to prevent oscillation at the boundary
          if (scrollY > threshold + hysteresis) {
            if (!isScrolled) {
              isTransitioningRef.current = true;
              setIsScrolled(true);
            }
          } else if (scrollY < threshold - hysteresis) {
            if (isScrolled) {
              isTransitioningRef.current = true;
              setIsScrolled(false);
            }
          }
          // Between (threshold - hysteresis) and (threshold + hysteresis), maintain current state

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  // Clear transition lock after transition completes
  useEffect(() => {
    if (isTransitioningRef.current) {
      const timer = setTimeout(() => {
        isTransitioningRef.current = false;
      }, 400);

      return () => clearTimeout(timer);
    }
  }, [isScrolled]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        activeMenu &&
        megaMenuRef.current &&
        navRef.current &&
        !megaMenuRef.current.contains(target) &&
        !navRef.current.contains(target)
      ) {
        setActiveMenu(null);
        setActiveLevel2(null);
        setActiveLevel3(null);
      }
    };

    if (activeMenu) {
      const timer = setTimeout(() => {
        document.addEventListener("mousedown", handleClickOutside);
      }, 100);

      return () => {
        clearTimeout(timer);
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [activeMenu]);

  const toggleMobileItem = (label: string) => {
    setMobileExpandedItems((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label],
    );
  };

  const renderMegaMenu = (
    items: MenuItem[] | MenuColumn[],
    parentLabel: string,
  ) => {
    /* ========== NESTING FORMAT (COMMENTED OUT) ========== */
    /* Uncomment this section to revert to 3-step nesting format */
    /*
    return (
      <div className="bg-primary text-white shadow-lg mega-menu-dropdown">
        <div className="lg:max-w-4xl xl:max-w-6xl 2xl:max-w-6xl mx-auto px-6 py-8">
          <div className="grid grid-cols-3 gap-8 min-h-[320px]">
            {/* Column 1: Main menu items *\/}
            <div>
              <h3 className="text-lg font-bold mb-2 border-b-2 border-secondary pb-2">
                {parentLabel}
              </h3>
              <ul className="space-y-1 mt-4">
                {items.map((item, index) => (
                  <li key={index}>
                    {item.url ? (
                      <Link
                        href={item.url}
                        className="block py-2 px-3 rounded hover:bg-white/10 transition-colors"
                        onClick={() => setActiveMenu(null)}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <button
                        className={`w-full text-left py-2 px-3 rounded hover:bg-white/10 transition-colors flex items-center justify-between group ${
                          activeLevel2 === item.label ? "bg-white/10" : ""
                        }`}
                        onClick={(e) => {
                          e.stopPropagation();
                          if (activeLevel2 === item.label) {
                            setActiveLevel2(null);
                            setActiveLevel3(null);
                          } else {
                            setActiveLevel2(item.label);
                            setActiveLevel3(null);
                          }
                        }}
                      >
                        {item.label}
                        {item.children && (
                          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        )}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Level 2 nested items *\/}
            {activeLevel2 &&
              items.find((item) => item.label === activeLevel2) && (
                <div className="bg-white/10 px-4 -my-4 py-4">
                  {items
                    .filter((item) => item.label === activeLevel2)
                    .map((item, index) => (
                      <div key={index}>
                        <h3 className="text-lg font-bold mb-2 border-b-2 border-secondary pb-2">
                          {item.label}
                        </h3>
                        {item.children && (
                          <ul className="space-y-1 mt-4">
                            {item.children.map((child, childIndex) => (
                              <li key={childIndex}>
                                {child.url ? (
                                  <Link
                                    href={child.url}
                                    className="block py-2 px-3 rounded hover:bg-white/10 transition-colors"
                                    onClick={() => {
                                      setActiveMenu(null);
                                      setActiveLevel2(null);
                                      setActiveLevel3(null);
                                    }}
                                  >
                                    {child.label}
                                  </Link>
                                ) : (
                                  <button
                                    className={`w-full text-left py-2 px-3 rounded hover:bg-white/20 transition-colors flex items-center justify-between group ${
                                      activeLevel3 === child.label
                                        ? "bg-white/20"
                                        : ""
                                    }`}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      if (activeLevel3 === child.label) {
                                        setActiveLevel3(null);
                                      } else {
                                        setActiveLevel3(child.label);
                                      }
                                    }}
                                  >
                                    {child.label}
                                    {child.children && (
                                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    )}
                                  </button>
                                )}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                </div>
              )}

            {/* Column 3: Level 3 nested items *\/}
            {activeLevel3 &&
              activeLevel2 &&
              items.find((item) => item.label === activeLevel2) && (
                <div className="bg-white/20 px-4 -my-4 py-4">
                  {items
                    .filter((item) => item.label === activeLevel2)
                    .flatMap((item) => item.children || [])
                    .filter((child) => child.label === activeLevel3)
                    .map((child, index) => (
                      <div key={index}>
                        <h3 className="text-lg font-bold mb-2 border-b-2 border-secondary pb-2">
                          {child.label}
                        </h3>
                        {child.children && (
                          <ul className="space-y-1 mt-4">
                            {child.children.map(
                              (grandchild, grandchildIndex) => (
                                <li key={grandchildIndex}>
                                  {grandchild.url && (
                                    <Link
                                      href={grandchild.url}
                                      className="block py-2 px-3 rounded hover:bg-white/10 transition-colors"
                                      onClick={() => {
                                        setActiveMenu(null);
                                        setActiveLevel2(null);
                                        setActiveLevel3(null);
                                      }}
                                    >
                                      {grandchild.label}
                                    </Link>
                                  )}
                                </li>
                              )
                            )}
                          </ul>
                        )}
                      </div>
                    ))}
                </div>
              )}
          </div>
        </div>
      </div>
    );
    */
    /* ========== END NESTING FORMAT ========== */

    /* ========== 4-COLUMN LAYOUT WITH HEADINGS (ACTIVE) ========== */
    // Check if items is MenuColumn[] (has heading property)
    if (items.length > 0 && "heading" in items[0]) {
      const columns = items as MenuColumn[];
      return (
        <div className="bg-primary text-white shadow-lg mega-menu-dropdown">
          <div className="lg:max-w-4xl xl:max-w-6xl 2xl:max-w-6xl mx-auto px-6 py-8">
            <div className="grid grid-cols-4 gap-8">
              {/* Render each column with heading */}
              {columns.map((column, colIndex) => (
                <div key={colIndex} className="min-h-[320px]">
                  <h3 className="text-lg font-bold mb-2 border-b-2 border-secondary pb-2">
                    {column.heading}
                  </h3>
                  <ul className="space-y-1 mt-4">
                    {column.items.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.url || "#"}
                          className="block py-2 px-3 rounded hover:bg-white/10 transition-colors"
                          onClick={() => setActiveMenu(null)}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    const menuItems = items as MenuItem[];
    const itemsPerColumn = Math.ceil(menuItems.length / 3);
    const column1 = menuItems.slice(0, itemsPerColumn);
    const column2 = menuItems.slice(itemsPerColumn, itemsPerColumn * 2);
    const column3 = menuItems.slice(itemsPerColumn * 2);

    return (
      <div className="bg-primary text-white shadow-lg mega-menu-dropdown">
        <div className="lg:max-w-4xl xl:max-w-6xl 2xl:max-w-6xl mx-auto px-6 py-8">
          <div className="grid grid-cols-3 gap-8">
            {/* Column 1 */}
            <div>
              <ul className="space-y-1">
                {column1.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.url || "#"}
                      className="block py-2 px-3 rounded hover:bg-white/10 transition-colors"
                      onClick={() => setActiveMenu(null)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <ul className="space-y-1">
                {column2.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.url || "#"}
                      className="block py-2 px-3 rounded hover:bg-white/10 transition-colors"
                      onClick={() => setActiveMenu(null)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <ul className="space-y-1">
                {column3.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.url || "#"}
                      className="block py-2 px-3 rounded hover:bg-white/10 transition-colors"
                      onClick={() => setActiveMenu(null)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
    /* ========== END 4-COLUMN LAYOUT WITH HEADINGS ========== */
  };

  const renderMobileMenuItem = (item: MenuItem, depth: number = 0) => {
    const isExpanded = mobileExpandedItems.includes(item.label);
    const hasChildren =
      (item.children && item.children.length > 0) ||
      (item.columns && item.columns.length > 0);

    const getBackgroundClass = () => {
      if (depth === 1) return "bg-white/10";
      if (depth === 2) return "bg-white/20";
      if (depth === 3) return "bg-white/30";
      return "";
    };

    return (
      <div key={item.label} className={getBackgroundClass()}>
        <div
          className="flex items-center justify-between py-3 border-b border-white/20"
          style={{ paddingLeft: `${depth * 1.5}rem` }}
        >
          {item.url ? (
            <Link
              href={item.url}
              className="flex-1 text-white font-medium hover:text-secondary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ) : (
            <button
              className="flex-1 text-left text-white font-medium hover:text-secondary transition-colors"
              onClick={() => hasChildren && toggleMobileItem(item.label)}
            >
              {item.label}
            </button>
          )}
          {hasChildren && (
            <button
              onClick={() => toggleMobileItem(item.label)}
              className="p-2"
            >
              <ChevronDown
                className={`w-4 h-4 text-white transition-transform ${
                  isExpanded ? "rotate-180" : ""
                }`}
              />
            </button>
          )}
        </div>
        {hasChildren && isExpanded && (
          <div>
            {item.children &&
              item.children.map((child) =>
                renderMobileMenuItem(child, depth + 1),
              )}
            {item.columns &&
              item.columns.map((column) => (
                <div key={column.heading}>
                  {/* Column heading */}
                  <div
                    className="py-2 px-3 text-secondary font-bold text-sm uppercase tracking-wide border-b border-white/20"
                    style={{ paddingLeft: `${(depth + 1) * 1.5}rem` }}
                  >
                    {column.heading}
                  </div>
                  {/* Column items */}
                  {column.items.map((columnItem) =>
                    renderMobileMenuItem(columnItem, depth + 1),
                  )}
                </div>
              ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <header
      className={`bg-white border-b border-gray-200 sticky top-0 z-50 flex flex-col transition-all duration-300 ${
        isScrolled ? "gap-0" : "gap-0 lg:gap-4"
      }`}
    >
      <div
        className={`transition-all duration-300 ${
          isScrolled ? "h-0 opacity-0" : "h-1 opacity-100"
        } bg-secondary w-full`}
      ></div>

      {/* Top Row - Logo, Contact, CTAs */}
      <div
        className={`transition-all duration-300 overflow-hidden ${
          isScrolled ? "max-h-0 opacity-0" : "max-h-32 opacity-100"
        }`}
      >
        <div className="flex items-center">
          {/* Sidebar Toggle Button - Desktop Only */}
          {/* <button
            onClick={toggleSidebar}
            className="hidden lg:block text-primary-text hover:text-primary transition-colors px-6 py-3"
            aria-label="Toggle sidebar"
          >
            <Menu className="h-6 w-6" />
          </button> */}

          {/* Main Top Row Content */}
          <div className="flex-1 lg:max-w-4xl xl:max-w-6xl 2xl:max-w-6xl mx-auto py-2 lg:pt-2 px-4 lg:px-0">
            <div className="flex items-center justify-between gap-8">
              {/* Logo and Contact Section with Separator */}
              <div className="hidden lg:flex items-end gap-6">
                {/* Logo */}
                <div className="flex flex-col items-start gap-2">
                  <Link href="/" className="flex items-center flex-shrink-0">
                    <img
                      src="/logo.png"
                      alt="Diabesity"
                      className="h-[80px] w-auto"
                    />
                  </Link>
                </div>

                {/* Vertical Separator */}
                <div className="h-16 w-px bg-primary"></div>

                {/* Contact Number */}
                <div className="flex flex-col gap-2">
                  <span className="text-sm text-primary-text whitespace-nowrap">
                    Talk to us about diabetes
                  </span>
                  <a
                    href="tel:+923710622837"
                    className="flex items-center gap-2 text-2xl font-bold text-primary whitespace-nowrap hover:underline transition-colors"
                  >
                    <Phone className="w-6 h-6" />
                    03710-622837
                  </a>
                </div>
              </div>

              {/* Mobile - Logo and Contact Info */}
              <div className="lg:hidden flex justify-between items-center flex-1 gap-2">
                <Link href="/" className="flex items-center">
                  <img
                    src="/logo.png"
                    alt="Diabesity"
                    className="h-[45px] w-auto"
                  />
                </Link>
                <div className="text-end">
                  <p className="text-xs text-primary-text">
                    Talk to us about diabetes
                  </p>
                  <a
                    href="tel:+923710622837"
                    className="flex items-center justify-end gap-1 text-md font-bold text-primary"
                  >
                    <Phone className="w-4 h-4" />
                    03710-622837
                  </a>
                </div>
              </div>

              {/* Right CTAs - Desktop Only */}
              <div className="hidden lg:flex items-center gap-3 flex-shrink-0 mr-0.5">
                <Link href="#">
                  <button className="px-8 py-2 border-2 border-gray-500 text-gray-500 transition-colors font-medium text-xs whitespace-nowrap">
                    Our community
                  </button>
                </Link>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-8 py-2 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors font-medium text-xs whitespace-nowrap"
                >
                  For Professionals
                </button>
              </div>

              {/* Mobile Menu Button - Hidden, will be in separate row */}
              <button
                className="hidden text-primary-text"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Row - Menu and Consultation Button */}
      <div className="lg:hidden border-t border-black">
        <div className="flex items-center justify-between px-4 py-2 border-b-3 border-primary mb-[-1]">
          <button
            className="flex items-center gap-2 text-primary font-bold"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
            Menu
          </button>
          <a href="tel:+923710622837" rel="noopener noreferrer">
            <Button variant="primary" size="sm" className="px-4 py-1">
              Get a consultation
            </Button>
          </a>
        </div>
      </div>

      {/* Bottom Row - Navigation (Desktop Only) */}
      <div className="hidden lg:block mb-[-1] mega-menu-container">
        <div className="lg:max-w-4xl xl:max-w-6xl 2xl:max-w-6xl mx-auto">
          <div
            className={`flex items-center justify-between gap-20 relative ${
              isScrolled ? "" : "border-b-4 border-primary"
            }`}
          >
            <nav
              ref={navRef}
              className="flex items-center justify-between flex-1"
            >
              {menuItems.map((item, index) => (
                <div key={index} className="relative">
                  {item.url ? (
                    <Link
                      href={item.url}
                      className={`text-md font-medium transition-colors px-4 pt-4 pb-6 ${
                        pathname === item.url
                          ? "text-primary"
                          : "text-primary-text hover:bg-primary hover:text-white"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      onClick={() => {
                        if (activeMenu === item.label) {
                          setActiveMenu(null);
                          setActiveLevel2(null);
                          setActiveLevel3(null);
                        } else {
                          setActiveMenu(item.label);
                          setActiveLevel2(null);
                          setActiveLevel3(null);
                        }
                      }}
                      className={`text-md font-medium transition-colors px-4 pt-4 pb-6 flex items-center gap-1 ${
                        pathname.startsWith("/about") &&
                        item.label === "About diabesity"
                          ? "text-primary"
                          : pathname.startsWith("/resources") &&
                              item.label === "Resources"
                            ? "text-primary"
                            : activeMenu === item.label
                              ? "bg-primary text-white"
                              : "text-primary-text hover:bg-primary hover:text-white"
                      }`}
                    >
                      {item.label}
                      {(item.children || item.columns) && (
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            activeMenu === item.label ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </button>
                  )}
                </div>
              ))}
            </nav>

            <a href="tel:+923710622837" rel="noopener noreferrer">
              <Button variant="primary" size="md" className="px-8 mr-0.5">
                Get a consultation
              </Button>
            </a>
          </div>
        </div>
        {/* Primary Border Bottom - Only visible when scrolled */}
        <div
          className={`transition-all duration-300 ${
            isScrolled ? "h-1 opacity-100" : "h-0 opacity-0"
          } bg-primary w-full`}
        ></div>

        {/* Mega Menu */}
        {activeMenu &&
          (menuItems.find((item) => item.label === activeMenu)?.children ||
            menuItems.find((item) => item.label === activeMenu)?.columns) && (
            <div
              ref={megaMenuRef}
              className="absolute left-0 right-0 top-full lg:max-w-4xl xl:max-w-6xl 2xl:max-w-6xl mx-auto"
            >
              {renderMegaMenu(
                (menuItems.find((item) => item.label === activeMenu)!.columns ||
                  menuItems.find((item) => item.label === activeMenu)!
                    .children)!,
                activeMenu,
              )}
            </div>
          )}
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-primary border-t-4 border-secondary">
          <div className="px-6 py-6">
            <nav className="flex flex-col">
              {/* Main Navigation Links with Nested Items */}
              {menuItems.map((item) => renderMobileMenuItem(item))}

              {/* CTAs Section */}
              <div className="pt-6 space-y-3 border-t-2 border-white/20 mt-4">
                <Link
                  href="/about"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full px-4 py-3 border-2 border-white text-white hover:bg-white hover:text-primary transition-colors font-semibold text-center"
                >
                  Our Research
                </Link>
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsModalOpen(true);
                  }}
                  className="w-full px-4 py-3 border-2 border-white text-white hover:bg-white hover:text-primary transition-colors font-semibold"
                >
                  For Healthcare Professionals
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Healthcare Professional Modal */}
      <HealthcareProfessionalModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </header>
  );
}
