"use client";

import {
  categoryLabels,
  getProductsByCategory,
  Product,
  ProductCategory,
  productTabs,
} from "@/lib/productsData";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProductsClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const tabParam = searchParams.get("tab");

  // Get default tab (first tab in the array)
  const defaultTab = productTabs[0].id;

  // Check if tabParam is a valid tab id
  const isValidTab = productTabs.some((tab) => tab.id === tabParam);

  const [activeTab, setActiveTab] = useState<ProductCategory>(
    isValidTab ? (tabParam as ProductCategory) : defaultTab
  );

  useEffect(() => {
    if (tabParam && productTabs.some((tab) => tab.id === tabParam)) {
      setActiveTab(tabParam as ProductCategory);
    }
  }, [tabParam]);

  const handleTabChange = (tab: ProductCategory) => {
    setActiveTab(tab);
    router.push(`/products?tab=${tab}`, { scroll: false });
  };

  const filteredProducts = getProductsByCategory(activeTab);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary py-16 md:py-20 px-6 lg:px-0">
        <div className="max-w-4xl lg:max-w-6xl mx-auto">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
            HCP Portal
          </h1>
          <p className="text-white text-lg md:text-xl max-w-3xl">
            Healthcare professional resources and product information for
            Semaglutide-based treatments
          </p>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl lg:max-w-6xl mx-auto">
          {/* Mobile Dropdown */}
          <div className="md:hidden py-4 px-6">
            <select
              value={activeTab}
              onChange={(e) =>
                handleTabChange(e.target.value as ProductCategory)
              }
              className="w-full px-2 py-3 text-base font-medium bg-white border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
            >
              {productTabs.map((tab) => (
                <option key={tab.id} value={tab.id}>
                  {tab.label}
                </option>
              ))}
            </select>
          </div>

          {/* Desktop Tabs */}
          <div className="hidden md:flex gap-0">
            {productTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`px-8 py-4 text-lg font-medium transition-colors ${
                  activeTab === tab.id
                    ? "bg-white text-primary border-b-2 border-primary"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24 bg-white px-6 lg:px-0">
        <div className="max-w-4xl lg:max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            {categoryLabels[activeTab]} products
          </h2>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product: Product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.id}`}
                  className="group bg-white border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {/* Product Image */}
                  <div className="relative h-48 bg-gray-50 flex items-center justify-center p-4">
                    <Image
                      src={product.logoImage}
                      alt={product.name}
                      width={300}
                      height={200}
                      className="object-contain max-h-full"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-500 text-sm mb-3">
                      ({product.genericName})
                    </p>

                    {/* Dosages */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.dosages.map((dosage: string) => (
                        <span
                          key={dosage}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium"
                        >
                          {dosage}
                        </span>
                      ))}
                    </div>

                    {/* View Details Link */}
                    <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                      View details
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600">
                No products available in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
